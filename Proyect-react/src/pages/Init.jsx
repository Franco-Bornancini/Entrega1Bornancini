
import '../styles/Init.css'
import ContadorContainer from '../components/ContadorContainer';
import { Link } from 'react-router-dom';


const Init = () => {
    return (
        <div>
            <div className="wrapper">
                <div className="container">
                    <h1 className="title">Home</h1>
                    <span className="border-light"></span>
                    {/* <ContadorContainer></ContadorContainer> */}
                    <button>
                        <Link to="/productos">
                            <img src="https://cdnx.jumpseller.com/yetiplantillas/image/37068472/resize/540/540?1688140994" alt="" />
                        </Link>
                    </button>
                    
                </div>
            </div>
        </div>
        
    );
}

export default Init