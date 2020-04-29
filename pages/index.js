import Navbar from '../components/Navbar';


const index = (props) => (
    

    <div>
    <Navbar />
        <div className="about_text">
        <h1>Welcome to NewProject</h1>
        <p>This is the Home page</p>
 
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




export default index;