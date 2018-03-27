import React from 'react';
import Link from 'next/link';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="projects">
            <a>Projects</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </nav>
        <style jsx>
          {`
        .header {
          display: flex;
          height: 6rem;
          background-color: #fff;
        }
        nav {
          margin-left: 2rem;
          margin-top: auto;
          margin-bottom: auto;
          font-size: 2.0rem;
        }
        nav > a {
          margin: 1rem;
          align-self: flex-end;
          text-decoration: none;
          color: rgba(1,1,40,1);
          opacity: 1;
          transition: opacity .4s;
        }
        @media screen and (min-width: 900px) {

          nav:hover > a {
            opacity: .4;
            color: rgba(1,1,40,1);
          }
          nav > a:hover {
            opacity: 1;
                    }
        }
        `}
        </style>
      </div>
    );
  }
}

export default Header