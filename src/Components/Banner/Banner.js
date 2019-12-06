import React from 'react';

function Banner(props){
    let banner=(
        <div className='myinfo-banner' style={{backgroundImage: `url(${props.myInfo.bgImg})` }}>
            <div className='myinfo'>
                <h1>{props.myInfo.name}</h1>
                <p>
                    {props.myInfo.aboutMe}
                </p>
            </div>
        </div>
    );

    return banner;
}
export default  Banner;