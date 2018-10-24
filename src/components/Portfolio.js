import React,{Component} from 'react';
import ProjectCard from '../components/project-card/ProjectCard';
import boatseatreservation from '../images/Boad-Seat-Reservation.png';
import qualitysouvenirs from '../images/QualitySouvenirs.png';
import QS from '../images/QS.png';

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
                codeUrl:'http://github.com/EricZhou0815/Boad-Seat-Reservation'
            },  
            {
                imageUrl:QS,
                name:'Quality Souvenirs (React & PHP)',
                description:'E-commerce website with React and Laravel',
                techStacks:['React','jQuery','Ajax','PHP','Laravel','MySQL'],
                demoUrl:'http://ericzhou0815.github.io/Boad-Seat-Reservation/',
                codeUrl:'https://github.com/EricZhou0815/QualitySouvenirs'
            },  
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