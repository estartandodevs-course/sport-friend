import React from 'react'
import './ActivitySelection.scss'
import { sportTypes } from '../../data/sportTypes'

export default function ActivitySelection() {
    return (
        <div className="main">
            <div className="container-activity">
                {sportTypes.map(type => {
                    return (<div key={type.id} className="activity">
                        <div className="sports">
                            <img src={type.imagem} alt={type.name}/>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}
