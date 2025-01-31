import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../contexts/AuthContext';
import { getChart } from '../api/ChartApi';
import ChartProduct from '../components/ChartProduct';

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

    if (!chart.products) return <div>Loading chart...</div>;
    if (chart.products.length === 0) return (<div>Chart is empty</div>)

    return (
        <div>
            <div style={styles.container}>
                {chart.products.map(prod => (
                    <ChartProduct quantity={prod.quantity} productId={prod.product} chartId={chartId} key={prod._id} />
                ))}
            </div>
                <h4>Total Price: {chart.total || 'not calculated'}</h4>
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
