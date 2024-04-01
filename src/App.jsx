import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import './App.css';
import LoginScreen from './LoginScreen';
import ProductsScreen from './ProductsScreen';
import ProductDetailsScreen from './ProductDetailsScreen';
import CheckoutScreen from './CheckoutScreen';

const App = () => {
  return (
    <Router>
      <Header /> {/* Cabeçalho exibido nas páginas */}
      <Switch>
        <Route exact path="/" component={LoginScreen} />
        <Route path="/products" component={ProductsScreen} />
        <Route path="/products/:id" component={ProductDetailsScreen} />
        <Route path="/checkout" component={CheckoutScreen} />
      </Switch>
      <Footer /> {/* Rodapé exibido nas páginas */}
    </Router>
  );
};

export default App;
