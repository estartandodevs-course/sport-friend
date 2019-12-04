import React, {useState} from 'react'
import './ActivitySelection.scss'
import { sportTypes } from '../../data/sportTypes'

export default function ActivitySelection() {
    const [typesUnselecteds, setUnselecteds] = useState(sportTypes);

    return (
        <div className="container-activity">
            {typesUnselecteds.map(type => {
                return (
                <div key={type.id} className="sport">
                    <img src={type.imagem} className="sport-img" alt={type.name}/>
                    <p>{type.name}</p>
                </div>
                )
            })}
        </div>
    )
}
