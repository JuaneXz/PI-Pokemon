import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div>
            <h1>Bienvenido a mi proyecto individual</h1>
            <h1>Esta vez en una nueva edición, </h1>
            <h1>con pokémones</h1>
            
            <button>
                <Link to="/home">Home</Link>
            </button>
        </div>
    );
}

export default Landing;
