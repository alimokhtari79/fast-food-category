import { useEffect, useState } from 'react';
import axios from '../../axios';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get('/FoodCategory/categories')
      .then((res) => setCategories(res.data));
  }, []);
  return (
    <nav className="container mt-n5">
      <div
        className="d-flex align-items-center bg-white rounded-3 shadow-lg py-4"
        style={{ height: '80px' }}
      >
        <ul className="nav">
          <li className="nav-item">
            <a href="#" className="nav-link">
              همه فست فودها
            </a>
          </li>
          {categories.map((category) => (
            <li className="nav-item" key={category.id}>
              <a href="#" className="nav-link">
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default CategoryList;
