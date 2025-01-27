import React, { useContext, useState } from 'react';
import { productsContext } from '../pages/Products';

const Sidebar = () => {
  const { products, setFilteredProducts } = useContext(productsContext);
  const [activeCategory, setActiveCategory] = useState('All Categories');

  const handleCategory = (e) => {
    const selectedCategory = e.target.textContent;
    setActiveCategory(selectedCategory);

    if (selectedCategory === 'All Categories') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  };

  const categories = [
    'All Categories',
    'Electronics',
    'Furniture',
    'Sports',
    'Accessories',
    'Sportswear',
  ];

  return (
    <div style={styles.sidebar}>
      <h1 style={styles.sidebarTitle}>Categories</h1>
      <div style={styles.categoryList}>
        {categories.map((category) => (
          <p
            key={category}
            style={{
              ...styles.sidebarItem,
              ...(category === activeCategory ? styles.sidebarItemActive : {}),
            }}
            onClick={handleCategory}
          >
            {category}
          </p>
        ))}
      </div>
    </div>
  );
};

const styles = {
  sidebar: {
    height: '100vh',
    width: '20%',
    backgroundColor: '#ffffff',
    padding: '20px',
    boxSizing: 'border-box',
    borderRight: '1px solid #e0e0e0',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
  },
  sidebarTitle: {
    fontSize: '22px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '20px',
    borderBottom: '2px solid #e0e0e0',
    paddingBottom: '10px',
  },
  categoryList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  sidebarItem: {
    fontSize: '16px',
    padding: '10px 15px',
    color: '#555',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  sidebarItemActive: {
    fontWeight: '600',
    color: '#ffffff',
    backgroundColor: '#007bff',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    border: '1px solid #0056b3',
  },
  sidebarItemHover: {
    backgroundColor: '#e8f1ff',
  },
};

export default Sidebar;
