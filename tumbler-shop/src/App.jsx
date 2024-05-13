import React, { useState, useEffect } from 'react';
import useInfiniteScroll from './hooks/useInfiniteScroll';
import Banner from './components/Banner';
import ProductGrid from './components/ProductGrid';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreProducts);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    // 초기 제품 데이터 불러오기 (API 호출 또는 모의 데이터 사용)
    //const data = await fetchFromAPI('/products');
    //setProducts(data);
  };

  const fetchMoreProducts = async () => {
    // 추가 제품 데이터 불러오기 (API 호출 또는 모의 데이터 사용)
    //const data = await fetchFromAPI('/products?page=2');
    //setProducts((prevProducts) => [...prevProducts, ...data]);
    setIsFetching(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tumbler</h1>
      </header>
      <Banner />
      <ProductGrid products={products} />
      {isFetching && <div>Loading...</div>}
    </div>
  );
}

export default App;