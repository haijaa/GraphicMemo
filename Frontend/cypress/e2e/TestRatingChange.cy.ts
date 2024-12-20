describe('Test rating view before and after.', () => {
    it('Full on test.', () => {
        cy.viewport(2440, 1440)
        cy.visit("http://localhost:5173/");

        let initialRating;
        cy.get('[data-cy=rating-box]')
        .first()
        .find('[data-cy=avg-rating]')
        .invoke('text')
        .then((text) => {
            initialRating = text
            cy.log(`Initial rating: ${initialRating}`)
        })

        cy.get('[data-cy=single-link]')
        .first()
        .click()
       

        cy.get('[data-cy=open-accordion]').click()
        cy.get('[data-cy=username-input]').type('JanneTest')
        cy.get('[data-cy=review-rating]').select('2').should('have.value', "2")
        cy.get('[data-cy=submit-review]').click()

        let newRating
        cy.visit("http://localhost:5173/");
        cy.get('[data-cy=rating-box]')
        .first()
        .find('[data-cy=avg-rating]')
        .invoke('text')
        .then((text) => {
            newRating = text
            cy.log(`Initial rating: ${newRating}`)
            expect(newRating).to.not.equal(initialRating)
        })

        cy.get('[data-cy=single-link]')
        .first()
        .click()

        cy.get('[data-cy=review-item]')
        .last()
        .find('[data-cy=review-trashcan]')
        .click()

    })
})