import React, { Component } from 'react';

import './ProjectCard.css';

class ProjectCard extends Component {    
    render() {        
      return (     
        <div className="col-12 col-sm-6 myCard">
        <div className="card">
            <img className="card-img-top" src={this.props.imageUrl} alt="" />
            <div className="card-body">
                <div className="card-title">{this.props.name}</div>
                <p className="card-text">{this.props.description}</p>
                <div className="myTechStack">
                {

                }
                </div>
                <a href={this.props.demoUrl} target="_blank" className="projectCardButton btn btn-outline-secondary">Demo</a>
                <a href={this.props.codeUrl} target="_blank" className="projectCardButton btn btn-outline-secondary">Code</a>
            </div>
        </div>
    </div>
    
      );
    }
  }
  

  export default ProjectCard;