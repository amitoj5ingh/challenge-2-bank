import Account from '../src/Account.js';

describe('Account tests', () => {

    describe('addBalance tests', () => {
        it('should set the balance to the amount provided', () => {
            // Arrange
            let accountA = new Account();
            let amount = 100;
            let expectedOutput = 100;

            // Act
            accountA.addBalance(amount);

            // Assert
            expect(accountA.getBalance()).toBe(expectedOutput);

        });

        it('should add the transaction to the transactions array', () => {
            // Arrange
            let accountA = new Account();
            let amount = 100;
            let date = "10/01/2012"
            let expectedOutput = Object({ date: '10/01/2012', amount: 100 });

            // Act
            accountA.addBalance(amount, date);

            // Assert
            expect(accountA.getTransactions()[0]).toEqual(expectedOutput);

        });
    });

});