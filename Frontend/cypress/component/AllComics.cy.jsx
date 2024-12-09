import AllComics from "../../src/components/AllComicView";

describe("<AllComics />", () => {
  it("Mounts AllComics component, looking for 2 titles and clicks review button.", () => {
    cy.viewport(2440, 1440);
    cy.mount(<AllComics />);

    cy.get("#writer").should("contain", "Scott Snyder");
    cy.get("#title").should("contain", "BATMAN: CITY OF OWLS");
    cy.get("#togglecomments").click();
  });
});
