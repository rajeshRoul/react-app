import './Button.css'
import React, { ReactElement } from 'react'

type ButtonPropType = {
    handleClick: () => void
    value: string
}

function Button(props: ButtonPropType): ReactElement {
    const { handleClick, value } = props
    return (
        <button
            data-testid="button"
            className="Button"
            type="button"
            onClick={handleClick}
        >
            {value}
        </button>
    )
}

export default Button
