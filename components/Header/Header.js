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
          margin-right: auto;
          margin-left: 2rem;
          display: inline-flex;
          font-size: 2.0rem;
        }
        nav > a {
          margin: 1rem;
          align-self: flex-end;
        }
        `}
        </style>
    </div>
)
   }
}

export default Header