import AllComics from "../../src/components/AllComicView";
import { MemoryRouter } from "react-router-dom";

describe("<AllComics />", () => {
  beforeEach("Mounts component and set VP", () => {
    cy.viewport(2440, 1440);
    cy.mount(
      <MemoryRouter>
        <AllComics />
      </MemoryRouter>
    );
  });

  it("Checking to see that the top of site is working correctly", () => {
    cy.get("p").should("contain", "Latest added");
    cy.get("#character").contains("X-men").should("exist");
    cy.get("#character").contains("6").should("exist");
  });
});
