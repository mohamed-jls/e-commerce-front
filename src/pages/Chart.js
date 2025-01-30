import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../contexts/AuthContext';
import { getChart } from '../api/ChartApi';
import ProductGridItem from '../components/ProductGridItem';

const Chart = () => {
    const { user } = useContext(userContext);
    const chartId = user?.chart;

    const [chart, setChart] = useState({ products: [] });

    useEffect(() => {
        if (!chartId) return;

        const handleGetChart = async () => {
            try {
                const result = await getChart(chartId);
                console.log(result);
                setChart(result);
            } catch (error) {
                console.error('Error fetching chart:', error);
            }
        };

        handleGetChart();
    }, [chartId]);

    if (!chart.products.length) return <div>Loading chart...</div>;

    return (
        <div style={styles.container}>
            {chart.products.map((prod) => (
                <ProductGridItem prod={prod.product} key={prod._id} />
            ))}
        </div>
    );
};

const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '3px',
        
    }
};

export default Chart;
