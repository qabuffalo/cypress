export {calendar}

const calendar = {
  monthPreviousArrow:'[aria-label^=" Previous date"]',
  calendarMonth:'[aria-label^="Viewing calendar for"]',
  monthNextArrow:'[aria-label^=" Next date"]',
  datePicker:'#main-scores-date-picker-button-calendar',
  firstDayInMonthView: '[class^="calendar-grid-container"] [class^="mlb-calendar-row"]:nth-child(1) [class^="mlb-calendar-cell"]:nth-child(1)', 
  firstDayWithGames: '[class^="calendar-grid-container"] [class^="mlb-calendar-row"]:nth-child(1) [class^="mlb-calendar-cell"]:nth-child(1) [class^="tile-calendar-game-count text"]',
}