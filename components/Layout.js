import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Head from 'next/head';

class Layout extends React.PureComponent {
    render() {
        return (
            <div id="container" className="container">
                <Head>
                    <meta charSet="utf-8" />
                    <title>Jack Borto</title>
                    <meta content="description" name="Jack Borto Portfolio Site" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
                    <link href="../static/favicon.ico" rel="shortcut icon" />
                </Head>
                <Header />
                <main className="content">
                    {this.props.children}
                </main>
                <Footer />
                <style global jsx>
                    {`
                    html {
                        height: 100%;
                        font-size: 60%;
                        font-family: 'Roboto', sans-serif;
                    }
                    body {
                        height: 100%;
                        width: 100%;
                        font-size: 1.4em;
                        background: #fff;
                        margin: 0;
                    }
                    body.modalOpen {
                        overflow: hidden;
                    }
                    #__next {
                        height: 100%;
                    }
                    .container {
                        min-height: 100%;
                        display: flex;
                        flex-flow: column;
                        background-color: rgba(1, 1, 40, .7);
                        background-size: cover;
                        background-blend-mode: darken;
                        background-image: url("../static/manhattan.jpg");
                    }
                    .content {
                        display: flex;
                        flex-flow: column;
                        flex: 1;
                    }
                    `
                    }
                </style>
            </div>
        );
    }
}

export default Layout;