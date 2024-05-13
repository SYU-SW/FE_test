import React from 'react';
import './App.css';
import starbucksImage from './assets/starbucks.png';
import wyldgearImage from './assets/wyldgear.png';
import stanleyImage from './assets/stanley.png';
import corkcicleImage from './assets/corkcicle.png';
import stanley2Image from './assets/stanley2.png';

const products = [
  {
    id: 1,
    name: 'This season\'s latest',
    image: starbucksImage,
  },
  {
    id: 2,
    name: 'Wyld Gear',
    image: wyldgearImage,
  },
  {
    id: 3,
    name: 'Stanley',
    image: stanleyImage,
  },
  {
    id: 4,
    name: 'Corkcicle',
    image: corkcicleImage,
  },
  {
    id: 5,
    name: 'Stanley',
    image: stanley2Image,
  },
];

const App = () => {
  return (
    <div className="app">
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-name">{product.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;