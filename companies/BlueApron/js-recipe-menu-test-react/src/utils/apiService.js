//import fetch from 'isomorphic-fetch';
import _ from 'lodash';
import PlanTypes from '../constants/PlanTypes';

//const httpGetJson = (url) => fetch(url, {
//  method: 'get',
//  credentials: 'same-origin'
//}).then((response) => response.json());

const apiService = {
  getRecipes: (plan, week) => {
    return new Promise((resolve, reject) => {
      $.get(`/api/recipes/${plan.id}/${_.snakeCase(week)}`, (data) => {
        resolve(_.get(data, `${plan.id}_plan.recipes`));
      }).fail(err => { console.error(err); });
    });
  }
};

export default apiService;