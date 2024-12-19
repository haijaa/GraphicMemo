import {
  When,
  Then,
  Given,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";

  Before(() => {
    cy.viewport(1000, 1000)
    cy.visit("http://localhost:5173/");
  })
  
  Given("Im on the page with the AddComic component and can see the button", () => {
    cy.get('p').should('contain', 'Add comic')
  });
  When("Im clicking on Add comic and enters all fields then clicks Add", () => {
    cy.get("[data-cy=open-modal]").click();
    cy.get("[data-cy=comic-title]").type("Batman: The Court of Owls (THE NEW 52)");
    cy.get("[data-cy=comic-title]").should(
      "have.value",
      "Batman: The Court of Owls (THE NEW 52)"
    );
    cy.get("[data-cy=comic-description]").type(
      "#1 New York Times Bestseller! Following his ground-breaking, critically acclaimed run on Detective Comics, writer Scott Snyder (American Vampire) alongside artist Greg Capullo (Spawn) begins a new era of The Dark Knight with the relaunch of Batman as a part of DC Comics — The New 52!"
    );
    cy.get("[data-cy=comic-issue]").type("1");
    cy.get("[data-cy=comic-character]").type("Batman");
    cy.get("[data-cy=comic-author]").type("Scott Snyder");
    cy.get("[data-cy=comic-publisher]").type("DC");
    cy.get("[data-cy=comic-released]").type("2013");
    cy.get("[data-cy=comic-coverimage]").type(
      "https://static.dc.com/dc/files/default_images/978-1-4012-3541-3.jpg?w=640"
    );
    cy.get("[data-cy=comic-add-comic-button]").click();
  });
  Then(
    "Toast with confirmation appears for 3 seconds, then modal closes and see library with latest entry",
    () => {
      cy.get('[data-cy=success-toast]')
      .should('exist')
      .and('contain', 'Yayy!')
    }
  );

