import AllComics from "../../src/components/AllComicView";

describe("<AllComics />", () => {
  it("Mounts AllComics component, looking for 2 titles and clicks review button.", () => {
    cy.viewport(2440, 1440);
    cy.mount(<AllComics />);

    cy.get("p").should("contain", "Latest added");
    cy.get("#character").should("contain", "The Flash");
  });
});
