import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Searchedproduct = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSearchedProducts = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
        setProducts(res.data.products);
      } catch (err) {
        console.error('Search failed:', err);
      } finally {
        setIsLoading(false);
      }
    };

    if (query) {
      fetchSearchedProducts();
    }
  }, [query]);

  return (
    <div className='container mt-4'>
      <h3>Search results for: <strong>{query}</strong></h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="d-flex flex-wrap gap-3">
          {products.map((product) => (
            <Card key={product.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={product.thumbnail} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="primary">View</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Searchedproduct;
