import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AccountsCTX } from '../../../contexts/accounts/AccountsCTX';
import styles from './styles.module.scss';

function ListAccountPage() {
	const navigate = useNavigate();
	const { data: accounts, fetch: fetchAccounts } = useContext(AccountsCTX);

	useEffect(() => {
		fetchAccounts();
	}, []);

	return (
		<div className={styles.container}>
			<header>
				<h1>Lista de Contas</h1>
				<button onClick={() => navigate('/criar-conta')}>Criar conta</button>
			</header>

			<table border={1}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Nome</th>
						<th>Data de Nascimento</th>
						<th>CPF</th>
						<th>E-mail</th>
					</tr>
				</thead>
				<tbody>
					{accounts?.map((account) => (
						<tr key={account.id}>
							<td>{account.id}</td>
							<td>{account.name}</td>
							<td>{account.birthDate}</td>
							<td>{account.cpf}</td>
							<td>{account.email}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default ListAccountPage;
