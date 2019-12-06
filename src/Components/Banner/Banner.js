import React from 'react';

function Banner(props){
    let banner=(
        <div className='card' style={{backgroundImage: `url(${props.myInfo.bgImg})` }}>
            <div className='card-body text-white text-center p-5'>
                <h1 className='card-title'>{props.myInfo.name}</h1>
                <p>
                    {props.myInfo.aboutMe}
                </p>
            </div>
        </div>
    );

    return banner;
}
export default  Banner;