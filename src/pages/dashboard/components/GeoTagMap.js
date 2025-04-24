// frontend/src/pages/dashboard/components/GeoTagMap.js
import React from 'react';
import ReactECharts from 'echarts-for-react';
import './GeoTagMap.less';

const GeoTagMap = () => {
  const option = {
    title: {
      text: 'Outlet Geolocation',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    geo: {
      map: 'world', // adjust if you’re focusing on a specific region
      roam: true,
      label: {
        emphasis: {
          show: false,
        },
      },
      itemStyle: {
        normal: {
          areaColor: '#ddd',
          borderColor: '#eee',
        },
        emphasis: {
          areaColor: '#ccc',
        },
      },
    },
    series: [
      {
        name: 'Outlet Location',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: [
          { name: 'Outlet A', value: [120.15, 30.28, 1] },
          { name: 'Outlet B', value: [121.47, 31.23, 1] },
          // Additional outlet data here…
        ],
        symbolSize: 12,
        label: {
          formatter: '{b}',
          position: 'right',
          show: true,
        },
        itemStyle: {
          color: '#ff7f50',
        },
      },
    ],
  };

  return (
    <div className="geo-tag-map">
      <h2>Outlet Locations</h2>
      <ReactECharts option={option} style={{ height: '400px' }} />
    </div>
  );
};

export default GeoTagMap;