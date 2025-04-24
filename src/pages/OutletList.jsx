import React, { useEffect, useCallback, useState } from "react";

const OutletList = () => {
  const [outlets, setOutlets] = useState([]);

  const fetchOutlets = useCallback(async () => {
    try {
      const response = await fetch("/api/outlets");
      const data = await response.json();
      setOutlets(data);
    } catch (error) {
      console.error("Error fetching outlets:", error);
    }
  }, []);

  useEffect(() => {
    fetchOutlets();
  }, [fetchOutlets]);

  return (
    <div>
      <h1>Outlet List</h1>
      {outlets.length === 0 ? (
        <p>No outlets available</p>
      ) : (
        <ul>
          {outlets.map((outlet) => (
            <li key={outlet.id}>{outlet.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OutletList;