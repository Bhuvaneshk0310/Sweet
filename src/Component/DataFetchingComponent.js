// src/DataFetchingComponent.js
import React, { useState, useEffect } from 'react';
import Loader from './Loader';

function DataFetchingComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setData({ message: 'Data fetched successfully!' });
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container ">
      <h1>{data.message}</h1>
    </div>
  );
}

export default DataFetchingComponent;
