import React from 'react'

export const Skill = () => {
    const Progress = ({done,title}) => {
        return (
            <div className='Progress'>
                <div className='progress-done' style={{ opacity: 1, width: `${done}` }}>
                    <h4>{title}</h4>
                    <h4>{done} %</h4>
                </div>
            </div>
        )
    }
  return (
    <>
    <section className='skill'>
        <div className='container'>
            <div className="heading">
            <h3>WHY CHOOSE US</h3>
            <h1>Some of My Skills</h1>
        </div>

        <div className='content flex'>
            <div className='left topMargin'>
            <Progress done='70' title='HTML' />
            </div>
        </div>
        </div>
    </section>
    </>
  )
}
