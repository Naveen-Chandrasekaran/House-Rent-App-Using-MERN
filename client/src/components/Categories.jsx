import { categories } from "../data";
import "../styles/Categories.scss"
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <h1>Explore Top Categories</h1>
      <p>
        Explore our wide range of vacation rentals that cater to all types of
        travelers. Immerse yourself in the local culture, enjoy the comforts of
        home, and create unforgettable memories in your dream destination.
      </p>

      <div className="categories_list">
<<<<<<< HEAD
  {categories?.slice(1, 7).map((category, index) => (
    <Link to={`/properties/category/${category.label}`} key={index}>
      <div className="category">
        <img src={category.img} alt={category.label} />
        <div className="overlay"></div>
        <div className="category_text">
          <div className="category_text_icon">{category.icon}</div>
          <p>{category.label}</p>
        </div>
      </div>
    </Link>
  ))}
</div>
=======
        {categories?.slice(1, 7).map((category, index) => (
          <Link to={`/properties/category/${category.label}`}>
            <div className="category" key={index}>
              <img src={category.img} alt={category.label} />
              <div className="overlay"></div>
              <div className="category_text">
                <div className="category_text_icon">{category.icon}</div>
                <p>{category.label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
>>>>>>> f7a2dd412463f7549df09b33432ba1bedd0c4165
    </div>
  );
};

export default Categories;
