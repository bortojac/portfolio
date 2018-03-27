import Layout from '../components/Layout';

export default () => (
    <Layout>
        <section className="aboutMeContainer">
            <img className="portrait" src="../static/portrait.jpg" alt="Headshot"></img>
            <div className="aboutMeContent">
                <h1>About Me</h1>
                <p>I am currently a New York based Data Analyst with 1.5 years of web developement experience. Throughout work experience and self-study, I have developed skills in React.js, Redux.js, Express.js, MongoDB, Webpack, HTML, CSS, Javascript, jQuery, R, Python, and Reactive Programming. Professional projects I have worked on include:</p>
                <ul>
                    <li>Predictive Modeling Claims Application with SQLite persistent storage and What-If analysis.</li>
                    <li>Workers' Compensation Claims Monitoring Application</li>
                    <li>Automation of Reserving Data Preparation using R, Python, and SAS</li>
                </ul>
            </div>
            <style jsx>
                {`
                    .aboutMeContainer {
                        display: flex;
                        flex-flow: column;
                        flex: 1;
                        justify-content: center;
                        align-items: center;
                        font-size: 1.5rem;
                    }

                    .portrait {
                        max-width: 20rem;
                        max-height: 30rem;
                        margin-top: 2rem;
                    }

                    .aboutMeContent {
                        display: flex;
                        color: #fff;
                        padding: 2rem;
                        flex-flow: column;
                    }  

                    .aboutMeContent > h1 {
                        text-align: center;
                        margin-top: 2rem;
                        margin-bottom: .5rem;
                    }

                    .aboutMeContent li {
                        margin: 1rem;
                    }

                    @media screen and (min-width: 900px) {
                        .aboutMeContainer {
                            flex-flow: row;
                            font-size: 2rem;
                        }
                        .portrait {
                            margin: 1rem;
                            max-width: 30%;
                            max-height: 45rem;
                        }
                        .aboutMeContent {
                            flex-flow: column;
                        }
                        .aboutMeContent > h1 {
                            text-align: center;
                        }
                    }
                `}
            </style>
        </section>
    </Layout>
)

