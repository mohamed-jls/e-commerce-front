import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import ProductGridItem from '../components/ProductGridItem';
import Footer from '../components/Footer';

const Home = () => {
    const [prods, setProds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('fetching products');
        fetch(`${process.env.REACT_APP_API_URL}/products`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                setProds(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching products:', err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading products...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <Hero />
            <div style={styles.prods}>
                {prods.slice(0, 3).map((prod, index) => (
                    <ProductGridItem prod={prod} key={index} />
                ))}
            </div>
            <Footer/>
        </div>
    );
};


const styles = {
    prods: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%'
    }
}

export default Home;
