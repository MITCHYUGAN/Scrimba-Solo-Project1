import myImage from '../Img/img.JPG'
import Mail from '../Img/Mail.png'
import Linkedin from '../Img/linkedin.png'

export const Info = () =>{
    return(
        <header>
            <img src={myImage} className="image" alt="MyImage"/>
            <div className='nav-contents'>
                <div className='nav-contents-texts'>
                    <h3>Dennis Mitchell</h3>
                    <p>Frontend Developer</p>
                    <span>mitchyugan.website</span>
                </div>
                <div className="nav-contents-buttons">
                        <button className='emailbutton'>
                        <img src={Mail} alt='Mail-icon'/> 
                        Email
                    </button>
                    <button className='linkedinbutton'>
                        <img src={Linkedin} alt='Linkedin Icon'/>
                        Linkedin
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Info