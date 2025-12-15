
import '../styles/Init.css'
import ContadorContainer from '../components/ContadorContainer';


const Init = () => {
    return (
        <div>
            <div className="wrapper">
                <div className="container">
                    <h1 className="title">Home</h1>
                    <span className="border-light"></span>
                    <ContadorContainer></ContadorContainer>
                </div>
            </div>
        </div>
        
    );
}

export default Init