const siteReducer = (state={sites: []}, action) => {
  let newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case 'SITES_ALL':
      newState['sites'] = action.obj;
      return newState;

    case 'SITES_FAVORITE':
      newState.sites.forEach((site, index) => {
        site.isFavoris = false;
        if (action.obj.find(searchedSite => searchedSite.id === site.id)) {
          site.isFavoris = true;
        }
        newState.sites[index] = site;
      });

      return newState;

    case 'SITE_UPDATE':
      newState.sites.forEach((site, index) => {
        if (site.id === action.obj.id) {
          newState.sites[index] = action.obj;
        }
      });

      return newState;

    default:
      return state;
  }
}

export default siteReducer;
