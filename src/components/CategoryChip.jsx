import "./stylesCSS/product.css";

function CategoryChip({ category, isChosen, onClick }) {
  console.log("is chosen=>", isChosen);

  const { name } = category;
  return (
    <div onClick={onClick} className={`${isChosen}? category-head`}>
      <h3>{name}</h3>
    </div>
  );
}
export default CategoryChip;
