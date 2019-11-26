import React from 'react'
import './ActivitySelection.scss'
import { categoryTypes } from './Activityjson/data.js'

// import Football from '../../assets/img/football.png'
// import Frame from '../../assets/img/Frame.png'
// import gym from '../../assets/img/gym.png'
// import running from '../../assets/img/running.png'
// import Skate from '../../assets/img/Skate.png'
// import walk from '../../assets/img/walk.png'
export default function ActivitySelection() {
    return (
        <div className="main">
            <div className="container-activity">
                {categoryTypes.map(categoryType => {
                    return (<div className="activity">
                        <div className="sports">
                            {/* <img src={categoryType.imagem} alt=''></img> */}
                            {/* <img src={require('../../assets/img/football.png')} /> */}
                            <img src={require({ categoryType.imagem })} />
                            {/* <img src={require('../../assets/img/gym.png')} />
                            <img src={require('../../assets/img/running.png')} />
                            <img src={require('../../assets/img/Skate.png')} />
                            <img src={require('../../assets/img/walk.png')} /> */}
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}
