Feature: Add Employee functionality

  Scenario Outline: Verify add employee with bAsic details

    Given User Launch the Application
    When  User enter username "Admin" and password "admin123"
    And User clicks on login button
    Then User should be navigated to dashboard page
    When user clicks on PIM menu
    And User clicks on Add employee submenu
    And User enter firstname "<firstname>" and lastname "<lastname>"
    And User clicks on Save button
    Then Employeee should be created
    Examples:
      | firstname | lastname |
      | Bhavya    | M        |
      | Shashank  | Abc      |
      | Durga     | Prasad   |