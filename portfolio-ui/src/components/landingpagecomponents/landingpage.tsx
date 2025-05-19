import './landingpage.css';
import pokemonGif from '../../assets/gif/pokemonRunning.gif';
import About from './aboutcomponents/about';
import Skill from './skillcomponents/skill';

const Landingpage = () =>{
    return (
        <>
        <div className='mainLandingPage-div'>
            <div className='landingPage-div'>
                <img src={pokemonGif} alt="" />
                <span>Madheswar Vijayakumar</span>
                <br />
                <span className='role-span'>- Web Developer -</span>
            </div>
        </div>
        <About />
        <Skill />
        </>
    )
}

export default Landingpage;