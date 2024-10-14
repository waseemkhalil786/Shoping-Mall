import './stylesCSS/product.css'

function CategoryChip({category}) {
    const { name } =category
    return(
        <div className='CategoriesWis'>
        <div className="category-head">
            <h3>{name}</h3>
        </div>
        </div>
    )
}
export default CategoryChip;