(function (global) {

  const {_, $, utils, Recipe} = global;

  const template = `<div class="recipe-group">
      <h1 class="page-title"><%= pageTitle %></h1>
    </div>`;

  class LayoutColumn {

  }

  const getColumnCount = (layout) => {
    if (layout === '2-column') {
      return 2;
    } else if (layout === '3-column') {
      return 3;
    } else {
      throw new Error(`unknown layout: ${layout}`)
    }
  };

  class RecipeGroup {
    constructor({
      layout,
      pageTitle,
      recipes
    }) {
      this.$root = $(_.template(template)({
        pageTitle
      }));

      const rows = [];
      const columnCount = getColumnCount(layout);
      recipes.forEach((it, i) => {
        if (i % columnCount === 0) {
          rows.push([]);
        }
        _.last(rows).push(it);
      });

      rows.forEach((rowData, row) => {
        const $row = $('<div class="row"></div>');
        const columns = rowData;
        columns.forEach((columnData, col) => {
          const $column = $('<div class="col-md-4"></div>');
          if (columnCount === 2 && col === 0) {
            $column.addClass('col-md-offset-2');
          }
          const recipe = columnData;
          $column.append(new Recipe({recipe}).get$Root());
          $row.append($column);
        });
        this.$root.append($row);
      });
    }

    get$Root() {
      return this.$root;
    }
  }

  global.RecipeGroup = RecipeGroup;

})(window);