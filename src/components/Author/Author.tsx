import React, { ReactElement } from 'react'
import './Author.css'

function Author(props: { url: string; name: string }): ReactElement {
    const { url, name } = props
    return (
        <div className="Author">
            <img src={url} alt={name} />
            <h2>{name}</h2>
        </div>
    )
}

export default Author
