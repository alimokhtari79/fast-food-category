import { useEffect, useState } from 'react';
import CategoryList from './components/CategoryList/CategoryList';
import Header from './components/Header/Header';
import './App.css';
import axios from './axios';
import FastFoodItems from './components/FastFoodItems/FastFoodItems';
import Loading from './components/Loading/Loading';

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

  const renderContent = () => {
    if (loading) {
      return <Loading theme="dark" />;
    }
    return <FastFoodItems fastFoodItems={fastFoodItems} />;
  };

  return (
    <div className="wrapper bg-faded-dark">
      <Header />
      <CategoryList />
      <div className="container mt-4">{renderContent()}</div>
    </div>
  );
}

export default App;
