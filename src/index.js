// Imports
import User from './User.js';
import Account from './Account.js';
import AccountStatementPrinter from './AccountStatementPrinter.js';

/*
log in
make transactions
print statement
*/

let user = new User("user", "password");
let account = new Account();
user.setAccount(account);

user.depositFunds(1000, "10/01/2012");
user.depositFunds(2000, "13/01/2012");
user.withdrawFunds(500, "14/01/2012");

AccountStatementPrinter.printAccountStatement(account);