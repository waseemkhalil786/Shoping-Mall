import Footer from "./fotter";
import Prodcuts from "./product";
import ProfileCard from "./profileCard";


function Home() {
  return (
    <>
      <div className="banner">
        <img
          src="https://static.vecteezy.com/system/resources/previews/006/633/040/original/online-shopping-spring-on-phone-flower-pink-big-sale-banner-marketing-poster-fashion-vector.jpg"
          width={"100%"}
        />
      </div>
      <Prodcuts />
      <ProfileCard/>
      <Footer/>
    </>
  );
}
export default Home;
