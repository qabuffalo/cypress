Feature: target

    Background: Visit target hoem page
        Given I visit target home page
        Then Title will appear

    @regression
    Scenario: Click on categories tab
        Given I am in Tagret Home page
        When I click categories tab
        Then I click on Main Menu option

        