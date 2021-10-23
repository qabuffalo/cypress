Feature: target

    Background: Visit target hoem page
        Given I visit target home page
        Then Title will appear
        
    @mogasmoke
    Scenario Outline: Search on target home page
        Given I am in Tagret Home page
        When I click search button
        And I type '<Product>'

        Examples:
            | Product |
            | Books   |
            | Shoes   |
            | Pants   |

<<<<<<< Updated upstream:cypress/integration/features/search.feature
=======
    Scenario: Click on categories tab
        Given I am in Tagret Home page
        When I click categories tab
        Then I click on Main Menu option

    Scenario: Login
        Given I am in Tagret Home page
        When I click login
        And I click on Sign-in button
        Then I will be taken to to Sign-in page
        And I will enter username
        And I will enter password
        Then I will click Enter


    Scenario: Create account
        Given I am in Tagret Home page
        When I click create account
>>>>>>> Stashed changes:cypress/integration/features/target.feature
        