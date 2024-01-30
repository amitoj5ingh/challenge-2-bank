class AccountStatementPrinter {
    static printAccountStatement(account) {
        // date       || credit  || debit  || balance
        // 14/01/2012 ||         || 500.00 || 2500.00
        // 13/01/2012 || 2000.00 ||        || 3000.00
        // 10/01/2012 || 1000.00 ||        || 1000.00
        // loop transactions array backwards
        // check for debit/credit
        // calculate balance
        // sort out string

        let transactions = account.getTransactions();
        let balance = account.getBalance();
        let statement = "date || credit || debit || balance\n";

        let transaction, date, amount, credit, debit;
        for (let i = transactions.length - 1; i >= 0; i--) {
            transaction = transactions[i];
            date = transaction.date;
            amount = transaction.amount;
            credit = "";
            debit = "";
            if (amount > 0) {
                credit = amount.toFixed(2); // tutorialspoint .toFixed()
            } else {
                debit = (-amount).toFixed(2);
            }
            statement += `${date} || ${credit} || ${debit} || ${balance.toFixed(2)}\n`;
            balance -= amount;

        }
        console.log(statement);

    }

}

export default AccountStatementPrinter;