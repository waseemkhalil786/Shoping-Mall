import { Link } from "react-router-dom";
import Footer from "./fotter";
import "./stylesCSS/home.css";
import HomeCards from "./homesHowCards";


function Home() {
  return (
    <>
      <div className="banner">
        <div className="head">
          <h1>Cosmetics that</h1>
          <h4>Everyone Loves!</h4>
          <p>
            We have Huge collection for cosmetics in our paris Branch. <br />{" "}
            Our Product are always Quality products.
          </p>
          <br />
          <div className="btn">
            <Link to={"/service"}>Explore Our Products</Link>
          </div>
        </div>
      </div>
        <HomeCards/>
      <Footer />
    </>
  );
}
export default Home;
