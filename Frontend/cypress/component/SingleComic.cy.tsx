import SingleComic from "../../src/pages/SingleComic";

describe("<SingleComic />", () => {
  it("Getting a comic and replacing the data with my own mocked", () => {
    const id: number = 44;
    cy.intercept(
      {
        method: "GET",
        url: `http://localhost:3000/comics/${id}`,
      },
      {
        fixture: "SingleComicMocking.json",
      }
    ).as("GetComic");
    cy.mount(<SingleComic />);

    cy.wait("@GetComic");

    cy.get("#title").should("contain", "Revenge of TypeScripter");
  });
});
