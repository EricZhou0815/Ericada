import React,{Component} from 'react';
import ProjectCard from '../components/project-card/ProjectCard';
import boatseatreservation from '../images/Boad-Seat-Reservation.png';
import qualitysouvenirs from '../images/QualitySouvenirs.png';
import noteapp from '../images/addnote.PNG';
import jsgame from '../images/javascriptgame.png';
import qs from '../images/QS.png';
import fraction from '../images/fraction.png';
import hyggee from '../images/hyggee.png';
import angulartodo from '../images/angulartodo.png';
import eventbooking from '../images/eventbooking.png';
import travare from '../images/travare.png';

class Portfolio extends Component {
    render() {
        const projects=[
             {
                imageUrl:travare,
                name:'Travare Mobile App',
                description:'A mobile platform where people can share journey, car and cost.',
                techStacks:['node.js','express','React Native','Rest API','MongoDB','UX/UI','Sketch','JWT'],
                demoUrl:'https://ideation-deloittegarage.bemyapp.com/#/projects/5c3e30c57cc0b60004dc17c5',
                codeUrl:'https://github.com/EricZhou0815/Travare-Mobile-React-Native'
            },
            {
                imageUrl:eventbooking,
                name:'Event Booking App',
                description:'A platform allows people to create and share events.',
                techStacks:['MongoDB','Express','React','Node.js','GraphQL','JWT'],
                demoUrl:'https://github.com/EricZhou0815/Event-booking-react-node-graphql',
                codeUrl:'https://github.com/EricZhou0815/Event-booking-react-node-graphql'
            },
            {
                imageUrl:angulartodo,
                name:'Angular-Todo-App',
                description:'A simple Todo Application written with Angular, connecting to a fake api.',
                techStacks:['HTML','CSS','Angualr','CI/CD'],
                demoUrl:'https://ericzhou0815.github.io/Angular-Todo-App/',
                codeUrl:'https://github.com/EricZhou0815/Angular-Todo-App'
            },
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
                demoUrl:'https://github.com/EricZhou0815/Quality-Souvenirs-Laravel',
                codeUrl:'https://github.com/EricZhou0815/Quality-Souvenirs-Laravel'
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
                imageUrl:jsgame,
                name:'JavaScript Game',
                description:'A mini javaScript game.',
                techStacks:['javascript','HTML','CSS'],
                demoUrl:'https://ericzhou0815.github.io/JavaScript-game-catch-the-flower/',
                codeUrl:'https://github.com/EricZhou0815/JavaScript-game-catch-the-flower'
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
