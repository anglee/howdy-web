# ES2015, Modules, SPA?
I decided to just use ES2015 JS syntax for this take home exercise and didn’t use Babel, webpack or any CSS precompiled or prefixes to keep it simple and assuming modern browsers should have decent support of es2015. If this is for production and need to support older browsers, I’d use Babel, webpack, to produce the final build.

I checked the Blue Apron website and found the wine info pages are opened in a separate tab, so I copied the behavior and didn’t make this a single page app. index.html is the main page and uses mainPage.js, the wine.html shows wine info and uses wineInfo.js. For main page, I break the app into components: Navigation, RecipeGroup and Recipe. I used the global namespace as the communication layer. I understand globals should be avoided, but again, I want to keep the solution simple and adding noises that could come from tooling like using webpack and thus chose not to use any module style like AMD or CommonJS.


# Get Recipes
For getting recipes asynchronously from the API, I want to point out a couple things I did and considered:

- I used jQuery $.get because jQuery was used much in other parts of the app anyway. But for projects that doesn’t use jQuery, I think the new fetch API is becoming the standard way.
- Upon the data is arrived, it immediately filtered so the unused fields can be garbage collected. In reality, I'd take advantage of GraphQL so only used data are transferred.
- The getRecipes function is memorized by the key composed of plan and week. This reduce the additional downloads of the same data. This might not be necessary because browser could do some caching itself. Another thing I considered but end up not implement is to clear the cache because the cache needs to be cleared when users load a lot of recipes, assuming in the normal case a user will only checking out a handful of plan/week combination and each list is small(especially we are keeping only the fields we use). If this is proven to be a problem in testing, adding cache clearing should be easy.
- Because the async nature, there could be the case that a user switch among plans/weeks quickly before the list is loaded or the results are displayed. I though about disabling the button and add ‘loading’ spinner, but that might not be the best UX. The alternative is to cancel the previous request and upon recipes arrival, check if it is for the last request, and only if it is, update the view. cancellable promise is still being reviewed by TC39. If I have more time, I will try to address this, but for now I would considered it to be corner case so I didn’t address it.

# Styling
I didn’t spend much time on styling the page, I simply use the styles in the provided examples. If I have more time, I’d probably spend some effort there.

# Extra credit
I implemented the extra credit but keeping the browser location hash always sync with the selected plan and week in the app state.