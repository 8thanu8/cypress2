it('checkbox being checked', () => {
    const srch_txt = 'DFS'
   cy.visit('https://beta.companieshouse.gov.uk')
  
  
    cy.get('#site-search-text')
        .type(srch_txt)
  
           cy.get('#search-submit').click()
         // cy.get('#results')
  
  
            cy.contains(srch_txt).click()
    
  
  
     cy.contains('Filing').click()
     cy.url().should('include', 'filing-history')})
