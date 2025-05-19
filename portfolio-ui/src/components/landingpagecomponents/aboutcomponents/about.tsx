import './about.css';

const About = () => {

    const aboutMeText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quisquam ipsam, commodi ea sed quos. Necessitatibus quia eum fugiat voluptatem accusamus aliquam nihil dicta, aliquid facere labore suscipit voluptatibus odio.';
    return(
        <>
        <div className='mainAbout-div'>
            <div className='about-div'>
                <div className='img-div'>
                    <img src="https://img.pikbest.com/origin/10/39/14/59WpIkbEsTVxf.jpg!w700wp" alt="" />
                </div>
                <div className='text-div'>
                    <h2>About me :</h2>
                    <br />
                    <span>{aboutMeText}</span>
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque quam eos autem? Earum magni accusantium delectus sapiente praesentium in fugit distinctio cum officia beatae, perferendis, nam vel, illo ut eum.</span>
                </div>
            </div>
        </div> 
        </>
    )
}

export default About;