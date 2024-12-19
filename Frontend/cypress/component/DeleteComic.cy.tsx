import ManageComics from "../../src/pages/ManageComics";

describe("Componenttesting for managing and specifically deleting comic.", () => {
  it("Should add comic HellBlazer then delete it", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/comics/post",
      body: {
        title: "JOHN CONSTANTINE, HELLBLAZER: DEAD IN AMERICA",
        description: "XXX",
        issue: 1,
        character: "HellBlazer",
        author: "XXX",
        publisher: "DC",
        released: 2024,
        imagecover: "XXX",
      },
    });

    cy.mount(<ManageComics />);

    cy.get("[data-cy=comic-item]")
      .first()
      .should("contain", "JOHN CONSTANTINE")
      .find("[data-cy=delete-button]")
      .click();

    cy.get("[data-cy=comic-item]")
      .first()
      .should("not.contain", "JOHN CONSTANTINE");
  });
});
