import Account from '../../domain/models/Account';

abstract class IAccountsAPI {
	abstract fetch(): Promise<Array<Account>>;
	abstract create(account: Account): Promise<void>;
}

export default IAccountsAPI;
