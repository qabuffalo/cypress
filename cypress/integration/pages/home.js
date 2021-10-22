/** 
 * Aliases for hideous selectors can be placed here.
 */

export { home }

const home = {

  //main menu
  mainMenu:'#main-menu',
  mlbLogo:'#main-menu [class^="MLBLogo"]',
  home: '#home-link',
  games: '#games-link',
  login: '#login-button',
  getMLBTV: '#paywall-button',
  settings: '#settings-link',
  settingsTeamLogo: '#settings-link [class^="TeamLogo"]',


  //hero tile
  heroTile: '#gameHero',
  heroTitle: '#videoHero [class^="Title"]',
  heroTimestamp: '#videoHero [class^="TimeStamp"]',
  heroDate: '#videoHero [class^="Date"]',
  heroDescription: '#videoHero [class^="Description"]',
  videoHeroButton: '#videoHero #video-hero-button',
  videoHeroLockIcon: '#videoHero #video-hero-button [class^="LockIcon"]',

  //game tile
  gameTile: '#games',
  gamesTitle: '#games #games-title',
  gamesFirstTile: '#games #mlb-video-list-title',
  gamesTeam1Logo: '#games #games-list div:nth-child(1) [id^="games"] [class^="Header"] div:nth-child(1) [class^="TeamLogo"]',
  gamesTeam1Logo: '#games #games-list div:nth-child(1) [id^="games"] [class^="Header"] div:nth-child(3) [class^="TeamLogo"]',
  gamesTeam1NameAbbreviation: '#games #games-list div:nth-child(1) [id^="games"] [class^="Header"] div:nth-child(1) [class^="Label__Abbreviation"]',
  gamesTeam1NameAbbreviation: '#games #games-list div:nth-child(1) [id^="games"] [class^="Header"] div:nth-child(3) [class^="Label__Abbreviation"]',
  gamesLockIcon:'#games #games-list div:nth-child(1) [id^="games"] [class^="Header"] [class^="LockIcon"]',


  //video tile
  videoTile: '#mlb-video-list',
  videoListTile: '#mlb-video-list #mlb-video-list-title',
  videoTileImage: '#mlb-video-list #mlb-video-list-list div:nth-child(1) [class^="VideoTile"] [class^="Image"]',
  videoDuration: '#mlb-video-list #mlb-video-list-list div:nth-child(1) [class^="VideoTile"] [class^="Timestamp"]',
  videoTitle: '#mlb-video-list #mlb-video-list-list div:nth-child(1) [class^="VideoTile"] [class^="Title"]',
  videoDate: '#mlb-video-list #mlb-video-list-list div:nth-child(1) [class^="VideoTile"] [class^="Date"]',
  videoDescription: '#mlb-video-list #mlb-video-list-list div:nth-child(1) [class^="VideoTile"] [class^="Description"]',


  //svod tile
  svodTile: '#mlbtv-featured-svod-video-list',
  svodListTile: '#mlbtv-featured-svod-video-list #mlbtv-featured-svod-video-list-title',
  svodTileImage: '#mlbtv-featured-svod-video-list div:nth-child(1) [class^="VideoTile"] [class^="Image"]',
  svodTileLockIcon: '#mlbtv-featured-svod-video-list div:nth-child(1) [class^="VideoTile"] [class^="LockIcon"]',
  svodTileDuration: '#mlbtv-featured-svod-video-list div:nth-child(1) [class^="VideoTile"] [class^="Timestamp"]',
  svodTileTitle: '#mlbtv-featured-svod-video-list div:nth-child(1) [class^="VideoTile"] [class^="Title"]',
  svodTileDate: '#mlbtv-featured-svod-video-list div:nth-child(1) [class^="VideoTile"] [class^="Date"]',
  svodTileDescription: '#mlbtv-featured-svod-video-list div:nth-child(1) [class^="VideoTile"] [class^="Description"]',

}