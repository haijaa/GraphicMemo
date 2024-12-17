import AllComics from "../../src/components/AllComicView";
import { MemoryRouter } from "react-router-dom";

describe("<AllComics />", () => {
  beforeEach(() => {
    cy.viewport(2440, 1440);
    cy.intercept("GET", "http://localhost:3000/comics", {
      fixture: "MockedMag.json",
    }).as("getComic");

    cy.mount(
      <MemoryRouter>
        <AllComics />
      </MemoryRouter>
    );
  });

  it("Renders mocked data correctly so that the latest added comic is viewed in first place.", () => {
    cy.wait("@getComic");
    cy.get("p").should("contain", "Latest added");
    cy.get("#character").contains("Alex Typo 3").should("exist");
    cy.get("#character").contains("3").should("exist");
    cy.get("img").should("have.attr", "alt", "coverPic");
  });
});
