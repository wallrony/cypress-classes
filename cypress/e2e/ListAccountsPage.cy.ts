describe('List Accounts Page', () => {
	beforeEach(() => {
		cy.intercept('GET', 'http://localhost:3000/accounts', {
			fixture: 'accounts.json',
		});
	});

	it('should have title, create account button and table', () => {
		cy.visit('http://localhost:4173');
		cy.get('header h1').should('have.text', 'Lista de Contas');
		cy.get('header button').should('have.text', 'Criar conta');
		cy.get('table').should('exist');
		cy.get('table thead tr th').should('have.length', 5);
		cy.get('table thead tr th:nth-child(1)').should('have.text', 'ID');
		cy.get('table thead tr th:nth-child(2)').should('have.text', 'Nome');
		cy.get('table thead tr th:nth-child(3)').should(
			'have.text',
			'Data de Nascimento'
		);
		cy.get('table thead tr th:nth-child(4)').should('have.text', 'CPF');
		cy.get('table thead tr th:nth-child(5)').should('have.text', 'E-mail');
	});

	it('should list accounts on table when fetching successfully', () => {
		cy.visit('http://localhost:4173');
		cy.get('table tbody tr').should('have.length', 2);
		cy.get('table tbody tr:first-child td').should('have.length', 5);
	});

	it("shouldn't list accounts when fetch fails", () => {
		cy.intercept('GET', 'http://localhost:3000/accounts', {
			statusCode: 400,
		});
		cy.visit('http://localhost:4173');
		cy.get('table tbody tr').should('have.length', 0);
	});

	it('should redirect to create accounts page when click on header button', () => {
		cy.visit('http://localhost:4173');
		cy.get('header button').click();
		cy.url().should('include', '/criar-conta');
	});
});
