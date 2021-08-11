import './SocialLoginButton.css'
import React, { ReactElement } from 'react'

type SocialButtonPropType = {
    handleClick: () => void
    logoUrl: string
    name: string
}

function SocialLoginButton(props: SocialButtonPropType): ReactElement {
    const { handleClick, logoUrl, name } = props
    return (
        <button className="SocialButton" type="button" onClick={handleClick}>
            <img src={logoUrl} alt={name} />
        </button>
    )
}

export default SocialLoginButton
