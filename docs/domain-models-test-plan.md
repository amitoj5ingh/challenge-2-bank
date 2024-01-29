# Domain Models and Test Plan

---

## User Story 1
As an account holder, I want to login to my bank account, so that I can view my account details.

### Domain Model

| Object | Attributes | Messages | Outputs |
| --- | --- | --- | --- |
| User | username@String password@String | login(username, password) | @Boolean |

### Tests
1. When provided with the correct username and password, the function returns true.


## User Story 2
As an account holder, I want to deposit funds into my account, so that I can store my cash in the bank.

### Domain Model

| Object | Attributes | Messages | Outputs |
| --- | --- | --- | --- |
| User | username@String | | |
| | account@Account | depositFunds(@Float) | @Void |
| Account | balance@Float | setBalance(@Float) | @Void |
| | transactions@Array[@String] | | |

### Tests
1. When depositFunds is called, it calls the setBalance function in the Account object.
2. The user input is a float.
4. The user input is greater than 0.
5. When setBalance is called, the entered amount is added to the user's balance.
6. The transaction is added to the transactions array.


## User Story 3
As an account holder, I want to withdraw funds from my account, so that I can spend my cash.

### Domain Model

| Object | Attributes | Messages | Outputs |
| --- | --- | --- | --- |
| User | username@String | withdrawFunds(@Float) | @Float |
| | account@Account | | |
| Account | balance@Float | setBalance(@Float) | @Void |

### Tests
1. When withdrawFunds is called, it calls the setBalance function in the Account object.
2. The user input is a float.
4. The user input is greater than 0.
5. If the user input is greater than the user's balance, the withdrawal is denied.
6. When setBalance is called, the entered amount is subtracted from the user's balance.
7. The withdrawFunds function returns the amount withdrawn.
8. The transaction is added to the transactions array.


## User Story 4
As an account holder, I want to see an account statement, so that I can view my transaction history.

### Domain Model

| Object | Attributes | Messages | Outputs |
| --- | --- | --- | --- |
| User | username@String | | |
| | account@Account | | |
| Account | balance@Float | getBalance() | @Float |
| | transactions@Array[@String] | getTransactions() | @Array[@String] |
| AccountStatementPrinter | | printAccountStatement(@Account) | @String |

### Tests
1. When printAccountStatement is called, the user's transaction history is returned.