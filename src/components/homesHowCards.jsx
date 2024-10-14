import { useEffect, useState } from "react";
import axios from "axios";
import ProdcutCard from "./productCard";
import HomeShowCard from "./HomeCard";

function HomeCards() {

    const [products, setproducts] = useState([]);
    // const [categories ,setCategories ]= useState()
    const [loding, setLoding] = useState(true);
  
    useEffect(() => {
      axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          setproducts(res.data.products);
          setLoding(false);
        })
        .catch((err) => {
          console.log(err);
          setLoding(false);
        });
    }, []);

    return(
        <>
        <div className="" >
        <h1 style={{textAlign : "center", color: "brown" }}>Products</h1>
        
      {
        loding ? (
        <h1 style={{ textAlign: "center", fontSize: "30px" }}>loading. . . . </h1>
      ) : (
        <div className="container">
          {products.map((item) => (
            <HomeShowCard item={item} key={item.id}/>
          ))}
        </div>
      )}
    </div>
        </>
    )
}
export default HomeCards;