import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/fontawesome-free-brands';
import { faEnvelope } from '@fortawesome/fontawesome-free-regular';


const Footer = () => (
    <footer id="socialFooter" className="socialLinks">
        <a href="https://www.linkedin.com/in/jack-borto-b2686199" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
        <a href="https://github.com/bortojac" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
        <a href="" onClick={() => window.open('mailto:jack.w.borto@gmail.com')}>
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
        </a>
        <style jsx>
            {` 
            .socialLinks {
                display: flex;
                position: relative;
                justify-content: center;
                align-items: center;
                flex: none;
                height: 6rem;
                background-color: rgba(1, 1, 40, 0);
                transition: background-color 1s;
            }
            .socialLinks > a {
                color: #fff;
                margin: 1rem;
                transition: opacity .5s;
            }
            @media screen and (min-width:900px) {
               .socialLinks:hover > a {
                   opacity: .3;
                   color: rgb(1,1,40);
            }
               .socialLinks:hover {
                background-color: rgba(255,255,255,1);
            }
              .socialLinks > a:hover {
                   opacity: 1;
               }
           }
    `}
        </style>
    </footer>
);

export default Footer;