import React, { useContext } from 'react';
import './CSS/shopCatogory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Component/Assets/dropdown_icon.png';
import Item from '../Component/Items/Items';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  // Function to display the price with the ₹ symbol
  const displayPrice = (price) => `₹${price}`;

  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />
      <div className="shopcategory-indexShort">
        <p>
          <span>Showing 1-12</span> out of {all_product.length} products
        </p>

        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="Sort Icon" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          // Check for closet items that belong to the respective category (men, women, kids)
          const isMensClosetItem = item.category.includes('mens_closet') && props.category === 'men';
          const isWomensClosetItem = item.category.includes('womens_closet') && props.category === 'women';
          const isKidsClosetItem = item.category.includes('kids_closet') && props.category === 'kids';

          // Check if the item belongs to the respective closet or is a general product for the current category
          const isCurrentCategoryItem = props.category === item.category;

          // Display the item only if it matches the current category or closet category
          if (isCurrentCategoryItem || isMensClosetItem || isWomensClosetItem || isKidsClosetItem) {
            return (
              <div className="item" key={i}>
                <Item
                  id={item.id}
                  // If it's a closet item, display 'Present in your closet', otherwise display the actual name
                  name={isMensClosetItem || isWomensClosetItem || isKidsClosetItem ? 'Present in your closet' : item.name}
                  // Display image, fallback to placeholder if the image is missing
                  image={item.image !== '-' ? item.image : 'https://via.placeholder.com/210'}
                  productUrl={item.purl}
                  // Don't display price for closet items, display price for general items
                  new_price={isMensClosetItem || isWomensClosetItem || isKidsClosetItem ? '' : displayPrice(item.new_price)}
                  old_price={isMensClosetItem || isWomensClosetItem || isKidsClosetItem ? '' : displayPrice(item.old_price)}
                  category={item.category} // Pass the category prop
                />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
