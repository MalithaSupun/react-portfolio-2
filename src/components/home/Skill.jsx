import React from 'react'

export const Skill = () => {
    const Progress = ({done,title }) => {
        return (
            <div className='progress'>
                <div className='progress-done' style={{ opacity: 1, width: `${done}%` }}>
                    <h4>{title}</h4>
                    <h4>{done} %</h4>
                </div>
            </div>
        )
    }

    const data = [
        {
            title: "Evary Day is New Challenge",
            para: "Proficient in Java, React, HTML, CSS, JavaScript, and SQL, I specialize in both backend and frontend development. Using Java, I construct resilient backend systems, while React, HTML, CSS, and JavaScript are my go-to for crafting dynamic user interfaces.",

            para1: "Additionally, my expertise in SQL allows me to effectively manage and optimize databases for optimal performance. Whether it's building robust backend infrastructures or designing intuitive user experiences, my versatile skill set ensures high-quality solutions tailored to project requirements.",
        }
    ]
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
            <Progress done='95' title='HTML' />
            <Progress done='93' title='CSS' />
            <Progress done='70' title='JAVASCRIPT' />
            <Progress done='40' title='REACT JS' />
            <Progress done='50' title='JAVA' />
        </div>
        <div className="right mtop">
            {data.map((val) => {
                return (
                    <>
                    <h1>{val.title}</h1>
                    <p>{val.para}</p>
                    <p>{val.para1}</p>
                    <button className='primary-btn'>Hire Me</button>
                    </>
                )
            })}
        </div>
        </div>
        </div>
    </section>
    </>
  )
}
