import './App.css';
import CategoryList from './components/CategoryList/CategoryList';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="wrapper bg-faded-dark">
      <Header />
      <CategoryList />
    </div>
  );
}

export default App;
