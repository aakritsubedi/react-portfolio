import React from 'react';

function ProjectWork(props){
    let myProject = props.myProject.map(elements=>{
        let techStacks = elements.techStack.map((item,index)=>{
        return <kbd key={index} className='m-1'><small>{item}</small></kbd>
        })
        return (
            <li key={elements.id} className='list-group-item'>
                <span className='h5 d-block'>
                    <a href={elements.link} title={elements.title}>{elements.projectName}</a>
                </span>
                <p>
                    {elements.desc}
                </p>
                {techStacks}
            </li>
        );
    })
    let projectWork=(
        <>  
            <h2 className='text-muted text-center'>Projects <small>What I did?</small></h2>
            <ul className='list-group mt-2'>
                {myProject}
            </ul>
        </>
    )
    return projectWork;
}
export default ProjectWork;