class Account {
    #balance = 0.0;
    #transactions = [];

    addBalance(amount, date) {
        this.#balance += amount;
        this.#transactions.push({ date: date, amount: amount });
    }

    getBalance() {
        return this.#balance;
    }

    getTransactions() {
        return this.#transactions;
    }
}

export default Account;