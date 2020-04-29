
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faPhoneSquare} from '@fortawesome/fontawesome-free-solid'


const Navbar = () => (
<div>



<div className="sidenav">
  <a href="/"><FontAwesomeIcon icon={faHome} /> &nbsp;Home</a>
  <a href="/about"><FontAwesomeIcon icon={faUser} />&nbsp; About
          
        </a>
  <a href="/contact"><FontAwesomeIcon icon={faPhoneSquare} />&nbsp; Contact</a>

</div>



        <style jsx>{`
       body {
        font-family: "Lato", sans-serif;
      }
      
      .sidenav {
        height: 100%;
        width: 200px;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: #BC1C17;
        overflow-x: hidden;
        padding-top: 20px;
        text-transform:uppercase;
      }
      
      .sidenav a {
        padding: 6px 6px 6px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #f4f1f9;
        display: block;
      }
      
      .sidenav a:hover {
        background-color: #dfd7bb;
        color:black;
      }
      
      .main {
        margin-left: 200px; /* Same as the width of the sidenav */
      }
      
      @media screen and (max-height: 450px) {
        .sidenav {padding-top: 15px;}
        .sidenav a {font-size: 18px;}
      }

`}</style>
</div>


);


export default Navbar;