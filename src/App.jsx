import { useEffect, useState } from 'react';
import CategoryList from './components/CategoryList/CategoryList';
import Header from './components/Header/Header';
import './App.css';
import axios from './axios';
import FastFoodItems from './components/FastFoodItems/FastFoodItems';
import Loading from './components/Loading/Loading';
import SearchBar from './components/SearchBar/SearchBar';
import notFound from './assets/images/404.png';

function App() {
  const [fastFoodItems, setFastFoodItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFastFoodData = async (categoryId = null) => {
    setLoading(true);
    const response = await axios.get(
      `/FastFood/list${categoryId ? '?categoryId=' + categoryId : ''}`
    );
    console.log(response.data);
    setFastFoodItems(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchFastFoodData();
  }, []);

  const filterCategory = (categoryId) => {
    fetchFastFoodData(categoryId);
  };

  const searchItems = async (term) => {
    setLoading(true);
    const response = await axios.get(
      `/FastFood/search/${term ? '?term=' + term : ''}`
    );
    setLoading(false);
    setFastFoodItems(response.data);
  };

  const renderContent = () => {
    if (loading) {
      return <Loading theme="dark" />;
    }

    if (fastFoodItems.length === 0) {
      return (
        <>
          <div className="alert alert-warning text-center">
            برای کلید واژه فوق هیچ آیتمی یافت نشد
          </div>
          <img className="mx-auto mt-5 d-block" src={notFound} alt="notFound" />
        </>
      );
    }

    return <FastFoodItems fastFoodItems={fastFoodItems} />;
  };

  return (
    <div className="wrapper bg-faded-dark">
      <Header />
      <CategoryList filterCategory={filterCategory}>
        <SearchBar searchItems={searchItems} />
      </CategoryList>
      <div className="container mt-4">{renderContent()}</div>
    </div>
  );
}

export default App;
