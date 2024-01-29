import Account from '../src/Account.js';

describe('Account tests', () => {

    describe('addBalance tests', () => {
        it('should add the amount provided to the balance', () => {
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

    describe('withdrawBalance tests', () => {
        let accountA;

        beforeEach(() => {
            accountA = new Account();
            accountA.addBalance(100);
        });

        it('should deny the withdrawal if the input is greater than the balance', () => {
            // Arrange
            let amount = 1000;

            // Act

            // Assert
            expect(() => accountA.withdrawBalance(amount)).toThrowError("Insufficient funds");
            // Found in Jasmine documentation

        });

        it('should subtract the amount provided from the balance', () => {
            // Arrange
            let amount = 50;
            let expectedOutput = 50;

            // Act
            accountA.withdrawBalance(amount);

            // Assert
            expect(accountA.getBalance()).toBe(expectedOutput);

        });

        it('should add the transaction to the transactions array', () => {
            // Arrange
            let amount = 50;
            let date = "10/01/2012"
            let expectedOutput = Object({ date: '10/01/2012', amount: -50 });

            // Act
            accountA.withdrawBalance(amount, date);

            // Assert
            expect(accountA.getTransactions()[1]).toEqual(expectedOutput);

        });
    });

});