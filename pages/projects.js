import Layout from '../components/Layout';
import Project from '../components/Project/Project';

export default () => (
    <Layout>
        <section className="projectsWrapper">
            <Project
                imgSrc="../static/naHands.gif"
                imgAlt="North American Dactylonomy Gif"
                projectTitle="Dactylonomy"
                projectDesc="Dactylonomy describes the way that one uses their fingers to express numbers. This project is an interesting look at how this is different among people from different countries and cultures around the world."
                modalMainContent="Dactylonomy is a server-side rendered website that allows users to gain a visual understanding of Dactlynomony using gifs and animation. It also allows the user to select their own Dactylonomy, or describe one entirely unique to them. I am currently a contributor to this repository alongside another developer and a designer. Although this project is still under development, feel free to check out the repository by clicking one of the links below."
                librariesUsed={['React', 'Next', 'PostCSS', 'Firebase']}
                gitHubLink="https://github.com/hessnd/dactylonomy"
                projectURL="https://github.com/hessnd/dactylonomy"
            />
            <Project
                imgSrc="../static/costManager.png"
                imgAlt="costManager Dashboard Picture"
                projectTitle="Cost Manager"
                projectDesc="Cost Manager is built using the MERN stack and allows users to track their monthly expenses. Users can choose when their monthly budget period begins, as well as customize their spending categories."
                modalMainContent="Cost Manager was born when I wanted with the ability to set a budget period in Intuit's Mint App. I knew I wanted to make something that involved data, and allowing the user to enter their own monthly budget period proved to be an interesting challenge. This app allows the user to create spending categories, log new expenses, edit spending categories, choose their Month Start Date, and delete entries and categories. The most complicated part of this build was creating the logic behind the Month Start Date, which was accomplished via the Aggregate Pipeline Operators in MongoDB and a custom interval based on the user's Month Start Date. One future improvement would be to rebuild the back-end with Firebase and integrate User Authentication."
                librariesUsed={['React', 'Redux', 'Reselect', 'Mongoose', 'Express', 'Webpack', 'Lodash', 'ReCharts', 'React-Modal', 'React-Table', 'Moment', 'FontAwesome', 'React-Spinners']}
                gitHubLink="https://github.com/bortojac/costManager"
                projectURL="https://cost-manager.now.sh"
            />
            <Project
                imgSrc="../static/jammmingBackgroundPhoto.jpg"
                imgAlt="Jammming Picture"
                projectTitle="Jammming"
                projectDesc="Jammming is built with ReactJS and allows users create and edit playlists from their Spotify Account. Please click the launch button below to log in with your spotify account and begin."
                modalMainContent="I first built Jammming with an online course on codecademy.com, but the project essentially only required making an API call and displaying them. In order to make the application more usable, I implemented the ability to load and edit playlists, as well as added some overall styling. Furthermore, I rebuilt the entire app to use Redux, Reselect, and Webpack in order to make the code more readable and scalable. One improvement I would like to add would be sound recognition technology (perhaps using Gracenote GNSDK)."
                librariesUsed={['React', 'Redux', 'Reselect', 'Express', 'Webpack', 'Lodash', 'React-Modal', 'React-Spinners']}
                gitHubLink="https://github.com/bortojac/jammming"
                projectURL="https://jammming.now.sh"
            />
            <Project
                imgSrc="../static/ravenousBackgroundMobile.jpg"
                imgAlt="Ravenous Picture"
                projectTitle="Ravenous"
                projectDesc="Ravenous is built with ReactJS and calls the Yelp.com business API to allow users to search for local businesses by ranking, reviews, and relevance."
                modalMainContent="This was my first React App, and it was initially built as a project for an online course on codecademy.com. Beyond the project requirements, I added a loading spinner, search functionality on keydown, and re-search when the sort input is changed. Future improvement ideas include the FourSquare API to provide more information on a selected business, Uber ride requests using Uber's Button API, or other travel information from a free API."
                librariesUsed={['React', 'React-Spinners']}
                gitHubLink="https://github.com/bortojac/ravenous"
                projectURL="https://ravenous.now.sh"
            />
            <Project
                imgSrc="../static/portfolioScreenshot.png"
                imgAlt="Portfolio Site Picture"
                projectTitle="This Portfolio Website"
                projectDesc="This Portfolio site is a server-side rendered web app built using Next.js, and it shows my current portfolio of projects."
                modalMainContent="Originally, my portfolio site was built with jQuery before I had learned React. After building Cost Manager, I wanted to learn about server-side rendering because it provides better SEO and performance. As a future improvement, I would like to add a custom server and integrate each one of my side projects."
                librariesUsed={['React', 'Next', 'Fontawesome']}
                gitHubLink="https://github.com/bortojac/portfolio"
                projectURL="https://www.jackborto.com"
            />
            <style jsx>
                {`
                .projectsWrapper {
                    display: flex;
                    flex: 1;
                    flex-flow: row;
                    flex-wrap: wrap;
                    justify-content: space-around;
                 }
         `}
            </style>
        </section>
    </Layout>
)
