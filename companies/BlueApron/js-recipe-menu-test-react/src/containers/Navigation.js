import _ from 'lodash';
import {connect} from 'react-redux';
import Navigation from '../components/Navigation.jsx';
import {actions} from '../actions/actions';

function mapStateToProps(state) {
  return {
    weekOptions: state.weekOptions,
    selectedPlan: state.selectedPlan,
    selectedWeek: state.selectedWeek
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onPlanSelected: (plan) => {
      dispatch(actions.setPlan(plan));
    },
    onWeekSelected: (week) => {
      dispatch(actions.setWeek(week));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);