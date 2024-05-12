import React from 'react';
import './App.css';

const products = [
  {
    id: 1,
    name: 'This season\'s latest',
    image: 'starbucks.png',
  },
  {
    id: 2,
    name: 'Wyld Gear',
    image: 'wyldgear.png'
  },
  {
    id: 3,
    name: 'Stanley',
    image: 'stanley.png',
  },
  {
    id: 4,
    name: 'Corkcicle',
    image: 'corkcicle.png',
  },
  {
    id: 5,
    name: 'Stanley',
    image: 'stanley2.png',
  },
];

const App = () => {
  return (
    <div className="app">
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={`/assets/${product.image}`} alt={product.name} className="product-image" />
            <div className="product-name">{product.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;