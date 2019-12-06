import React from 'react';

function MainNav(props){
    let navItems= props.navItems.map(elements => {
        return (
            <li key={elements.id} className='nav-item'>
                <a href={elements.link} className='nav-link'>{elements.title}</a>
            </li>
        )
    })
    let mainNav =(
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <a class="navbar-brand" href="#">
            <img src={props.myInfo.img} className='img-responsive' id='pic-logo' title={props.myInfo.name} alt={props.myInfo.name}/>

            </a>
            <ul className='navbar-nav'>
                {navItems}
            </ul>
        </nav>
    )
    return mainNav;
}

export default MainNav;
