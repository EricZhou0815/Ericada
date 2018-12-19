import React,{Component} from 'react';
import ProjectCard from '../components/project-card/ProjectCard';
import boatseatreservation from '../images/Boad-Seat-Reservation.png';
import qualitysouvenirs from '../images/QualitySouvenirs.png';
import noteapp from '../images/addnote.PNG';
import addstrip from '../images/AddStrip.png';
import qs from '../images/QS.png';
import fraction from '../images/fraction.png';
import hyggee from '../images/hyggee.png';

class Portfolio extends Component {
    render() {
        const projects=[
            {
                imageUrl:boatseatreservation,
                name:'Taupo Boat Adventure',
                description:'A boat ticket booking page with javascript. Two boats with different seat layout. User can select seat with differnt boats, dates, and trips. Once the seat is selected, the seat will be locked and no longer available for other users.',
                techStacks:['HTML','CSS','Javascript','xml','local storage'],
                demoUrl:'http://ericzhou0815.github.io/Boad-Seat-Reservation/',
                codeUrl:'http://github.com/EricZhou0815/Boad-Seat-Reservation'
            },
            {
                imageUrl:fraction,
                name:'Find the Fraction',
                description:'A fraction guessing game designed for kids. There are two types randomly generated questions. One is quessing the fraction according to the colored/uncolored rectangles, another is marking the rectangles according to the given fraction.',
                techStacks:['HTML','CSS','Javascript','fabric.js'],
                demoUrl:'https://ericzhou0815.github.io/Guess-Fraction/',
                codeUrl:'https://github.com/EricZhou0815/Guess-Fraction'
            },
            {
                imageUrl:qualitysouvenirs,
                name:'Quality Souvenirs (ASP.NET)',
                description:'An E-commerce website developed with ASP.net Framework. User can register with email confirmation, browse products, add products to shopping cart, and place an order. Administrator can manage catalogs, users, and orders.',
                techStacks:['C#','ASP.NET Core MVC','MSSQL','session'],
                demoUrl:'https://dochyper.unitec.ac.nz/zhouz32/asp_application1',
                codeUrl:'https://github.com/EricZhou0815/QualitySouvenirs-ASP'
            }, 
            {
                imageUrl:qs,
                name:'Quality Souvenirs (Laravel)',
                description:'An E-commerce website developed with Laravel Framework. User can register with email confirmation, browse products, add products to shopping cart, and place an order. Administrator can manage catalogs, users, and orders.',
                techStacks:['PHP','Laravel','MySQL','session'],
                demoUrl:'https://github.com/EricZhou0815/QualitySouvenirs-ASP',
                codeUrl:'https://github.com/EricZhou0815/QualitySouvenirs-ASP'
            },  
            {
                imageUrl:noteapp,
                name:'NoteApp',
                description:'A C# applicatin allow users to manage notes',
                techStacks:['C#','WF'],
                demoUrl:'https://github.com/EricZhou0815/NoteApp',
                codeUrl:'https://github.com/EricZhou0815/NoteApp'
            },  
            {
                imageUrl:addstrip,
                name:'AddStrip',
                description:'A C# mini claculator',
                techStacks:['C#','WF'],
                demoUrl:'https://github.com/EricZhou0815/AddStrip',
                codeUrl:'https://github.com/EricZhou0815/AddStrip'
            },
            {
                imageUrl:hyggee,
                name:'Hyggee',
                description:'An application allows travelers sharing their trip plans and add other people with same plans to the group, as well as sharing the costs.Backend is developed with Django_REST_Framework, and Frontend is developed with React. Currently working on the backend.',
                techStacks:['React','Django_REST','AJAX','sqlite3'],
                demoUrl:'https://github.com/EricZhou0815/hyggee',
                codeUrl:'https://github.com/EricZhou0815/hyggee'
            }
        ];

      return (
        <div id="portfolioSection">
        <div className="myContainer">
            <div className="hero-image heroPortfolio">
                <div className="hero-text">
                    <div className="myTittle">PORTFOLIO</div>
                </div>
            </div>
            <div className="container-fluid padding">
                <div className="mySubTittle">MY PROJECTS</div>
                <div className="row padding">
                {
                    projects.map((project,i)=>{
                        return (
                            <ProjectCard key={i} 
                            imageUrl={project.imageUrl} 
                            name={project.name}
                            description={project.description}
                            techStacks={project.techStacks}
                            demoUrl={project.demoUrl}
                            codeUrl={project.codeUrl}
                            />
                                )
                            })
                }
                </div>
            </div>
        </div>
        </div>

      );
    }
  }
  
  export default Portfolio;