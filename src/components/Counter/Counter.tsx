import React, { ReactElement, useState } from 'react'
import { createStore } from 'redux'
import './Counter.css'

function counterReducer(
    state = { value: 0 },
    action: { type: string }
): { value: number } {
    switch (action.type) {
        case 'counter/incremented':
            return { value: state.value + 1 }
        case 'counter/decremented':
            return { value: state.value - 1 }
        default:
            return state
    }
}

const store = createStore(counterReducer)

function Counter(): ReactElement {
    const [counter, setCounter] = useState(0)
    store.subscribe(() => setCounter(store.getState().value))

    const decrementCounter = (): void => {
        store.dispatch({ type: 'counter/decremented' })
    }

    const incrementCounter = (): void => {
        store.dispatch({ type: 'counter/incremented' })
    }

    return (
        <div data-testid="Counter" id="Counter">
            <button
                data-testid="decrementCounter"
                type="button"
                onClick={decrementCounter}
            >
                -
            </button>
            <h1 data-testid="counterValue">{counter}</h1>
            <button
                data-testid="incrementCounter"
                type="button"
                onClick={incrementCounter}
            >
                +
            </button>
        </div>
    )
}

export default Counter
