import React from 'react';

import SocialMedia from './../SocialMedia/SocialMedia';

function TopNav(props){
    let socialIcon = props.data.map(elements => {
        return <SocialMedia key={elements.id} iconOf={elements.iconOf} link={elements.link} />
    })
    let topNav=(
        <div className='top-nav clearfix'>  
            <div className='social-media-holder'>
                <span className='logo'>{props.myInfo.name}</span> 
                {socialIcon}
            </div>
            <div className='my-contact'>
                <span>{props.myInfo.email}</span>
                <span>{props.myInfo.contact}</span>
            </div>
        </div>
    );
    return topNav;
}
export default TopNav;