import _ from 'lodash';
import React from 'react';


const handleWinePairClicked = (wineId) => {
  window.open(`./wine.html?id=${wineId}`);
};

const Recipe = ({
  recipe
}) => {
  const {
    main_title: mainTitle,
    sub_title: subTitle,
    high_menu_thumb_url: image,
    vegetarian: isVegetarian,
    wine_pairing_id: wineId
  } = recipe;
  return (
    <div className="recipe">
      {isVegetarian ? <i className="icon-veg"></i> : null}
      <img className="recipe__img" src={`http:${image}`} alt={mainTitle} />

        <div className="recipe__description">
          <h2 className="recipe__title">{mainTitle}</h2>
          <h3 className="recipe__subtitle">{subTitle}</h3>
        </div>
        {
          wineId ? (
            <button className="btn btn-default" onClick={_.partial(handleWinePairClicked, wineId)}>
              <img className="icon-wine mr-5" src="./assets/images/icon-wine.png" alt="d" />
              {"View Wine Pairing"}
            </button>
          ) : null
        }
    </div>
  );
};

export default Recipe;