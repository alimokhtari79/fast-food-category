import Loading from '../Loading/Loading';
import useAxios from '../../useAxios';

const CategoryList = ({ filterCategory, children }) => {
  const [categories, , loading] = useAxios({
    url: '/FoodCategory/categories',
  });

  return (
    <nav className="container mt-n5">
      <div
        className="d-flex align-items-center bg-white rounded-3 shadow-lg py-4"
        style={{ height: '80px' }}
      >
        {loading ? (
          <Loading />
        ) : (
          <div className="ps-3 w-100 d-flex align-items-center justify-content-between gap-5">
            <ul className="nav">
              <li className="nav-item" onClick={() => filterCategory(null)}>
                <a href="#" className="nav-link">
                  همه فست فودها
                </a>
              </li>
              {categories.map((category) => (
                <li
                  className="nav-item"
                  key={category.id}
                  onClick={() => filterCategory(category.id)}
                >
                  <a href="#" className="nav-link">
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
            {children}
          </div>
        )}
      </div>
    </nav>
  );
};

export default CategoryList;
