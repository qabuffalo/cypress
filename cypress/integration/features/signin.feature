Feature: User signs in succefully

    Background: Visit target hoem page
        Given I visit target home page
        Then Title will appear

    Scenario Outline: User clicks sign-in button
        Given I am in Target Home page
        When I click the login icon
        And I click on Sign-in button
        Then I will be taken to the Sign-in page
        When User enters '<username>'
        And User enters '<password>'
        Then I will click Enter

        Examples:
            | username         | password  |
            | anayet@gmail.com | anayet123 |
            | zaman@gamil.com  | zaman456  |
            | Taif@gmail.com   | Taif987   |

