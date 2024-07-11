import React, { useState, useEffect } from 'react';

const ESGDashboard = () => {
  const [data, setData] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState('Global');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const csvData = `Column %,E S or G,Global,Europe,Asia,UK,Belgium,Germany,Spain,France,Italy,Hong Kong,Japan,Philippines,Singapore,Thailand,Indonesia
Data protection / cyber-security,G,81.49,78.48,84.50,79.40,73.90,78.80,80.20,76.30,82.30,83.50,61.30,95.50,80.30,93.60,92.80
Fair pricing (companies fairly pricing their products or services),G,76.38,74.65,78.10,77.20,70.40,74.80,73.30,71.30,80.90,74.00,55.00,92.70,75.90,88.90,82.10
Honest / transparent accounting practices,G,81.38,78.40,84.35,78.20,77.50,74.70,78.70,76.50,84.80,84.00,61.50,95.60,80.50,93.00,91.50
Supporting the conservation of oceans and marine life,E,72.38,72.72,72.05,70.70,68.60,72.60,72.00,71.80,80.60,68.20,44.40,88.60,67.10,84.80,79.20
Avoiding water waste,E,72.83,72.10,73.55,66.40,67.60,70.70,75.30,76.00,76.60,70.00,43.30,90.40,70.80,84.90,81.90
High regard for staff health / safety,G,72.92,70.95,74.88,69.60,66.70,70.10,71.60,68.90,78.80,70.30,43.80,93.10,70.10,88.50,83.50
Fair treatment of and remuneration for company employees,G,71.84,69.80,73.88,69.10,66.90,69.30,72.10,65.60,75.80,67.60,48.40,91.40,66.00,89.30,80.60
Supporting the humane treatment of animals,E,68.66,68.08,69.23,68.00,65.00,66.10,66.40,68.20,74.80,63.80,37.00,87.40,64.40,86.30,76.50
Supporting cuts to pollution / carbon emissions,E,72.11,69.25,74.97,67.30,62.50,66.00,70.60,68.50,80.60,73.80,43.50,88.90,69.20,89.50,84.90
Degree to which business growth looks sustainable over the long term,G,74.93,70.42,79.45,72.70,64.50,65.70,72.40,69.00,78.20,79.70,55.70,89.70,71.80,92.60,87.20
A company's ethical values,S,71.33,66.55,76.12,69.90,59.40,65.20,71.40,57.50,75.90,72.00,51.20,89.90,70.70,86.60,86.30
Supporting the preservation of natural capital (e.g. biodiversity eliminating waste etc.),E,70.48,68.17,72.80,63.20,65.00,64.90,69.30,70.00,76.60,66.10,43.40,89.10,67.20,85.20,85.80
Supporting action against climate change (e.g. company carbon footprint),E,68.78,65.60,71.97,63.00,56.20,61.50,69.50,66.40,77.00,68.70,41.70,88.00,69.40,83.10,80.90
Supporting the combat against global poverty,S,66.01,64.30,67.72,59.40,57.80,60.70,67.70,61.50,78.70,56.50,34.50,86.30,64.10,82.50,82.40
Supporting healthy lives and well-being for all people,S,72.04,68.67,75.42,67.40,67.90,60.40,70.80,68.90,76.60,68.20,44.20,91.70,71.60,89.70,87.10
Do not engage in morally questionable business (e.g. nicotine alcohol gambling pornography),S,66.59,63.73,69.45,62.60,59.50,59.50,66.80,60.40,73.60,65.60,44.20,80.40,65.60,79.40,81.50
Supporting the local community / local infrastructure,S,65.98,63.78,68.17,59.90,56.60,58.90,68.30,62.60,76.40,62.50,32.40,85.20,64.20,85.90,78.80
Supporting access to quality education,S,68.58,65.43,71.73,60.30,61.30,57.70,71.70,66.30,75.30,61.00,37.90,90.60,65.10,88.20,87.60
Shareholder voting rights,G,63.97,58.73,69.20,58.30,52.80,56.30,62.80,56.50,65.70,62.30,37.40,85.90,64.10,86.70,78.80
Clean transportation (i.e. EV batteries shared mobility freight),E,63.71,58.83,68.58,54.60,50.60,55.60,62.40,56.20,73.60,62.60,39.10,86.70,63.80,85.10,74.20
Supporting diversity and inclusion (e.g. employment policies gender equality agenda etc.),S,62.16,57.97,66.35,57.50,51.80,53.70,60.90,54.50,69.40,59.90,38.50,83.80,61.70,81.10,73.10
A company's partnership / supplier organisations,G,63.59,57.58,69.60,58.70,53.90,52.90,59.30,58.10,62.60,67.90,36.30,86.40,65.30,83.30,78.40
Profits / donations given to charity,S,54.72,51.03,58.40,50.40,46.40,46.50,55.50,49.80,57.60,48.40,24.10,76.30,53.90,75.90,71.80`;

        const lines = csvData.split('\n');
        const headers = lines[0].split(',');
        const parsedData = {};

        headers.slice(2).forEach(region => {
          parsedData[region] = [];
        });

        lines.slice(1).forEach(line => {
          const values = line.split(',');
          headers.slice(2).forEach((region, index) => {
            parsedData[region].push({
              name: values[0],
              category: values[1],
              value: parseFloat(values[index + 2])
            });
          });
        });

        setData(parsedData);
        setIsLoading(false);
      } catch (err) {
        console.error("Error loading data:", err);
        setError('Error loading data. Please try again.');
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const regions = data ? Object.keys(data) : [];

  const filteredData = data && data[selectedRegion]
    ? data[selectedRegion]
        .filter(item => selectedCategory === 'All' || item.category === selectedCategory)
        .sort((a, b) => b.value - a.value)
    : [];

  const categories = [
    { name: 'All', color: 'gray' },
    { name: 'E', color: '#9fd9b4' },
    { name: 'S', color: '#027180' },
    { name: 'G', color: '#00adc6' },
  ];

  const getCategoryColor = (category) => {
    const cat = categories.find(c => c.name === category);
    return cat ? cat.color : 'gray';
  };

  const top10Factors = filteredData.slice(0, 10);
  const environmentalCount = top10Factors.filter(item => item.category === 'E').length;
  const socialCount = top10Factors.filter(item => item.category === 'S').length;
  const governanceCount = top10Factors.filter(item => item.category === 'G').length;

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
    },
    header: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    controls: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '20px',
    },
    select: {
      padding: '5px',
    },
    categoryButtons: {
      display: 'flex',
      gap: '10px',
    },
    button: {
      padding: '5px 10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    chartContainer: {
      position: 'relative',
    },
    bar: {
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
      position: 'relative',
    },
    barLabel: {
      position: 'absolute',
      left: '10px',
      color: 'white',
      zIndex: 1,
      fontSize: '12px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '70%',
    },
    barValue: {
      position: 'absolute',
      right: '10px',
      color: 'white',
    },
    insights: {
      marginTop: '20px',
    },
  };

  if (isLoading) {
    return <div style={styles.container}>Loading...</div>;
  }

  if (error) {
    return <div style={styles.container}>Error: {error}</div>;
  }

  if (!data) {
    return <div style={styles.container}>No data available. Please try again later.</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>ESG Criteria Rankings Dashboard</h1>
      
      <div style={styles.controls}>
        <select 
          value={selectedRegion} 
          onChange={(e) => setSelectedRegion(e.target.value)}
          style={styles.select}
        >
          {regions.map(region => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>
        
        <div style={styles.categoryButtons}>
          {categories.map(cat => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              style={{
                ...styles.button,
                backgroundColor: selectedCategory === cat.name ? cat.color : 'lightgray',
                color: selectedCategory === cat.name ? (cat.name === 'E' ? 'black' : 'white') : 'black',
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div style={styles.chartContainer}>
        {filteredData.map((item, index) => (
          <div key={item.name} style={{...styles.bar, backgroundColor: getCategoryColor(item.category), width: `${item.value}%`}}>
            <span style={styles.barLabel} title={item.name}>{item.name}</span>
            <span style={styles.barValue}>{item.value.toFixed(1)}%</span>
          </div>
        ))}
      </div>

      <div style={styles.insights}>
        <h2>Key Insights for {selectedRegion}</h2>
        <ul>
          <li>Top factor: {filteredData[0]?.name} ({filteredData[0]?.value.toFixed(2)}%)</li>
          <li>Lowest factor: {filteredData[filteredData.length - 1]?.name} ({filteredData[filteredData.length - 1]?.value.toFixed(2)}%)</li>
          <li>{environmentalCount} Environmental factors in top 10</li>
          <li>{socialCount} Social factors in top 10</li>
          <li>{governanceCount} Governance factors in top 10</li>
        </ul>
      </div>
    </div>
  );
};

export default ESGDashboard;
