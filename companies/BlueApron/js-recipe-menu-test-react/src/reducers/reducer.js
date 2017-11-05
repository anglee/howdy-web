import _ from 'lodash';
import {ActionTypes} from '../actions/actions';

const initialState = {
  weekOptions: ['2016-03-21', '2016-03-28'],
  selectedPlan: 'two_person',
  selectedWeek: '2016-03-21',
  recipes: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_SELECTED_PLAN:
    {
      return _.assign({}, state, {
        selectedPlan: action.selectedPlan
      });
    }
    case ActionTypes.SET_SELECTED_WEEK:
    {
      return _.assign({}, state, {
        selectedWeek: action.selectedWeek
      });
    }
    case ActionTypes.SET_RECIPES:
    {
      return _.assign({}, state, {
        recipes: action.recipes
      });
    }
    default:
    {
      return state;
    }
  }
};
