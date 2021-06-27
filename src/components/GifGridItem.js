import React from 'react'

function GifGridItem({ id, title, url }) {

    return (
        <div
            key={id}
            className="card animate__animated animate__bounceIn animate__delay-2s"
        >
            <img src={url} alt={title} />
            <p> {title}</p>
        </div>
    )
}

export default GifGridItem
