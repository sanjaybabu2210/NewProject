import Fetch from 'isomorphic-unfetch';



const Index = (props) => (
    <div>
        <h1>Welcome to Bitzprice</h1>
    </div>
)


Index.getInitialProps = async function(){
    const res = await fetch('');
    const data = await res.json();


    return{
        bpi: data;
    };
}

export default index;