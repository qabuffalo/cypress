Feature: target

    Background: Visit target hoem page
        Given I visit target home page
        Then Title will appear
    Scenario Outline: Search on target home page
        Given I am in Tagret Home page
        When I click search button
        And I type '<Product>'

        Examples:
            | Product |
            | Books   |
            | Shoes   |
            | Pants   |

    Scenario: Click on categories tab
        Given I am in Tagret Home page
        When I click categories tab
        Then I click on Main Menu option

    Scenario: Login
        Given I am in Tagret Home page
        When I click login
        