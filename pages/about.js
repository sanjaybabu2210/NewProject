
import Head from 'next/head';
import Navbar from '../components/Navbar';

const About = () => (
    <div className="abouts">
        <Head>
            <title>
                Bitzprize
            </title>
        </Head>
        <Navbar />
        <div className="about_text">
        <h1>About page</h1>
        <p>Application to view page</p>
 
        </div>
        
        <style jsx>{`
    .abouts{
        position:relative;
        display:inline-line;
    }
    .about_text{
        float:left;
        position:absolute;
        margin-left:30%;

    }
 

`}</style>





    </div>
);





export default About;