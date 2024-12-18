import PostReviewComponent from "../../src/components/PostReviewComponent";

describe("Component test for posting a review for a comicbook. Start by checking values to be empty, then fills the form and lastly confirming post by checking if message is visible.", () => {
  it("Mounts component and posting a review.", () => {
    cy.mount(<PostReviewComponent id={"1"} fetchWithId={cy.stub()} />);

    cy.get("[data-cy=open-accordion]").click();

    cy.get("[data-cy=username-input]").should("have.value", "");
    cy.get("[data-cy=content-input]").should("have.value", "");
    cy.get("[data-cy=review-rating]").should("have.value", "0");

    cy.get("[data-cy=username-input]").type("John Doe");
    cy.get("[data-cy=username-input]").should("have.value", "John Doe");
    cy.get("[data-cy=content-input]").type("Testing testing");
    cy.get("[data-cy=content-input]")
      .invoke("val")
      .should("contain", "testing");

    cy.get("[data-cy=review-rating]").select("4").should("have.value", "4");
    cy.get("[data-cy=submit-review]").click();
    cy.get("[data-cy=submit-success]")
      .should("exist")
      .and("contain", "Your review has been sent, have a nice day");
  });
});
