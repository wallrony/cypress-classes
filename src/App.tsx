import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AccountsProvider from './ui/contexts/accounts/AccountsProvider';
import CreateAccountsPage from './ui/pages/accounts/CreateAccountPage';
import ListAccountPage from './ui/pages/accounts/ListAccountsPage';

function App() {
	return (
		<AccountsProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<ListAccountPage />} />
					<Route path="/criar-conta" element={<CreateAccountsPage />} />
				</Routes>
			</BrowserRouter>
		</AccountsProvider>
	);
}

export default App;
