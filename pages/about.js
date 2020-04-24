
import Head from 'next/head';
import Link from 'next/link';



const About = () => (
    <div>
        <Head>
            <title>
                Bitzprize
            </title>
        </Head>
        <ul>
            <li>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>

            </li>
        </ul>
     





        <style jsx>{`
    ul{
        background: #333;
        color: #fff;
        display: flex;
    }



`}</style>

    </div>
);





export default About;