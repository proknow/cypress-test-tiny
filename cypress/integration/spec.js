describe('page', () => {
    it('should', () => {
        cy.visit('https://docs.cypress.io');
        cy.get('nav#main-nav').should(($nav) => {
            var node = $nav[0];
            var guides = node.querySelector('ul li:first-child a');
            var $guides = Cypress.$(guides);

            // Both of these assertions work in Cypress v3.3.2 and fail in Cypress v3.4.0
            expect(guides).to.be.visible.and.have.class('active');
            expect($guides).to.be.visible.and.have.class('active');
        });
    });
})
