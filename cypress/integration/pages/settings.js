export { settings }

const settings = {
    settingsMenuLogout: "//*[contains(@class,'settings-menu-item')]//*[contains(@aria-label,'Log Out')]",
    settingsMenuLogoutArrow: "//*[contains(@class,'settings-menu-item')]//*[contains(@aria-label,'Log Out')]//img[@alt='arrow']",
    changeYourFavoriteTeam: "//*[contains(@class,'settings-menu-item')]//*[contains(@aria-label,'Change Your Favorite Team')]",
    changeYourFavoriteTeamArrow: "//*[contains(@class,'settings-menu-item')]//*[contains(@aria-label,'Change Your Favorite Team')]//img[@alt='arrow']",
    selectTeamsToFollow: "//*[contains(@class,'settings-menu-item')]//*[contains(@aria-label,'Select Teams To Follow')]",
    selectTeamsToFollowArrow: "//*[contains(@class,'settings-menu-item')]//*[contains(@aria-label,'Select Teams To Follow')]//img[@alt='arrow']",
    hideSpoilers: "//*[contains(@class,'settings-menu-item')]//*[contains(@aria-label,'Hide Spoilers')]",
    settingsMenuHideSpoilersStatus: "//*[contains(@class,'settings-menu-item')]//*[contains(@aria-label,'Hide Spoilers')]//*[contains(@class,'settings-menu-item-value')]",
    autoplayLiveFeaturedGame: "//*[contains(@class,'settings-menu-item')]//*[contains(@aria-label,'Autoplay Live Featured Game')]",
    settingsMenuAutoplayLiveFeaturedGameStatus: "//*[contains(@class,'settings-menu-item')]//*[contains(@aria-label,'Autoplay Live Featured Game')]//*[contains(@class,'settings-menu-item-value')]",
    closedCaptions: "//*[contains(@class,'settings-menu-item')]//*[contains(@aria-label,'Closed Captions')]",
    settingsMenuClosedCaptionsStatus: "//*[contains(@class,'settings-menu-item')]//*[contains(@aria-label,'Closed Captions')]//*[contains(@class,'settings-menu-item-value')]",
    termsOfServiceAndPrivacyPolicy: "//*[contains(@class,'settings-menu-item')]//*[contains(@aria-label,'Terms of Service and Privacy Policy')]",
    contactMLBSupport: "//*[contains(@class,'settings-menu-item')]//*[contains(@aria-label,'Contact MLB Support')]",
    settingsMenuContactMLBSupportArrow: "//*[contains(@class,'settings-menu-item')]//*[contains(@aria-label,'Contact MLB Support')]//img[@alt='arrow']",
    menuInfoText: "//*[contains(@class,'mlb-settings-info-text')]",
    loginHighlighted: '[class^="button settings-menu-button selected"]',
}

