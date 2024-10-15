import { useEffect, useState } from "react";
import axios from "axios";
import ProdcutCard from "./productCard";
import "./stylesCSS/product.css";
import CategoryChip from "./CategoryChip";

function Products() {
  const [products, setProducts] = useState([]); // Fixed case for state
  const [categories, setCategories] = useState([]); // Initialized as empty array
  const [loading, setLoading] = useState(true); // Fixed typo in loading state
  const [chosenCategory, setChosenCategory] = useState("All");

  useEffect(() => {
    console.log("useEffect call ho rhah h bhai kia ho gia ");
    const url =
      chosenCategory === "All"
        ? "https://dummyjson.com/products"
        : `https://dummyjson.com/products/categories/${chosenCategory}`;  
        console.log("URL", url);
      axios
      .get(url)
      .then((res) =>{
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) =>{
        console.log(err);
        setLoading(false)
      });
  }, [chosenCategory]);

  useEffect(() => {
    axios
    .get("https://dummyjson.com/products/categories")
    .then((res) =>{
      setCategories(res.data);
      setLoading(false);
    })
    .catch((err) =>{
      console.log(err);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <h1 style={{ textAlign: "center", fontSize: "30px" }}>
          Loading. . . .
        </h1>
      ) : (
        <div>
          <div className="Category02">
            <CategoryChip
              onClick={() => setChosenCategory("All")}
              isChosen={chosenCategory === "All"}
              category={{
                slug: "All",
                name: "All",  
              }}
            />
            {categories.map((category) => (
              <CategoryChip
                onClick={() => setChosenCategory(category.slug)}
                isChosen={category.slug === chosenCategory}
                key={category.slug}
                category={category}
              />
            ))}
          </div>
          <div className="container">
            {products.map((item) => (
              <ProdcutCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
