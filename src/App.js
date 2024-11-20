import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components';
// import Product from './pages/collections/product';


function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      {/* <Route path="/product-list" element={<Product />} /> */}
    </Routes>
   </Router>
  );
}

export default App;
