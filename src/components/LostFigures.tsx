import React from 'react'

type LostFigures = {
    title: string;
    figures: Figure[]
}

export default function LostFigures({title, figures}) {
  return (
    <div className='lost'>
      <h3>{title}</h3>
      {figures. map((el) => 
      <div key = {el.id}>
        {el.name} {el.logo && <img width={20} height={20} src={el.logo} alt='logo' />}
      </div>)}
    </div>
  )
}
