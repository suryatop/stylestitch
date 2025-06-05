import React from 'react';
import './Items.css'; // Make sure this path is correct

const Item = ({ id, name, image, productUrl, new_price, old_price, category }) => {
  // Check if the item belongs to a closet category
  const isMensClosetItem = category === 'mens_closet';
  const isWomensClosetItem = category === 'womens_closet';
  const isKidsClosetItem = category === 'kids_closet';

  // Handle click event
  const handleClick = (e) => {
    if (isMensClosetItem || isWomensClosetItem || isKidsClosetItem) {
      e.preventDefault(); // Prevent the default action of the link
    }
  };

  return (
    <div className='item'>
      <img src={image !== '-' ? image : 'https://via.placeholder.com/210'} alt={name} /> {/* Add placeholder if image is missing */}
      {/* Conditionally render the link based on the category */}
      {isMensClosetItem || isWomensClosetItem || isKidsClosetItem ? (
        <h3 onClick={handleClick}>{name}</h3> // Handle click for closet items
      ) : (
        <a href={productUrl} className="item-link">
          <h3>{name}</h3>
        </a>
      )}
      {/* Only display prices for non-closet items */}
      {!(isMensClosetItem || isWomensClosetItem || isKidsClosetItem) && (
        <div className="item-prices">
          <p className="item-price-new">{new_price}</p> {/* Display new price */}
          {old_price && <p className="item-price-old">{old_price}</p>} {/* Conditionally display old price */}
        </div>
      )}
    </div>
  );
};

export default Item;