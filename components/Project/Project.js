import React from 'react';
import { withRouter } from 'next/router';
import ProjectModal from './ProjectModal/ProjectModal';

class Project extends React.Component {
    constructor (props) {
        super(props)
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
      }
    
      // handling escape close
      componentDidMount () {
        document.addEventListener('keydown', this.handleKeyDown)
      }
    
      componentWillUnmount () {
        document.removeEventListener('keydown', this.handleKeyDown)
      }
    
      handleKeyDown(e) {
        if (!this.props.router.query.projectId) return
        if (e.keyCode === 27) {
          this.props.router.push('/projects');
        }
      }
    
      handleCloseModal() {
        this.props.router.push('/projects')
      }
    
      handleOpenModal (e, id) {
        e.preventDefault();
        console.log(e);
        this.props.router.push({pathname:'/projects', query: {projectId: id}});
      }
      
    render() {
        const { router, projectTitle } = this.props;
        const formattedProjectTitle = this.props.projectTitle.toLowerCase().replace(/ +/g, "");
        return (
            <div className="projectContainer">
            {router.query.projectId == formattedProjectTitle &&
             <ProjectModal
            id={formattedProjectTitle}
             openModal={this.handleOpenModal}
              closeModal={this.handleCloseModal}
               headerContent={projectTitle}
               mainContent={this.props.modalMainContent}
               librariesUsed={this.props.librariesUsed}
            />}
                <div className="screenshotContainer">
                    <figure>
                        <img src={this.props.imgSrc} alt={this.props.imgAlt}></img>
                    </figure>
                </div>
                <div className="projectFooter">
                    <h2>{projectTitle}</h2>
                    <p>{this.props.projectDesc}</p>
                    <div className="buttonContainer">
                        <button 
                         id={formattedProjectTitle}
                         onClick={(event, id) => this.handleOpenModal(event, formattedProjectTitle)}
                         onKeyDown={this.handleKeyDown}
                         className="projectButton">About</button>
                        <button className="projectButton">Launch</button>
                    </div>
                </div>
                <style jsx>
                    {`
                     .projectContainer {
                         width: 35rem;
                         margin: 1rem;
                         height: 50rem;
                         background-color: #fff;
                         border-radius: .5rem;
                    }
                    .screenshotContainer {
                        height: 35rem;
                        width: 100%;
                    }
                    figure {
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: .5rem;
                    }

                    img {
                        width: 100%;
                        height: auto;
                        max-height: 35rem;
                    }

                    .projectFooter {
                        height: 15rem;
                        display: flex;
                        flex-flow: column;
                    }

                    .projectFooter > h2 {
                        margin: .1rem;
                        text-align: center;
                    }

                    .projectFooter > p {
                        height: 6rem;
                        padding-right: .5rem;
                        padding-left: .5rem;
                    }

                    .buttonContainer {
                        display: flex;
                    }

                    .projectButton:last-child {
                        align-self: flex-end;
                        display: inline;
                        margin-left: auto;
                        margin-right: 1rem;
                        margin-bottom: .5rem;
                    }

                    .projectButton:first-child {
                        align-self: flex-end;
                        display: inline;
                        margin-left: 1rem;
                        margin-bottom: .5rem;
                    }

                    .projectButton {
                        width: 7rem;
                        height: 2.5rem;
                        border-radius: 1rem;
                        color: #fff;
                        background-color: rgb(1, 1, 40);
                        opacity: 1;
                        transition: opacity;
                    }
                    
                    
                    @media screen and (min-width:900px) {
                        .projectButton:hover {
                            opacity: .7;
                            cursor: pointer;
                        }
                    }
                    `}
                </style>
            </div>
        )
    }
}

export default withRouter(Project);