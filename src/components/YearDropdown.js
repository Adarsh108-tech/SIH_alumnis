import React, { useState } from 'react';

const YearDropdown = ({ label, years, selectedYear, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <select value={selectedYear} onChange={(e) => onChange(e.target.value)}>
        <option value="">Select Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearDropdown;