import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Categories = ({ onSelectCategory }) => {
  const [cat, setCat] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const { data } = await axios.get('https://dummyjson.com/products');
    const allCategories = data.products.map((item) => item.category);
    const unique = [...new Set(allCategories)];
    setCat(unique);
    setIsLoading(false);
  };

  return (
    <Card style={{ width: '100%' }} className='rounded-1 py-3'>
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="d-flex flex-wrap justify-content-center gap-2">
          <Button variant="outline-dark" onClick={() => onSelectCategory(null)}>
            All
          </Button>
          {cat.map((item, index) => (
            <Button
              key={index}
              variant="outline-primary"
              onClick={() => onSelectCategory(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Button>
          ))}
        </div>
      )}
    </Card>
  );
};

export default Categories;
