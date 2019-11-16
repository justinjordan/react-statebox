# React StateBox

A component for easily orchestrating load, error, and success states.

## Usage

```
<StateBox
    data={() =>
        new Promise(resolve => {
            setTimeout(() => {
                resolve({
                message: "Everything's cool and everything's smooth.",
                })
            }, 2000)
        })
    }
    error={error => <p>{error}</p>}
    loading={<p>Loading...</p>}
    render={({ message }) => <p>{message}</p>}
/>
```

## Props

**data**: { object | function }

Markup or function that returns markup. If a function is provided, the loading state will be shown until it resolves.

**error**: { JSX | function }

Markup or function that returns markup. Displays if `data` function throws an error.

**loading**: { JSX }

Markup to be shown while `data` function is processing.

**render**: { JSX | function }

Markup or function that returns markup.
