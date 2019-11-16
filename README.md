# React StateBox

A component for easily orchestrating load, error, and success states.

_Note: This component requires React^16.8 since it uses hooks._

## Usage

```
<StateBox
    data={fetch('https://ipinfo.io/ip').then(res => res.text())}
    error={err => <p>Error: {err.message}</p>}
    loading={<p>Getting IP...</p>}
    render={ip => <p>Your IP is {ip}</p>}
/>
```

## Props

`data`: { Function | Promise | Object }

Context to be passed to render prop.

`error`: { Function | JSX }

Markup or function that returns markup. Displays if `data` prop throws an error.

`loading`: { JSX }

Markup to be shown while `data` function is processing.

`render`: { Function | JSX }

Markup or function that returns markup.

`minLoadDuration`: { Number } (Default: 300)

Minimum amount of milliseconds to display `loading` prop. This helps to prevent flashing.
