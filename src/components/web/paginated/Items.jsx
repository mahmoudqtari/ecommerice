import React from 'react'

function Items({ currentItems }) {
    return (
        <>
          {currentItems &&
            currentItems.map((item) => (
              <div>
                <h3>Item #{item}</h3>
              </div>
            ))}
        </>
      );
}

export default Items