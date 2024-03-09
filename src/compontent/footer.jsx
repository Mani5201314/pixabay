import "../style/footer.css"

const Footer = () => {
    return ( 
    <>
            <div id="footer">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
           <span id="iss">
          <a href="#"> <img id="is" src="/img/facebook.png" width={30} alt="" /></a>
            <a href="#"><img id="is" src="/img/instagram.png" width={30} alt="" /></a>
            <a href="#"><img id="is" src="/img/twitter.png" width={30} alt="" /></a>
            <a href="#"><img id="is" src="/img/youtube.png" width={40} alt="" /></a>
           </span>
           </div>
            
            </>
     );
}
 
export default Footer;