import React,{Component} from 'react';

import TopNav from './../Components/TopNav/TopNav';
import MainNav from '../Components/MainNav/MainNav';
import Banner from '../Components/Banner/Banner';
import Education from '../Components/Education/Education';
import ProjectWork from '../Components/ProjectWork/ProjectWork';
import Skills from '../Components/Skills/Skills';
import Table from '../Components/Table/Table';
import Footer from '../Components/Footer/Footer';

import * as myData from '../Constants/myInfo';

class Portfolio extends Component{
    constructor(){
        super();
        this.data();
    }
    data(){
        this.navItems=[
            {
                id:1,
                title: 'About Me',
                link : '#aboutMe'
            },
            {
                id:2,
                title: 'Education',
                link : '#education'
            },
            {
                id:3,
                title: 'Projects',
                link : '#project'
            }
        ]
        this.socialMediaData = myData.default.socialMediaData;
        this.myInfo= myData.default.myInfo;
        this.myEducation =myData.default.myEducation;
        this.myProject = myData.default.myProject;
        this.column = myData.default.column;
        this.dataSet =this.myProject;

    }
    render(){
        let portfolio=(
            <>
                <div className='container' style={{paddingBottom:'50px'}}>
                <TopNav data={this.socialMediaData} myInfo={this.myInfo}/>
                <div className='main-content'>
                    <MainNav myInfo={this.myInfo} navItems={this.navItems}/>
                    <Banner myInfo={this.myInfo}/>
                    <div className='row p-2'>
                        <div className='col-md-12'>
                            <a name='education'></a>
                            <Education myEducation={this.myEducation}/>
                        </div>
                    </div>
                    <div className='row p-2'>
                        <div className='col-md-12'>
                            <a name='project'></a>
                            <ProjectWork myProject={this.myProject} />
                            <hr/>
                            <Table  columns={this.column} data={this.dataSet}/>
                        </div>
                    </div>
                </div>
                <Skills mySkills={this.myInfo.skills} skillContent={this.myInfo.skillsContent}/>
                </div>
                <Footer name={this.myInfo.name}/>
            </>
        );

        return portfolio;
    }
}

export default Portfolio;