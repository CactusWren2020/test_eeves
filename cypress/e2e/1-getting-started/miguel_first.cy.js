describe('Test the EeVee Log site', () => {
    beforeEach(() => {
        //go to the website before each test
        cy.visit('https://mikecho.dev/projects/eevee_log/index.php')
    })

    it("Check the 'Home' page navbar", () => {
        cy.log("COUNT LIST ITEMS IN THE NAVBAR");
        cy.get('.navbar-nav.ml-auto li').should('have.length', 8)

        cy.log("MAKE SURE THE FIRST ITEM IS 'HOME'");
        cy.get('.navbar-nav.ml-auto li')
            .first()
            .should("contain.text", "Home")
            .should("have.class", "active")
    })
    
    it("Visit the 'Leaders' page", () => {
        cy.get('.navbar-nav.ml-auto li:nth-of-type(2) .nav-link')
            .click()
        cy.log("VERIFY WE'RE ON THE 'LEADERS' PAGE");
        cy.get(".card h2")
            .first()
            .should("contain.text", "Richest EeVees");
        cy.log("RETURN TO THE MAIN PAGE");
        cy.get('.navbar-nav.ml-auto li')
            .first()
            .click()
    });
    
    it("Test the 'Contact' page", () => {
        cy.get('.navbar-nav.ml-auto li:nth-of-type(5) .nav-link')
            .click()
        cy.log("VERIFY WE'RE ON THE 'CONTACT' PAGE");
        cy.get("h1")
            .should("have.text", "Contact")
        cy.get("#form_name")
            .type("Test")
            .should("have.value", "Test");
        cy.get("#form_lastname")
            .type("User")
            .should("have.value", "User");
        cy.get("#form_email")
            .type("testuser@test.com")
            .should("have.value", "testuser@test.com");
        cy.get("#form_need")
            .select("I want to add to the database")
            .should("have.value", "Request quotation");
        cy.get("#form_message")
            .type("This is only a test. Repeat: this is only a test")
            .should("have.value", "This is only a test. Repeat: this is only a test")
        cy.get(".btn-send")
            .click()
        cy.get(".alert-success")
            .should("be.visible")
    });
    
    
});