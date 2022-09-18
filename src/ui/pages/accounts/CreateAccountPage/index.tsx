import React, { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Account from '../../../../core/domain/models/Account';
import { AccountsCTX } from '../../../contexts/accounts/AccountsCTX';
import styles from './styles.module.scss';

function CreateAccountsPage() {
	const { create } = useContext(AccountsCTX);
	const navigate = useNavigate();
	const submit = useCallback(async (event: React.FormEvent) => {
		event.preventDefault();

		const inputs = event.currentTarget.getElementsByTagName('input');
		const data: Record<string, string> = {};
		for (const input of inputs) {
			data[input.name] = input.value;
		}

		if (Object.values(data).some((item) => item === '')) {
			alert('Você precisa preencher todos os campos do formulário!');
			return;
		}

		const account = Account.fromForm(data);
		const result = await create(account);
		if (result) {
			alert('Conta cadastrada com sucesso!');
			navigate('/');
		} else {
			alert(
				'Aconteceu um erro inesperado ao tentar cadastrar a conta. Por favor, tente novamente mais tarde.'
			);
		}
	}, []);

	return (
		<div className={styles.container}>
			<header>
				<h1>Cadastrar nova conta</h1>
				<button onClick={() => navigate('/')}>Ver contas cadastradas</button>
			</header>

			<form onSubmit={submit}>
				<fieldset>
					<legend>Dados Gerais</legend>
					<div>
						<label>
							Nome: <input name="name" />
						</label>
					</div>
					<div>
						<label>
							Data de Nascimento: <input type="date" name="birth_date" />
						</label>
					</div>
					<div>
						<label>
							CPF: <input type="number" max={99999999999} name="cpf" />
						</label>
					</div>
					<div>
						<label>
							E-mail: <input type="email" name="email" />
						</label>
					</div>
					<button type="submit">Finalizar</button>
				</fieldset>
			</form>
		</div>
	);
}

export default CreateAccountsPage;
