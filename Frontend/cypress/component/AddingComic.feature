Feature: Adding comicbook to library/read.

User clicks the button "Add comic". A modal opens, user enters all required fields.
And presses the "Add" button. Sends confirmation to the UI, modal closes and updates library.

Scenario: Adding to read library
    Given Im on the website and the library shows X comics
    When Im clicking on Add comic and enters all fields then clicks Add
    Then Library is now updated with one more comicbook.