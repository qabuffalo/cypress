/** 
 * Aliases for hideous selectors can be placed here.
 */

export {games}

const games = {
  calendarDatePicker: '#main-scores-date-picker-button-calendar',
  mainScoresDatePicker : '#main-scores-date-picker',
  mainScoresDate : '#main-scores-date-picker [class="left-datepicker"]',
  datePreviousArrow: 'button[aria-label="Previous date"]',
  dateNextArrow: 'button[aria-label="Next date"]',
  gamesScoreTiles: '[class^="mlb-scores-cell"]',
  gamesScoreFirstTile: '[class^="adk-grid-base"] [class^="mlb-scores-row"]:nth-child(1) [class^="mlb-scores-cell"]:nth-child(1)',
  gamesScoreTileLogo: '[class^="adk-grid-base"] [class^="mlb-scores-row"]:nth-child(1) [class^="mlb-scores-cell"]:nth-child(1) [class="tile-score-header-team"]:nth-child(1) .tile-score-header-team-logo',
  gamesScoreTileLabel: '[class^="adk-grid-base"] [class^="mlb-scores-row"]:nth-child(1) [class^="mlb-scores-cell"]:nth-child(1) [class="tile-score-header-team"]:nth-child(1) [class^="tile-score-header-team-label"]',
  gamesScoreTileFeedSelectorModal: '.feed-selector-feeds',
  gamesScoreTileFeedContentText: '[class="no-feeds-text"]',
  gamesScoreTileFeedTeamAway: '[class="feed-selector"] [class="feed-select-header-team away"]',
  gamesScoreTileFeedTeamHome: '[class="feed-selector"] [class="feed-select-header-team home"]',
  gamesScoreTileFeedTeamScore: '[class="feed-selector"] [class="feed-select-header-state-score"]',
  gamesScoreTileCalendrCell: '[class^="adk-grid-base"] [class^="mlb-calendar-row"]:nth-child(1) [class^="mlb-calendar-cel"]:nth-child(1)',
  gamesScoreTileCalendrCellDay: '[class^="adk-grid-base"] [class^="mlb-calendar-row"]:nth-child(1) [class^="mlb-calendar-cel"]:nth-child(1) [class="tile-calendar-today-flag"]',
  gamesScoreTileCalendrCellVenueIndicator: '[class^="adk-grid-base"] [class^="mlb-calendar-row"]:nth-child(1) [class^="mlb-calendar-cel"]:nth-child(1) [class="tile-calendar-venue-indicator text"]',
  gamesScoreTileCalendarLogo: '[class^="adk-grid-base"] [class^="mlb-calendar-row"]:nth-child(1) [class^="mlb-calendar-cel"]:nth-child(1) [class="tile-calendar-logo"]',
  gamesScoreTileCalendarDay: '[[class="calendar-grid-header"] :nth-child(1)[class^="calendar-grid-header-weekday"]',
  gamesTeamDropDownMenu: '[class="mlb-dropdown-item"]',
  gamesTeamLogoInDropDownMenu: '[class="mlb-dropdown-item"]:nth-child(1) .mlb-team-selector-logo',
  gamesTeamNameDropDownMenu: '[class="mlb-dropdown-item"]:nth-child(1) .mlb-team-selector-name',
  gamesTeamDropDownMenu: '[class="mlb-dropdown-item"]'

}