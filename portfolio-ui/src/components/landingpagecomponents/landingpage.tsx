import './landingpage.css';
import pokemonGif from '../../assets/gif/pokemonRunning.gif';
import About from '../aboutcomponents/about';

const Landingpage = () =>{
    return (
        <>
        <div className='mainLandingPage-div'>
            <div className='landingPage-div'>
                <img src={pokemonGif} alt="" />
                <span>Madheswar Vijayakumar</span>
                <span>Web Developer</span>
            </div>
        </div>
        <About />
        </>
    )
}

export default Landingpage;