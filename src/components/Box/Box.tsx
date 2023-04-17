import React from 'react'
import style from '../../styles/home.module.css'
const Box = ({ color, num }: any) => {
    return (
        <div style={{ backgroundColor: color }} className='style.box'>Box nr: {num}</div>
    )
}

export default Box