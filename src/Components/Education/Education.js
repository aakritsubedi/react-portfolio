import React from 'react';

function Education(props){
    let myEducation = props.myEducation.map((elements,index)=>{
        return (
            <li key={index} className='pb-3 mb-3 border-bottom clearfix'>
                <br/>
                <span className='h4'>{elements.collegeName}</span><br/>
                <small className='text-muted'>{elements.title}</small>
                <small className='float-right font-weight-light'>{elements.date}</small>
            </li>
        );
    })
    let education=(
        <>
            <h2 className='text-muted mt-2 text-center'>Education</h2>
            <ul style={{listStyle:'none'}}>
                {myEducation}
            </ul>
        </>
    )
    return education;
}
export default Education;