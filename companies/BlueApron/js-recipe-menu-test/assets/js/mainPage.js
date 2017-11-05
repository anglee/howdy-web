(function (global) {

  const {_, $, utils, Navigation, RecipeGroup} = global;
  const {mirrorEnum, whenDomIsReady, setLocationHash, getLocationHashTokens} = utils;

  const planTypes = {
    two_person: {
      id: 'two_person',
      name: 'Two Person Plan',
      pageLayout: '3-column'
    },
    family: {
      id: 'family',
      name: 'Family Plan',
      pageLayout: '2-column'
    }
  };

  // simulate getting week option asynchronous, because the available week options should
  // come from the server instead of being hard coded.
  const getWeekOptions = () => {
    return Promise.resolve(mirrorEnum(['2016-03-21', '2016-03-28']))
  };

  // get recipes
  //
  // Upon the data is arrived, it immediately filtered so the unused fields can be garbage
  // collected. In reality, I'd take advantage of GraphQL so only used data are transferred.
  //
  // The getRecipes function is memorized by the key composed of plan and week. This reduces
  // the additional downloads of the same data. This might not be necessary because browser could
  // already do some caching itself. Another thing I considered but end up not implement is to
  // clear the cache because the cache needs to be cleared when users load a lot of recipes,
  // assuming in the normal case a user will only checking out a handful of plan/week combination
  // and each list is small(especially we are keeping only the fields we use). If this is proven
  // to be a problem in testing, adding cache clearing should be easy.
  const getRecipes = _.memoize((plan, week) => {
    return new Promise((resolve, reject) => {
      $.get(`/api/recipes/${plan.id}/${_.snakeCase(week)}`, (data) => {
        const recipes = _.get(data, `${plan.id}_plan.recipes`)
          .map(it => _.pick(it.recipe, [
            'vegetarian',
            'high_menu_thumb_url',
            'main_title',
            'sub_title',
            'wine_pairing_id'
          ]));
        resolve(recipes);
      }).fail(err => { console.error(err); reject(err)});
    });
  }, (plan, week) => `${plan.id}_${week}`);

  /* If quick switching turned out to be an issue, add debounce like following to help,
   * To fix it ultimately, if I have more time, I will implement cancelling earlier request,
   * and only apply a response after checking that it was from the last recipes request.
   */
  //getRecipes = _.debounce(getRecipes, 500);


  const updateLocationHash = (plan, week) => {
    setLocationHash(plan.id, week);
  };

  Promise.all([
    getWeekOptions(),
    whenDomIsReady()
  ]).then(([weekOptions]) => {
    const appState = {
      selectedPlan: planTypes['two_person'],
      selectedWeek: weekOptions['2016-03-21']
    };

    const tokens = getLocationHashTokens();
    if (!_.isEmpty(tokens)) {
      const [planId, week] = tokens;
      appState.selectedPlan = planTypes[planId];
      appState.selectedWeek = week;
    } else {
      updateLocationHash(appState.selectedPlan, appState.selectedWeek);
    }

    const $root = $('#root');

    const onPlanSelected = (planId) => {
      const plan = planTypes[planId];
      navigation.setSelectedPlan(plan);
      appState.selectedPlan = plan;
      updateLocationHash(appState.selectedPlan, appState.selectedWeek);
      updateRecipeGroup(appState.selectedPlan, appState.selectedWeek);
    };
    const onWeekSelected = (week) => {
      appState.selectedWeek = week;
      updateLocationHash(appState.selectedPlan, appState.selectedWeek);
      updateRecipeGroup(appState.selectedPlan, appState.selectedWeek);
    };

    const updateRecipeGroup = (plan, week) => {
      if (appState.$RecipeGroup) {
        appState.$RecipeGroup.remove();
      }
      getRecipes(plan, week)
        .then((recipes) => {
          const $RecipeGroup = new RecipeGroup({
            layout: plan.pageLayout,
            pageTitle: `${plan.name} for the Week of ${week}`,
            recipes
          }).get$Root();

          $root.append($RecipeGroup);
          appState.$RecipeGroup = $RecipeGroup;
        });
    };

    const navigation = new Navigation({
      planTypes,
      weekOptions,
      onPlanSelected,
      onWeekSelected,
      initialValues: {
        plan: appState.selectedPlan,
        weekOption: appState.selectedWeek
      }
    });

    $root.append(navigation.get$Root());

    // apply initial state
    updateRecipeGroup(appState.selectedPlan, appState.selectedWeek);
  });

})(window);