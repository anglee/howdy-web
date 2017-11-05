(function (global) {

  const {_, $, utils} = global;

  const template =`
  <div class="container">
    <div class="content-wrap">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <div class="wine">
            <h2 class="wine__title text-center">
              <img class="mr-10" src="./assets/images/icon-wine-lg.png" alt="">
              <%= name %> <%= varietals[0].name %> <%= year %>
            </h2>

            <div class="row">
              <div class="col-md-4 text-center">
                <img class="wine-modal__image" src="<%= bottle_image_url %>" alt="<%= name %>">
              </div>

              <div class="col-md-8">
                <h4>Description</h4>
                <p><%= description %></p>

                <div class="fun-fact">
                  <h4 class="fun-fact__title">Fun Fact</h4>
                  <p><%= fun_facts %></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  const getWineInfo = (wine_pairing_id) => {
    return new Promise((resolve, reject) =>{
      $.get(`/api/product_pairings/${wine_pairing_id}`, (data) => {
        resolve(_.get(data, 'product_pairings.0.paired_product.producible.wine'));
      }).fail(err => {
        console.error(err);
        reject(err);
      });
    });
  };
  const renderWhenDomIsReady = ($element) => {
    $(function () {
      $('#root').append($element);
    });
  };

  const wineId = utils.getParameterByName('id');
  if (wineId != null) {
    getWineInfo(wineId).then((wineInfo) => {
      document.title = _.template('<%= name %> <%= varietals[0].name %> <%= year %>')(wineInfo);
      renderWhenDomIsReady($(_.template(template)(wineInfo)));
    }, (err) => {
      renderWhenDomIsReady($(`<h1>Cannot find pair wine: ${wineId}}</h1>`));
    });
  } else {
    renderWhenDomIsReady($('<h1>Wine ID was not provided</h1>'));
  }

})(window);