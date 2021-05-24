import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  //transform the object data point into an array of those values
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  //across all data points values return the max
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;