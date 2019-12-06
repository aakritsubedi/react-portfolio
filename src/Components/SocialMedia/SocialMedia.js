import React from 'react';


function SocialMedia(props){
    
    let icon =(
        <>
            <a href={props.link} target='_blank'>{props.iconOf}</a>
        </>
    );
    return icon;
}
export default SocialMedia;