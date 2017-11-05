import React from 'react';
import Recipe from './Recipe.jsx';
import classnames from 'classnames';

const getRowNumer = (columnCount, index) => {
  console.log('getRowNumer', columnCount, index);
  return _.floor(index / columnCount);
};
const RecipeGroup = ({
  columnCount,
  pageTitle,
  recipes
  }) => {
  const gridColumnCount = 12;
  const columnWidth = gridColumnCount / columnCount;
  const rows = [];
  recipes.forEach((it, i) => {
    if (i % columnCount === 0) {
      rows.push([]);
    }
    _.last(rows).push(it);
  });
  const Rows = _.map(rows, (row, i) => {
    return (
      <div className="row" key={i}>
        {
          _.map(row, (recipe, j) => (
            <div className={classnames('col-md-4', {'col-md-offset-2': columnCount === 2 && j === 0})}
                 key={recipe.recipe.id}>
              <Recipe recipe={recipe.recipe}/>
            </div>))
        }
      </div>);
  });

  return (
    <div class="recipe-group">
      <h1 class="page-title">{pageTitle}</h1>
      {Rows}
    </div>
  );
};

export default RecipeGroup;