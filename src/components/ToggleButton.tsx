import '../styles/ToggleButton.css'
import React, { ReactElement } from 'react'

type TogglePropType = {
    theme: string
    handleToggle: () => void
}

function ToggleButton(props: TogglePropType): ReactElement {
    const { theme, handleToggle } = props
    return (
        <div className="ToggleButton">
            <label className="switch">
                {theme === 'Dark' ? (
                    <input type="checkbox" onClick={handleToggle} checked />
                ) : (
                    <input type="checkbox" onClick={handleToggle} />
                )}

                <span className="slider round" />
            </label>
        </div>
    )
}

export default ToggleButton
