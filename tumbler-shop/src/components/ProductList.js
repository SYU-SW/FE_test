import React, { useState, useEffect } from 'react';
import Product from './Product';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreProducts);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    // 초기 제품 데이터 불러오기
    const data = await fetchFromAPI('/products');
    setProducts(data);
  };

  const fetchMoreProducts = async () => {
    // 추가 제품 데이터 불러오기
    const data = await fetchFromAPI('/products?page=2');
    setProducts((prevProducts) => [...prevProducts, ...data]);
    setIsFetching(false);
  };

  return (
    <div>
      <h2>제품 목록</h2>
      <div>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      {isFetching && <div>Loading...</div>}
    </div>
  );
};

export default ProductList;