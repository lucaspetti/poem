import React from 'react';

const SortButton = () => (
  <button className="sort-btn" onClick={sortPoem}>Sort</button>
)

function sortPoem() {
  console.log('Sorting poem');
}

export default SortButton;