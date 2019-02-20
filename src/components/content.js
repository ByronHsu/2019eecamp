import React from "react"
import Wave from './wave'
import tile1 from '../images/tile1.png'
import tile2 from '../images/tile2.png'
import tile3 from '../images/tile3.png'
import tile4 from '../images/tile4.png'
import MustKnow from '../components/mustknow'
import Apply from '../components/apply'
import Gallery from '../components/gallery'

const up = 120

const Content = props => {
    return (
        <div>
            <Wave url = {tile1} bgcolor = '#b9e5fb' headerColor = '#496379' title = '報名須知'>
                <MustKnow />
            </Wave>
            <Wave url = {tile2} bgcolor = '#75c3e2' headerColor = '#ffffff' title = '開始報名' bottom = {up}>
                <Apply />
            </Wave>
            <Wave url = {tile3} bgcolor = '#49647a' headerColor = '#ffffff' title = '活動花絮' bottom = {up * 2}>
            </Wave>
            <Wave url = {tile4} bgcolor = '#2c4256' headerColor = '#d3ffff' bottom = {up * 3} />
        </div>
    )
}

export default Content