Feature: Adding comicbook to library/read via component AddComic.

User clicks the button "Add comic". A modal component opens, user enters all required fields.
And presses the "Add" button. Sends confirmation to the UI, modal closes and you can see updated library with the latest entry.

Scenario: Adding to read library
    Given Im on the page with the AddComic component
    When Im clicking on Add comic and enters all fields then clicks Add
    Then Toast with confirmation appears for 3 seconds, then modal closes and see library with latest entry