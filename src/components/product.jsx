import { useEffect, useState } from "react";
import axios from "axios";
import ProdcutCard from "./productCard";
import "./stylesCSS/product.css"


function Prodcuts() {
  const [products, setproducts] = useState([]);

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
  
  return (
    <div className="" >
        <h1 style={{textAlign : "center", color: "brown" }}>Products</h1>
        
      {
        loding ? (
        <h1 style={{ textAlign: "center", fontSize: "30px" }}>loading. . . . </h1>
      ) : (
        <div className="container">
          {products.map((item) => (
            <ProdcutCard item={item} key={item.id}/>
          ))}
        </div>
      )}
    </div>
  );
}
export default Prodcuts;