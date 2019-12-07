import React from 'react';

function Skills(props){
    let mySkills = props.mySkills.map((item,index)=>{
        return (<li key={index}>{item} </li>);
    })
    let skills=(
        <div className='row mt-5'>
            <div className='col-md-8'>
                <h3>My Skills</h3>
                <span className='text-muted mb-3'>Programming</span>
                <p className='text-justify'>
                {props.skillContent}
                </p>
            </div>
            <div className='col-md-4'>
                <ul className='skills'>
                    {mySkills}
                </ul>
            </div>
        </div>
    )   
    return skills;
}
export default Skills