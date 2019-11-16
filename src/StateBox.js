import React, { useEffect, useState } from 'react'

const StateBox = ({
  data = {},
  error,
  loading = 'Loading...',
  render = '',
}) => {
  const [context, setContext] = useState({})
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const handleData = async () => {
    try {
      setIsLoading(true)

      if (typeof data === 'function') {
        setContext(await data())
      } else {
        setContext(data)
      }
    } catch (err) {
      setErrorMessage(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleRender = () => {
    if (isLoading) {
      return loading || ''
    }

    if (errorMessage) {
      return typeof error === 'function'
        ? error(errorMessage)
        : error || errorMessage
    }

    return typeof render === 'function' ? render(context) : render || ''
  }

  useEffect(() => {
    handleData()
  }, [data])

  return handleRender()
}

export default StateBox
