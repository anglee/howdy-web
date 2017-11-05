import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

const App = ({
  name,
  varietals,
  year,
  image_url,
  image_alt_text,
  description,
  fun_facts
}) => {
  return (
    <div className="container">
      <div className="content-wrap">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="wine">
              <h2 className="wine__title text-center">
                <img className="mr-10" src="./assets/images/icon-wine-lg.png" alt="" />
                {name} {varietals[0].name} {year}
              </h2>

              <div className="row">
                <div className="col-md-4 text-center">
                  <img className="wine-modal__image" src={bottle_image_url} alt={name} />
                </div>

                <div className="col-md-8">
                  <h4>Description</h4>
                  <p>{description}</p>

                  <div className="fun-fact">
                    <h4 className="fun-fact__title">Fun Fact</h4>
                    <p>{fun_facts}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const getParameterByName = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

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

const wineId = getParameterByName('id');
const root = document.getElementById('root');
if (wineId) {
  getWineInfo(wineId)
    .then((wineInfo) => {
      ReactDOM.render(<App {...wineInfo}/>, root);
    }, (err) => {
      ReactDOM.render(<h1>{`Cannot find pair wine: ${wineId}`}</h1>, root);
    });
} else {
  ReactDOM.render(<h1>Wine ID was not provided</h1>, root);
}


