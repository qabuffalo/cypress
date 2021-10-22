/** 
 * Aliases for hideous selectors can be placed here.
 */

export {favorites}

const favorites = {
  favoriteTeam: '//div[@class="mlb-favorites-team-name" and text()="Baltimore Orioles"]',
  next: 'button[aria-label^="Next"]',
  done: 'button[aria-label^="Done"]',
  continue: '.mlb-onboarding-tile-label',
  yankeesTeam: '[class^="mlb-favorites-cell"] [aria-label^="American League East, New York Yankees,"]',
  redsoxTeam:'[class^="mlb-favorites-cell"] [aria-label^="American League East, Boston Red Sox,"]',
  metsTeam:'[class^="mlb-favorites-cell"] [aria-label^="National League East, New York Mets,"]',
}