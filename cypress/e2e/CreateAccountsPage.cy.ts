const accountData = {
	name: 'user 1',
	birth_date: '2020-01-01',
	cpf: '33333333333',
	email: 'email@test.com',
};

describe('Create Accounts Page', () => {
	it('should have title, list accounts button and create account form', () => {
		cy.visit('http://localhost:4173/criar-conta');
		cy.get('header h1').should('have.text', 'Cadastrar nova conta');
		cy.get('header button').should('have.text', 'Ver contas cadastradas');
		cy.get('form').should('exist');
		cy.get('fieldset > div').should('have.length', 4);
		cy.get('fieldset button').should('exist');
	});

	it('should create an account when filling the form correctly', () => {
		cy.intercept('POST', 'http://localhost:3000/accounts', {
			body: accountData,
		});
		cy.visit('http://localhost:4173/criar-conta');
		cy.get('form fieldset input[name="name"]').type(accountData['name']);
		cy.get('form fieldset input[name="birth_date"]').type(
			accountData['birth_date']
		);
		cy.get('form fieldset input[name="cpf"]').type(accountData['cpf']);
		cy.get('form fieldset input[name="email"]').type(accountData['email']);
		cy.get('form fieldset button').click();
		cy.url().should('eq', 'http://localhost:4173/');
	});

	it('should create an account when filling the form correctly', () => {
		cy.intercept('POST', 'http://localhost:3000/accounts', {
			body: accountData,
		});
		cy.visit('http://localhost:4173/criar-conta');
		cy.get('form fieldset input[name="name"]').type(accountData['name']);
		cy.get('form fieldset input[name="birth_date"]').type(
			accountData['birth_date']
		);
		cy.get('form fieldset input[name="cpf"]').type(accountData['cpf']);
		cy.get('form fieldset button').click();
	});
});
