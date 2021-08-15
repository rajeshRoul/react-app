import './TextInput.css'
import React, { ReactElement, useContext } from 'react'
import { ThemeContext } from '../../util/themeContext'

type TextInputPropType = {
    type: string
    placeholder: string
    value: string
    handleChange: any
}

function TextInput(props: TextInputPropType): ReactElement {
    const { type, placeholder, value, handleChange } = props
    const { theme } = useContext(ThemeContext)
    return (
        <input
            data-testid="textInput"
            className={`TextInput ${theme === 'Dark' && 'DarkTextInput'}`}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
        />
    )
}

export default TextInput
