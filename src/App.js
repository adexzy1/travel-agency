import BookTripList from './components/BookTrip/BookTripList';
import CategoryList from './components/category/CategoryList';
import DestinationList from './components/destination/DestinationList';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import './index.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <CategoryList />
      <DestinationList />
      <BookTripList />
    </div>
  );
}

export default App;
