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