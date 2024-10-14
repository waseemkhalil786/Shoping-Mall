import { useEffect, useState } from "react";
import axios from "axios";
import ProdcutCard from "./productCard";
import "./stylesCSS/product.css";
import CategoryChip from "./CategoryChip";

function Products() {
  // Fixed typo in component name
  const [products, setProducts] = useState([]); // Fixed case for state
  const [categories, setCategories] = useState([]); // Initialized as empty array
  const [loading, setLoading] = useState(true); // Fixed typo in loading state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setProducts(res.data.products);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false); // Set loading to false after API call
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          "https://dummyjson.com/products/categories"
        );
        setCategories(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false); // Set loading to false after API call
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "brown" }}>Products</h1>

      {loading ? (
        <h1 style={{ textAlign: "center", fontSize: "30px" }}>
          Loading. . . .
        </h1>
      ) : (
        <div>
          <div className="Category02">
            {categories.map((category) => (
              <CategoryChip key={category} category={category} />
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
