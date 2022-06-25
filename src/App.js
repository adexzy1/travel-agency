import BookTripList from './components/BookTrip/BookTripList';
import CategoryList from './components/category/CategoryList';
import ContactForm from './components/contact form/ContactForm';
import DestinationList from './components/destination/DestinationList';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import PartnersList from './components/partners/PartnersList';
import Testimonial from './components/testimonials/Testimonial';
import './index.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <CategoryList />
      <DestinationList />
      <BookTripList />
      <Testimonial />
      <PartnersList />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
