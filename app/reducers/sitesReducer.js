const siteReducer = (state={}, action) => {
   switch (action.type) {
    case 'SITES_ALL':
      return {sites: action.obj};
    default:
      return state;
  }
}

export default siteReducer;
