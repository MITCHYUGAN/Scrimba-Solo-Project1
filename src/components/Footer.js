import Twitter from '../Img/Twitter-Icon.png'
import Facebook from '../Img/Facebook-Icon.png'
import Instagram from '../Img/Instagram-Icon.png'
import Github from '../Img/GitHub-Icon.png'

const Footer = () =>{
    return(
        <div className='footer'>
            <img src={Twitter} alt='Twitter-Icon'/>
            <img src={Facebook} alt='Facebook-Icon'/>
            <img src={Instagram} alt='Twitter-Icon'/>
            <img src={Github} alt='Twitter-Icon'/>
        </div>
    )
}

export default Footer