describe("A test that goes through the whole site and see if everything can be found.", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("Visits site and find images", () => {
    cy.get("[data-cy=img-dc]");
    cy.get("[data-cy=img-marvel]");
  });

  it("Looks for list with latest comments and validates the length to allways be 3.", () => {
    cy.get("[data-cy=latest-reviews-table]").should("exist");
    cy.get("[data-cy=reviews-container]").children().should("have.length", 3);
  });

  it("Find all comics list and checks for value of length.", () => {
    cy.get("[data-cy=latest-all-comics-table]").should("contain", "All");
    cy.get('[data-cy="container-comics-list"]')
      .children()
      .then((children) => {
        const length = children.length;
        cy.log(`Number of comics ${length}`);
      });
  });

  it("Finds Add Comic, clicks modal appears and clicks close and it disappears.", () => {
    cy.get("[data-cy=open-modal]").click();
    cy.get("[data-cy=icon-image]").should("exist");
    cy.get("[data-cy=close-modal]").click();
  });
});
