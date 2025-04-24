// frontend/src/pages/dashboard/components/SearchAndFilter.js
import React, { useState, useContext } from 'react';
import { Card, Input, Select, Button } from 'antd';
import { FilterContext } from '@/context/FilterContext';

const { Option } = Select;

const SearchAndFilter = () => {
  const { setFilter } = useContext(FilterContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState('');

  const handleFilter = () => {
    setFilter({ searchTerm, status });
  };

  return (
    <Card title="Filter Outlets" style={{ marginBottom: '24px' }}>
      <Input 
        placeholder="Search Outlet Name or ID" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '16px' }} 
      />
      <Select
        placeholder="Select Status"
        style={{ width: '100%', marginBottom: '16px' }}
        value={status}
        onChange={value => setStatus(value)}
      >
        <Option value="">All</Option>
        <Option value="created">Created</Option>
        <Option value="under_review">Under Review</Option>
        <Option value="verified">Verified</Option>
        <Option value="rejected">Rejected</Option>
      </Select>
      <Button type="primary" block onClick={handleFilter}>
        Filter
      </Button>
    </Card>
  );
};

export default SearchAndFilter;