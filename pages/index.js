import Layout from '../components/Layout';


export default () => (
    <Layout>
        <section className="mainHeading">
            <h1>Jack Borto</h1>
            <h2>New York, NY</h2>
            </section>
        <style jsx>
            {`
            .mainHeading {
                display: flex;
                flex-flow: column;
                flex: 1;
                color: #fff;
                justify-content: center;
                align-items: center;
            }
            .mainHeading > h1 {
                font-size: 4rem;
                   margin: 1rem;
              }
        
           .mainHeading > h2 {
               font-size: 1.5rem;
               font-weight: bold;
               text-decoration: none;
              }
              `}
        </style>
    </Layout>
)
