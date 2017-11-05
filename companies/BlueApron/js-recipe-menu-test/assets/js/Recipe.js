(function (global) {

  const {_, $, utils} = global;

  const template =`
      <div class="recipe">
        <% if (isVegetarian) { %>
          <i class="icon-veg"></i>
        <% } %>
        <img class="recipe__img" src="<%= imageUrl %>" alt="<%= mainTitle %>" />

        <div class="recipe__description">
          <h2 class="recipe__title"><%= mainTitle %></h2>
          <h3 class="recipe__subtitle"><%= subTitle %></h3>
        </div>

        <% if (wineId != null) { %>
          <button class="btn btn-default">
            <img class="icon-wine mr-5" src="./assets/images/icon-wine.png" alt="" />
            View Wine Pairing
          </button>
        <% } %>
      </div>`;

  class Recipe {
    constructor({recipe}) {
      const {
        vegetarian: isVegetarian,
        high_menu_thumb_url: imageUrl,
        main_title: mainTitle,
        sub_title: subTitle,
        wine_pairing_id: wineId
      } = recipe;

      this.$root = $(_.template(template)({
        isVegetarian,
        imageUrl,
        mainTitle,
        subTitle,
        wineId
      }));

      if (wineId != null) {
        this.$root.find('.btn').click(function() {
          window.open(`./wineInfo.html?id=${wineId}`);
        });
      }
    }

    get$Root() {
      return this.$root;
    }
  }

  global.Recipe = Recipe;

})(window);