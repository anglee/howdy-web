import apiService from '../utils/apiService';
const ActionTypes = {};
[
  'SET_SELECTED_PLAN',
  'SET_SELECTED_WEEK',
  'SET_RECIPES'
].forEach((it) => {
  ActionTypes[it] = it;
});

const updateRecipes = (plan, week, dispatch) => {
  apiService.getRecipes(plan, week)
    .then((recipes) => {
      dispatch({
        type: ActionTypes.SET_RECIPES,
        recipes
      });
    });
};

const actions = {
  setPlan: (plan) => {
    return (dispatch, getState) => {
      dispatch({
        type: ActionTypes.SET_SELECTED_PLAN,
        selectedPlan: plan
      });
      dispatch({
        type: ActionTypes.SET_RECIPES,
        recipes: []
      });
      const {selectedWeek: week} = getState();
      updateRecipes(plan, week, dispatch);
    };
  },
  setWeek: (week) => {
    return (dispatch, getState) => {
      dispatch({
        type: ActionTypes.SET_SELECTED_WEEK,
        selectedWeek: week
      });
      dispatch({
        type: ActionTypes.SET_RECIPES,
        recipes: []
      });
      const {selectedPlan: plan} = getState();
      updateRecipes(plan, week, dispatch);
    };
  }
};

export {
  ActionTypes,
  actions
};
