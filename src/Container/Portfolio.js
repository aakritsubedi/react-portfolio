import React,{Component} from 'react';
import { FaFacebookF,FaTwitter,FaInstagram,FaGithub } from "react-icons/fa";

import TopNav from './../Components/TopNav/TopNav';
import MainNav from '../Components/MainNav/MainNav';
import Banner from '../Components/Banner/Banner';


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
            img: 'http://aakritsubedi.com.np/images/profile_new.jpg',
            aboutMe: 'Honors student of Kantipur Engineering College, Computer Engineering. Academic credentials are reinforced by programming experience gained during an internship with some companies. Strong knowledge of object-oriented programing and web development tools using PHP and Javascript. Known as a self-starter, team player, and multitasker--strive to consistently exceed expectations.',
            bgImg: 'https://images.unsplash.com/photo-1533294455009-a77b7557d2d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
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
                id:1,
                title: 'About Me',
                link : '#aboutMe'
            },
            {
                id:2,
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
                    <Banner myInfo={this.myInfo}/>
                </div>
            </>
        );

        return portfolio;
    }
}

export default Portfolio;