import _ from 'lodash';
import {connect} from 'react-redux';
import RecipeGroup from '../components/RecipeGroup.jsx';
import {actions} from '../actions/actions';

function mapStateToProps(state) {
  return {
    columnCount: state.selectedPlan.columnCount,
    recipes: state.recipes,
    pageTitle: `${state.selectedPlan.name} for the Week of ${state.selectedWeek}`
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(RecipeGroup);