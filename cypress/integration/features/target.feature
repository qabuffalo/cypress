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




#     Then I see "MLB.TV on Web" in the title
#     When I select my favorite team with text "Cleveland Indians"
#     And I click next
#     And I click an element with text "Log In"
#     When I type "tvyearly@gmail.com" in email
#     And I type "Password1" in password
#     And I click login button
#     Then I should see "Successful Log In"
#     When I click an element with text "Get Started"

# Scenario: Autheenticated - Verify Calendar Month Dates/Events
#     When I visit "/scores"
#     Then I should see current date is correct
#     When I navigate to calendar button
#     Then I should see month previous arrow is displayed
#     And I should see calendar month is displayed
#     And I should see month next arrow is displayed
#     And I see the amount of games on date
#     Then I see and click 1st date tile
#     Then I verify the amount of games is same as displayed on calendar
#     Then I should see 1st game tile