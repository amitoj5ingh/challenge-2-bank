import AccountStatementPrinter from "../src/AccountStatementPrinter.js";

describe('AccountStatementPrinter tests', () => {

    describe('printAccountStatement tests', () => {

        it('should print the users transaction history when printAccountStatement is called', () => {
            // Arrange
            const logSpy = spyOn(console, 'log');
            const testAccount = jasmine.createSpyObj('testAccount', {
                getTransactions: [
                    { date: '10/01/2012', amount: 1000 },
                    { date: '13/01/2012', amount: 2000 },
                    { date: '14/01/2012', amount: -500 }
                ],
                getBalance: 2500.00
            });

            // Act
            AccountStatementPrinter.printAccountStatement(testAccount);

            // Assert
            expect(logSpy).toHaveBeenCalledWith("date || credit || debit || balance\n14/01/2012 ||  || 500.00 || 2500.00\n13/01/2012 || 2000.00 ||  || 3000.00\n10/01/2012 || 1000.00 ||  || 1000.00\n");
        });



        // // Arrange
        // let accountStatementPrinter = new AccountStatementPrinter();
        // let transactions = [
        //     { date: '10/01/2012', amount: 100 },
        //     { date: '13/01/2012', amount: 200 },
        //     { date: '14/01/2012', amount: -100 }
        // ];
        // let expectedOutput = "date || credit || debit || balance\n14/01/2012 || || 500.00 || 2500.00\n13/01/2012 || 2000.00 || || 3000.00\n10/01/2012 || 1000.00 || || 1000.00"

        // // Act
        // let statement = accountStatementPrinter.printAccountStatement(transactions);

        // // Assert
        // expect(statement).toBe(expectedOutput);
        //});
    });
});