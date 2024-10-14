import { Link } from "react-router-dom";
import "./stylesCSS/fotter.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-column">
            <h3>Shoping mall </h3>
            <p>Hi there Costmatic Products are Here</p>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/"}>Products</Link>
              </li>
              <li>
                <Link to={"/"}>Product details</Link>
              </li>
              <li>
                <Link to={"/"}>Contact Link</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact Us</h4>
            <ul>
              <li>Email: waseemkhalilworld@gmail.com</li>
              <li>Phone: +92 03003799661</li>
              <li>Address: Karachi Sindh</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © 2024 GitHub, Inc. |  
            <Link to={"https://policies.google.com/privacy?hl=en-US"}>
               Privacy Policy
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
