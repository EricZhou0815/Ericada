import React,{Component} from 'react';
import ProjectCard from '../components/project-card/ProjectCard';
import boatseatreservation from '../images/Boad-Seat-Reservation.png';
import qualitysouvenirs from '../images/QualitySouvenirs.png';
import noteapp from '../images/addnote.PNG';
import addstrip from '../images/AddStrip.png';

class Portfolio extends Component {
    render() {
        const projects=[
            {
                imageUrl:boatseatreservation,
                name:'Taupo Boat Adventure',
                description:'Boat Seats Booking UI Design',
                techStacks:['HTML','CSS','Javascript'],
                demoUrl:'http://ericzhou0815.github.io/Boad-Seat-Reservation/',
                codeUrl:'http://github.com/EricZhou0815/Boad-Seat-Reservation'
            },
            {
                imageUrl:qualitysouvenirs,
                name:'Quality Souvenirs (ASP.NET)',
                description:'E-commerce website with ASP.net Core Framework',
                techStacks:['C#','ASP.NET Core MVC','jQuery','MSSQL'],
                demoUrl:'https://dochyper.unitec.ac.nz/zhouz32/asp_application1',
                codeUrl:'https://github.com/EricZhou0815/QualitySouvenirs-ASP'
            },  
            {
                imageUrl:noteapp,
                name:'NoteApp',
                description:'A C# applicatin allow user to manage notes',
                techStacks:['C#'],
                demoUrl:'https://github.com/EricZhou0815/NoteApp',
                codeUrl:'https://github.com/EricZhou0815/NoteApp'
            },  
            {
                imageUrl:addstrip,
                name:'AddStrip',
                description:'A C# mini claculator',
                techStacks:['C#'],
                demoUrl:'https://github.com/EricZhou0815/AddStrip',
                codeUrl:'https://github.com/EricZhou0815/AddStrip'
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