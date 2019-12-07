import React from 'react';

import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn,FaGithub } from "react-icons/fa";
let allData = {
    myInfo:{
        name: 'Aakrit Subedi',
        email: 'aakritsubedi9@gmail.com',
        contact: '+977-9808858237',
        location: 'Basundhara,Kathmandu',
        img: 'http://aakritsubedi.com.np/images/profile_new.jpg',
        aboutMe: 'Honors student of Kantipur Engineering College, Computer Engineering. Academic credentials are reinforced by programming experience gained during an internship with some companies. Strong knowledge of object-oriented programing and web development tools using PHP and Javascript. Known as a self-starter, team player, and multitasker--strive to consistently exceed expectations.',
        bgImg: 'https://images.unsplash.com/photo-1533294455009-a77b7557d2d1?ixlib:rb-1.2.1&auto:format&fit:crop&w:750&q:80',
        skills: ['HTML','CSS','Javascript','jQuery','react.js','Express','PHP','Laravel','Java','C++','C','MySQL','Latex'],
        skillsContent: 'I have learned lots of important aspects about computer science throughout my years in school. For example, I have learned about multithreading, image processing, GUI (Graphical User Interface) development, etc. I am comfortable with object oriented languages such as Javascript,PHP,Java. I also enjoy powerful low level languages such as C.',
        website: 'http://aakritsubedi.com.np'
    },
    socialMediaData:[
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
            id: 4,
            iconOf: <FaLinkedinIn/>,
            link: 'https://www.linkedin.com/in/aakrit-subedi-942a5875/'
        },
        {
            id:5,
            iconOf: <FaGithub/>,
            link: 'https://www.github.com/aakritsubedi'
        }
    ],
    myEducation:[
        {
            date: '2015-2019',
            collegeName: 'Kantipur Engineering College',
            title: 'Bachelor\'s degree of Engineering'
        },
        {
            date: '2011-2014',
            collegeName: 'National School of Sciences(NIST)',
            title: 'Plus2 Science'
        },
        {
            date: '2006-2010',
            collegeName: 'Paragon Public School',
            title: 'School Leaving Certificate'
        },
        {
            date: '1999-2006',
            collegeName: 'Satya Sai Sikshya Sadan',
            title: 'School Level'
        }
    ],
    myProject:[
        {
            id:1,
            projectName: 'Derm Meds:skin diseases analysis using CNN',
            title: 'Major Project',
            link: 'https://github.com/aakritsubedi/DermMeds-MajorProject',
            desc: 'Derm Meds is a web based application with interactive UI design and build with an objective to make a system that can predicts the phases of skin cancer using the image of infected part. The image here is preprocessed to remove the noise and resized into the standard size which is feed into the convolution neural network to make prediction. The prediction is displayed in human readable form and various graphical representation for proper illustration of the result. As an additional feature to predicting the phase of skin cancer the feature like live video call using opentok API have made the project complete care of your skin as online dermatologist.',
            techStack: ['HTML','CSS','Laravel','Python','Flask','MySQL']
        },
        {
            id:2,
            projectName: 'Drag HTML',
            title: 'Vanilla JS Project',
            desc: 'Drag HTML is a web application that allows the user to drag the HTML components and create websites. The project is entirely build using vanilla Javascript. DragHTML lists the commonly used tag in the sidebar that is dragged and added to DOM. The project allows the user to save the state of the project in local storage after parsing the HTML code to JSON format.',
            link: 'https://github.com/aakritsubedi/drawHTMLv2',
            techStack: ['HTML','CSS','JS']
        },
        {
            id:3,
            projectName: 'Capture Nepal',
            title: 'Commercial Project',
            desc:'Capture Nepal is mainly made for the comfort of a travel agency owner and the customers who are fond of travelling. It is a complete package for a travel agency. This site has different packages which include popular destinations of Nepal and its information, uploaded by the admin himself. It provides different facilities like tour booking, ticket booking and other special bookings. Also it covers all the facilities that a tourist will require like taxi booking, money exchange etc. After any booking, confirmation is done via email and payment methods are done online by using PayPal API. Also, the customer can interact with the admin in case he/she requires any help. Thus, this site includes all the major facilities that a travel agency and a tourist requires, hence making everything easier and simpler.',
            link: 'https://github.com/aakritsubedi',
            techStack: ['HTML','CSS','Laravel','MySQL','PHP']
        },
        {
            id:4,
            projectName: 'Easy Election:Nepalese can vote wherever they are',
            title: 'Minor Project',
            link: 'https://github.com/aakritsubedi',
            desc: 'The Easy Election is web based and mobile friendly system replacing the existing voting process reducing the complexity and cost of the election process. The aim of this project is to help voters to cast their vote from different location from specified zone by the concern authority. Easy Election is the online election system which will allow people to cast votes in a more convenient way, by using available resources which could facilitate the voters during elections and it is also a platform to share their views problems with the help of the discussion forum and other features of the system.',
            techStack: ['HTML','CSS','Java(JSP)']
        },
        {
            id:5,
            projectName: 'Godam-manage your stock',
            title: 'Personal Project',
            desc: 'Godam is real time POS and retail software which is made solely for marketing purpose. As the name suggests, it especially focuses on the management of the main source where all the products come from as well database the place where the products are stored. This site is made for the people who do business in marketing and it helps them to keep track of the amount of products sold and delivered as well as it provides a platform in which all the workers from the same company or store get to interact with each other and exhibit their respective roles and performance in the marketing sector. This site also creates a healthy environment with the customers with emailing service, money transactions and paid due records with addition to delivery and other services. This web based application makes the overall marketing activities convenient as it keeps track of all the expenditure, income, financial status, profit-loss, delivery, employee payroll, accounting etc. in a single integrated system.',
            link: 'https://github.com/aakritsubedi',
            techStack: ['HTML','CSS','PHP']
        },
        {
            id:6,
            projectName: 'Traveling Nepal-once is not enough',
            title: 'Personal Project',
            link: 'https://github.com/aakritsubedi',
            desc: 'This is a website which is solely made for the tourists as well as the people of Nepal who love traveling. This site targets to develop the tourism industry of Nepal which is one of the main sectors from which our country gets the foreign economy. From this site, we intend to help, guide and serve the people who love traveling as well as advertise our country to different parts of the world so that more and more tourists could come and visit us. This website showcases the major beauties and attractions of our country as well as guides them and provides them major services for traveling purpose. This site includes everything a tourist needs such as map guides, taxi booking service, pictures including description of most of the places of our county and also provides a platform in which people can openly discuss about their experiences of traveling as well as give a view about how they felt about our country.',
            techStack: ['HTML','CSS','PHP']
        },
        {
            id:7,
            projectName: 'Home Automation',
            title: 'Group Project',
            desc: 'Home Automation system consists of switches and sensors connected to a central hub, often called as gateway, which is an Arduino microcontroller in this case. In this today’s ever growing world, where people are busy most of the time, the manual control systems at home fail to meet the demands. This is where home automation systems come to play. This project applies the similar centralization technique in remotely controlling the home appliances. The door security system prevents any strangers from entering the house without the owner’s permission, which is related using a password mechanism. The GSM module used in this project can provide SMS feedback to the user and also enable the user to control the household appliances, without the need of the user to be present inside the house.',
            link: 'https://github.com/aakritsubedi',
            techStack: ['ELectronic','Arduino']
        },
        {
            id:8,
            projectName: 'BINGO',
            title: 'College Project',
            link: 'https://github.com/aakritsubedi/bingoC-',
            desc: 'The Bingo Game is proposed to provide entertainment for users. Here in this game, user is allowed to select the grid (game sheet) and the computer will be provided the game sheet accordingly. The main features of the game are to generate random number and to mark it and save their playing and leaderboard that provides the brief summary of the player playing.',
            techStack: ['C++']
        },
        {
            id:9,
            projectName: 'Drop me here my cab',
            title: 'NCELL APP Camp Project',
            desc: 'Drop me here my cab is proposed to provide the facility of vehicle hiring. It was initially targeted to hire Cab in Kathmandu Valley easily and provide better service for its user. This android application is concept of system to provide facility of vehicle hiring for people who are in need.',
            link: 'https://github.com/aakritsubedi',
            techStack: ['Android']
        },
        {
            id:10,
            projectName: 'Store Management System',
            title: 'College Project',
            desc: 'The department store management software proposed to provide all basic facilities like process bill, manages product details in stock for proper working environment. This software is assumed helping department store to manage their stocks and also employee records. In addition this software also helps in processing bill for customer after they purchases good for store.',
            link: 'https://github.com/aakritsubedi',
            techStack: ['C']
        },
        {
            id:11,
            projectName: 'School Management System',
            title: 'School Project',
            desc: 'The Result processing software for schools software proposed to keep and manage the records for the student’s academic performance along with their attendance report. This software was to help school department to manage and keep record of student.',
            link: 'https://github.com/aakritsubedi',
            techStack: ['QBASIC']
        }
    ]
}


export default allData