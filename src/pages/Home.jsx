import { useState, useEffect } from 'react';
import axios from 'axios';
import Categories from '../components/Categories';
import Product from '../components/Product';
import Slider from '../components/Slider';

function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get('https://dummyjson.com/products');
    setAllProducts(res.data.products);
    setFilteredProducts(res.data.products); // show all by default
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    const filtered = allProducts.filter((p) => p.category === category);
    setFilteredProducts(filtered);
  };

  return (
    <div className="container mt-3">
      {/* Slider on top */}
      <div className="row mb-4">
        <div className="col">
          <Slider />
        </div>
      </div>

      {/* Categories as a horizontal row */}
      <div className="row mb-4">
        <div className="col">
          <Categories onSelectCategory={handleCategorySelect} />
        </div>
      </div>

      {/* Product grid */}
      <div className="row">
        <div className="col">
          <Product prod={filteredProducts} />
        </div>
      </div>
    </div>
  );
}

export default Home;
