import React, { useEffect, useState } from 'react'

const StateBox = ({
  data = {},
  error = '',
  loading = '',
  minLoadDuration = 300,
  render = '',
}) => {
  const [context, setContext] = useState()
  const [lastError, setLastError] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const handleData = async () => {
    const time = new Date().getTime()

    try {
      setLastError(null)
      setIsLoading(true)

      setContext((typeof data === 'function' ? await data() : await data) || {})
    } catch (err) {
      setLastError(err)
    } finally {
      const delta = new Date().getTime() - time
      setTimeout(() => setIsLoading(false), minLoadDuration - delta)
    }
  }

  const handleRender = () => {
    try {
      if (isLoading) {
        return loading || ''
      }

      if (lastError) {
        return typeof error === 'function'
          ? error(lastError)
          : error || lastError.message
      }

      return typeof render === 'function' ? render(context) : render || ''
    } catch (err) {
      return err.message
    }
  }

  useEffect(() => {
    if (data) {
      handleData()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return handleRender()
}

export default StateBox
