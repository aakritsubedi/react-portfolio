import React,{Component} from 'react';
import { FaFacebookF,FaTwitter,FaInstagram,FaGithub } from "react-icons/fa";

import TopNav from './../Components/TopNav/TopNav';
import MainNav from '../Components/MainNav/MainNav';


class Portfolio extends Component{
    constructor(){
        super();
        this.data();
    }
    data(){
        this.myInfo={
            name: 'Aakrit Subedi',
            email: 'aakritsubedi9@gmail.com',
            contact: '+977-9808858237',
            img: 'http://aakritsubedi.com.np/images/profile_new.jpg'
        }
        this.socialMediaData=[
            {   
                id: 1,
                iconOf: <FaFacebookF/>,
                link: 'https://www.facebook.com/aakritsubedi9'
            },
            {   
                id: 2,
                iconOf: <FaTwitter/>,
                link: 'https://twitter.com/SubediAakrit'
            },
            {
                id: 3,
                iconOf: <FaInstagram/>,
                link: 'https://www.instagram.com/aakrit_subedi'
            },
            {
                id:4,
                iconOf: <FaGithub/>,
                link: 'https://www.github.com/aakritsubedi'
            }
        ]
        this.navItems=[
            {
                title: 'About Me',
                link : '#aboutMe'
            },
            {
                title: 'Contact Me',
                link : '#contact'
            }
        ]
    }
    render(){
        let portfolio=(
            <>
                <TopNav data={this.socialMediaData} myInfo={this.myInfo}/>
                <div className='main-content'>
                    <MainNav myInfo={this.myInfo} navItems={this.navItems}/>
                </div>
            </>
        );

        return portfolio;
    }
}

export default Portfolio;