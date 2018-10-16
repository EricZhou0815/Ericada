import React,{Component} from 'react';
import ProjectCard from '../components/project-card/ProjectCard';

class Portfolio extends Component {
    render() {
        const projects=[
            {
                imageUrl:'https://doc-00-74-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/i3fl5taq6t7qdbr26ci530mjabjhkpfc/1539633600000/06818399670873483218/*/1F4ZYhxPFmSaGB0tahwnlQjnzPPAY-ONo',
                name:'Boat Seats Booking UI',
                description:'The web UI is an assignment for Internet & Website Development',
                techStacks:['HTML','CSS','Javascript'],
                demoUrl:'http://ericzhou0815.github.io/Boad-Seat-Reservation/',
                codeUrl:'http://github.com/EricZhou0815/Boad-Seat-Reservation'
            },
            {
                imageUrl:'https://doc-00-74-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/i3fl5taq6t7qdbr26ci530mjabjhkpfc/1539633600000/06818399670873483218/*/1F4ZYhxPFmSaGB0tahwnlQjnzPPAY-ONo',
                name:'Boat Seats Booking UI',
                description:'The web UI is an assignment for Internet & Website Development',
                techStacks:['HTML','CSS','Javascript'],
                demoUrl:'http://ericzhou0815.github.io/Boad-Seat-Reservation/',
                codeUrl:'http://github.com/EricZhou0815/Boad-Seat-Reservation'
            },
            {
                imageUrl:'https://doc-00-74-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/i3fl5taq6t7qdbr26ci530mjabjhkpfc/1539633600000/06818399670873483218/*/1F4ZYhxPFmSaGB0tahwnlQjnzPPAY-ONo',
                name:'Boat Seats Booking UI',
                description:'The web UI is an assignment for Internet & Website Development',
                techStacks:['HTML','CSS','Javascript'],
                demoUrl:'http://ericzhou0815.github.io/Boad-Seat-Reservation/',
                codeUrl:'http://github.com/EricZhou0815/Boad-Seat-Reservation'
            },
            {
                imageUrl:'https://doc-00-74-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/i3fl5taq6t7qdbr26ci530mjabjhkpfc/1539633600000/06818399670873483218/*/1F4ZYhxPFmSaGB0tahwnlQjnzPPAY-ONo',
                name:'Boat Seats Booking UI',
                description:'The web UI is an assignment for Internet & Website Development',
                techStacks:['HTML','CSS','Javascript'],
                demoUrl:'http://ericzhou0815.github.io/Boad-Seat-Reservation/',
                codeUrl:'http://github.com/EricZhou0815/Boad-Seat-Reservation'
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
                <p className="mySummary">Here are some of my latest projects.</p>
                <p className="mySummary">Click on the cards to explore them.</p>
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