import AddComic from "../../src/components/AddComic";
import {
  When,
  Then,
  Given,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";

describe("Mount and render component AddComic", () => {
  Before(() => {
    cy.mount(<AddComic />);
  });

  Given("Im on the page with the AddComic component", () => {});
  When("Im clicking on Add comic and enters all fields then clicks Add", () => {
    cy.get("#openModal").click();
    cy.get("#addComicTitle").type("Batman: The Court of Owls (THE NEW 52)");
    cy.get("#addComicTitle").should(
      "have.value",
      "Batman: The Court of Owls (THE NEW 52)"
    );
    cy.get("#addComicDescription").type(
      "#1 New York Times Bestseller! Following his ground-breaking, critically acclaimed run on Detective Comics, writer Scott Snyder (American Vampire) alongside artist Greg Capullo (Spawn) begins a new era of The Dark Knight with the relaunch of Batman as a part of DC Comics — The New 52!"
    );
    cy.get("#addComicIssue").type("1");
    cy.get("#addComicCharacter").type("Batman");
    cy.get("#addComicAuthor").type("Scott Snyder");
    cy.get("#addComicPublisher").type("DC");
    cy.get("#addComicReleased").type("2013");
    cy.get("#addComicImage").type(
      "https://static.dc.com/dc/files/default_images/978-1-4012-3541-3.jpg?w=640"
    );
    cy.get("#addComicButton").click();
  });
  Then(
    "Toast with confirmation appears for 3 seconds, then modal closes.",
    () => {}
  );
});
