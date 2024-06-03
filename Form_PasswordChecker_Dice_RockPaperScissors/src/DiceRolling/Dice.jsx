import React from 'react';

const Die = ({ face }) => {
  // Calculate the number of rows needed
  const rows = Math.ceil(face / 3);

  // Generate an array of arrays to represent rows and columns of dots
  const dotsArray = Array.from({ length: rows }, (_, rowIndex) => {
    const dotsInRow = Math.min(3, face - (rowIndex * 3)); // Calculate the number of dots in this row
    return Array.from({ length: dotsInRow }, (_, colIndex) => <div key={colIndex} className="dot"></div>);
  });

  // Styles for the dice container
  const containerStyle = {
    width: '100px', // Fixed width for the dice
    height: '100px', // Fixed height for the dice
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid black',
    borderRadius: '10px',
    backgroundColor: 'blue', // Blue background color for the dice
    margin: '10px',
    padding: '10px',
    overflow: 'hidden', // Hide overflow if dots exceed container size
  };

  // Styles for the dots
  const dotStyle = {
    width: '20px',
    height: '20px',
    backgroundColor: 'white', // White color for the dots
    borderRadius: '50%', // Circular shape for the dots
    margin: '2px', // Reduced margin between dots
  };

  return (
    <div style={containerStyle}>
      {dotsArray.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
          {row.map((dot, colIndex) => (
            <div key={colIndex} style={dotStyle}></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Die;
