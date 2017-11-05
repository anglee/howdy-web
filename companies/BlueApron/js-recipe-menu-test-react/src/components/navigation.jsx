import _ from 'lodash';
import React from 'react';
import classnames from 'classnames';
import PlanTypes from '../constants/PlanTypes';

const Navigation = ({
  weekOptions,
  selectedPlan,
  selectedWeek,
  onPlanSelected,
  onWeekSelected
  }) => {
  const planItems = _.map(PlanTypes, plan => {
    const {id, name} = plan;
    return (
      <li className={classnames({active: selectedPlan.id === id})} key={id}>
        <a onClick={_.partial(onPlanSelected, plan)}>{name}</a>
      </li>
    );
  });
  const options = weekOptions.map(option => <option value={option} key={option}>{option}</option>);
  return (
    <div className="row">
      <div className="col-md-4 col-md-offset-2">
        <ul className="nav nav-pills">
          {planItems}
        </ul>
      </div>

      <div class="col-md-4" value="A" onChange={(event) => {
        const week = event.target.value;
        onWeekSelected(week);
      }}>
        <select className="form-control">
          {options}
        </select>
      </div>
    </div>
  );
};

export default Navigation;