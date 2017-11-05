(function (global) {

  const {_, $, utils} = global;

  const template = `<div class="row">
        <div class="col-md-4 col-md-offset-2">
          <ul class="nav nav-pills plan-list">
          </ul>
        </div>

        <div class="col-md-4">
          <select class="form-control week-select">
          </select>
        </div>
      </div>`;

  class Navigation {
    constructor({
      planTypes,
      weekOptions,
      initialValues,
      onPlanSelected,
      onWeekSelected
    }) {
      this.$root = $(_.template(template)());

      this.$planList = this.$root.find('.plan-list');
      _.forEach(planTypes, (plan) => {
        const $listItem = $(`<li><a id="${plan.id}">${plan.name}</a></li>`);
        if (plan.id === initialValues.plan.id) {
          $listItem.addClass('active');
        }
        this.$planList.append($listItem);
      });

      this.$weekSelect = this.$root.find('.week-select');
      _.forEach(weekOptions, (weekOption) => {
        const $option = $(`<option value="${weekOption}">${weekOption}</option>`);
        this.$weekSelect.append($option);
      });

      this.$planList.on('click', 'a', function (event) {
        event.preventDefault();
        const planId = $(this).attr('id');
        onPlanSelected(planId);
      });

      this.$weekSelect.change(function () {
        const value = $(this).val();
        onWeekSelected(value);
      });
      this.$weekSelect.val(initialValues.weekOption);

      this.planTypes = planTypes;
    }

    get$Root() {
      return this.$root;
    }

    setSelectedPlan(plan) {
      _.forEach(this.planTypes, (p) => {
        const $e = this.$planList.find(`a#${p.id}`).closest('li');
        if (p.id === plan.id) {
          $e.addClass('active');
        } else {
          $e.removeClass('active');
        }
      });
    }
  }

  global.Navigation = Navigation;

})(window);