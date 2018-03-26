import React from 'react';

class ProjectModal extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    closeModal(e) {
        if (this._shim === e.target ||
            this._project === e.target) {
            if (this.props.closeModal) {
                this.props.closeModal()
            }
        }
    }


    render() {
        console.log(this.props);
        return (
            <div className='modalOverlay' onClick={(e) => this.props.closeModal(e)}>
                <div className='modalDialog'>
                    <div className="infoModalContainer">
                        <h1 className="infoModalHeader">
                            {this.props.headerContent}
                        </h1>
                        <div className="infoModalContent">
                            {this.props.mainContent}
                            <ul>
                            {this.props.librariesUsed.map((library, index) => <li key={library + index}>{library}</li>)}
                        </ul>
                        </div>
                    </div>
                </div>
                <style jsx>{`
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
            background-color: rgba(1,1,40);
            border: .1rem solid rgb(204, 204, 204);
            border-radius: 4px;
            outline: none;
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            width: 75%;
            z-index: 10;
            overflow: hidden;
          }

          .infoModalContainer {
            display: flex;
            flex-flow: column;
            width: 100%;
            height: 45rem;
            overflow-y: scroll;
            overflow-x: hidden;
            flex: auto;
          }
          
          .infoModalHeader {
            color: #000;
            width: 75%;
            border-bottom: .2rem solid rgb(204, 204, 204);
            background-color: #fff;
            border-bottom: 2px solid rgb(1,1,40);
            padding-top: 1rem;
            font-size: 3rem;
            padding-bottom: 1rem;
            margin: 0 auto;
          }
          .infoModalContent {
              overflow-y: scroll;
              overflow-x: hidden;
              width: 75%;
              margin: 0 auto;
              flex: 1;
              padding-top: 1rem;
              padding-bottom: 1rem;
              background-color: #fff;
              -webkit-overflow-scrolling: touch;
              border-radius: 4px;
              font-size: 2rem;
          }
        
          @media screen and (min-width: 900px) {
            .infoModalHeader {
              font-size: 1.5rem;
            }
        
            .infoModalContent {
                font-size: 1.1rem;
            }
          }
        `}</style>
            </div>
        )
    }
}

export default ProjectModal;

