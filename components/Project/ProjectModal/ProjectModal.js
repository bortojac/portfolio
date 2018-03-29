import React from 'react';

class ProjectModal extends React.Component {
    constructor(props) {
        super(props);
    }

    closeModal(e) {
        if (this._project === e.target) {
            if (this.props.closeModal) {
                this.props.closeModal();
            }
        }
    }

    render() {
        return (
            // storing a reference to the projectModal's Overlay. We use this in closeModal method to 
            // ensure that only a click outside of the dialog will exit the modal.
            <div ref={el => this._project = el} className='modalOverlay' onClick={(e) => this.closeModal(e)}>
                <div className='modalDialog'>
                    <div className="infoModalContainer">
                        <h1 className="infoModalHeader">
                            {this.props.headerContent}
                        </h1>
                        <div className="infoModalContent">
                            <h2>Description:</h2>
                            <p>{this.props.mainContent}</p>
                            <h2>Libraries Used:</h2>
                            <ul className="librariesList">
                                {this.props.librariesUsed.map((library, index) => <li key={library + index}>{library}</li>)}
                            </ul>
                        </div>
                        <div className="linkContainer">
                            <a
                                href={this.props.gitHubLink}
                                target="_blank"
                                className="modalProjectButton"
                            >
                                Github Repo
                         </a>
                            <a
                                href={this.props.projectURL}
                                className="modalProjectButton"
                                target="_blank"
                            >
                                Launch
                         </a>
                        </div>
                    </div>
                </div>
                <style jsx>
                {`
                    .modalOverlay {
                        position: fixed;
                        display: flex;
                        background: rgba(1,1,40,.2);
                        justify-content: center;
                        align-items: center;
                        left: 0;
                        right: 0;
                        top: 0;
                        bottom: 0;
                        margin: auto;
                    }
                    .modalDialog {
                        background-color: rgba(1,1,40,.9);
                        border: .1rem solid rgb(204, 204, 204);
                        border-radius: 4px;
                        outline: none;
                        color: rgb(1,1,40);
                        padding: 0;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        text-align: center;
                        width: 100%;
                        max-height: 75%;
                        z-index: 20;
                        overflow: hidden;
                    }

                    .infoModalContainer {
                        display: flex;
                        flex-flow: column;
                        width: 100%;
                        overflow-y: scroll;
                        overflow-x: hidden;
                        flex: 1;
                    }
                    
                    .infoModalHeader {
                        color: #000;
                        width: 75%;
                        border-bottom: .2rem solid rgb(204, 204, 204);
                        background-color: #fff;
                        border-bottom: 2px solid rgb(1,1,40);
                        padding: 1rem 1rem;
                        border-radius: 4px;
                        font-size: 2.5rem;
                        margin: 0 auto;
                    }
                    .infoModalContent {
                        overflow-y: scroll;
                        overflow-x: hidden;
                        width: 75%;
                        margin: 0 auto;
                        flex: 1;
                        padding: 1rem 1rem;
                        background-color: #fff;
                        -webkit-overflow-scrolling: touch;
                        border-radius: 4px;
                        font-size: 1.5rem;
                    }

                    .infoModalContent > h2 {
                        text-align: left;
                        margin: 1rem;
                        font-size: 2rem;
                    }
                    
                    .librariesList {
                        text-align: left;
                    }

                    .linkContainer {
                        display: flex;
                        flex: none;
                        height: 5rem;
                        width: 75%;
                        margin: 0 auto;
                        padding: 0 1rem;
                        justify-content: space-between;
                        background-color: #fff;
                        border-top: 2px solid rgb(1,1,40);
                        border-radius: 4px;
                        align-items: center;
                    }

                    .linkContainer > a {
                        width: 9rem;
                        border-radius: 1rem;
                        margin: 1rem;
                        text-align: center;
                        line-height: 2.5rem;
                        color: #fff;
                        background-color: rgb(1, 1, 40);
                        text-decoration: none;
                    }

                    @media screen and (max-height: 700px) and (orientation: landscape) {
                        .modalDialog {
                            width: 75%;
                            max-height: 80%;
                        }
                    }

                    @media screen and (min-width: 900px) {

                        .modalDialog {
                            max-height: 85%;
                            width: 75%;
                        }

                        .infoModalHeader {
                            font-size: 3rem;
                        }
                    
                        .infoModalContent {
                            font-size: 1.8rem;
                        }

                        .infoModalContent > h2 {
                            font-size: 2.3rem;
                        }
                        
                        .linkContainer > a:hover {
                            cursor: pointer;
                        }
                    }
                `}
                    </style>
            </div>
        );
    }
}

export default ProjectModal;

