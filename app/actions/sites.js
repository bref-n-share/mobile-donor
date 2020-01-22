export const sitesAll = (sites) => ({
  type: 'SITES_ALL',
  obj: sites,
});

export const sitesFavorite = (sites) => ({
  type: 'SITES_FAVORITE',
  obj: sites,
});

export const siteUpdate = (site) => ({
  type: 'SITE_UPDATE',
  obj: site,
});
