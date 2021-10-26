Feature: Create Account

    Background: Visit target hoem page
        Given I visit target home page
        Then Title will appear
        
    @accountsmoke   
    Scenario Outline: Create account
        When I click account icon in home page
        When I click on create account Link in home page
        Then I Enter '<Email>' address in the Email text box
        Then I Enter '<First name>' in the First name text box
        Then I Enter '<last name>'  in the last name text box
        Then I Enter '<Mobile phone number>' in the Mobile phone number text box
        Then I Enter '<Password>' in the Create Password text box
    
    Examples:
        | Email             | First name | last name |Mobile phone number|Password |
        | anayet@gmail.com  | Md         | Hossain   | 6463390393        |anayet123|
        | zaman@gamil.com   | Asad       | Zaman     | 716891234         |zaman456 |
        | Taif@gmail.com    | Taif       | Mahmod    | 917567432         |Taif987  |
    
    
    #@accountsmoke
    #Scenario: Create account
        # When I click account icon in home page
        # When I click on create account Link in home page
        # Then I Enter Email address in the Email text box
        # Then I Enter First name in the First name text box
        # Then I Enter last name  in the last name text box
        # Then I Enter Mobile phone number in the Mobile phone number text box
        # Then I Enter Password in the Create Password text box