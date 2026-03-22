import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Delight in Every Bite</h1>
      <p className="explore-menu-text">
        Discover our handpicked dishes, crafted to satisfy every craving. Taste
        the perfect blend of flavor, freshness, and culinary passion in every
        meal.
      </p>

      <div className="explore-menu-list">
        {menu_list.map((menu, index) => (
          <div
            key={index}
            className="explore-menu-list-item"
            onClick={() =>
              setCategory((prev) =>
                prev === menu.menu_name ? "All" : menu.menu_name,
              )
            }
          >
            <img
              className={category === menu.menu_name ? "active" : ""}
              src={menu.menu_image}
              alt={menu.menu_name}
            />
            <p>{menu.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
