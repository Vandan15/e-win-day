import React from 'react'

export default function Title(props) {
  return (
    <div className='title-wrapper container'>
        <h2>
            {props.text}
        </h2>
        <hr></hr>
    </div>
  )
}
