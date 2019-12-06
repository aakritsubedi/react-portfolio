import React from 'react';

function MainNav(props){
    let navItems= props.navItems.map(elements => {
        return (
            <li key={elements.id}>
                <a href={elements.link}>{elements.title}</a>
            </li>
        )
    })
    let mainNav =(
        <div className='main-nav clearfix'>
            <div className='photo'>
                <img src={props.myInfo.img} className='nav-photo' title={props.myInfo.name} alt={props.myInfo.name}/>
            </div>
            <div>
                <ul className='nav'>
                    {navItems}
                </ul>
            </div>
        </div>
    )
    return mainNav;
}

export default MainNav;
