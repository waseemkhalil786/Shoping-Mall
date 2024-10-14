import "./stylesCSS/home.css"

function HomeShowCard({ item }) {
  const { thumbnail, category, title, price } = item;
  //   console.log(category);
  //   console.log(item);

  return (
    <div className="main-container">
      <div className="main-div-Home">
        <div className="img">
            <img alt="ecommerce" className="" src={thumbnail} />
        </div>
        <div className="icons">
          <h5 className="title">Title : {title}</h5>
          <h5 className="category">Category : {category}</h5>
          <p className="price">Price : ${price}</p>
        </div>
      </div>
    </div>
  );
}
export default HomeShowCard;