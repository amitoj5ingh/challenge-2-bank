class Account {
    #balance = 0.0;
    #transactions = [];

    addBalance(amount, date) {
        this.#balance += amount;
        this.#transactions.push({ date: date, amount: amount });
    }

    withdrawBalance(amount, date) {
        if (amount > this.#balance) {
            throw new Error("Insufficient funds");
        }
        this.#balance -= amount;
        this.#transactions.push({ date: date, amount: -amount });
    }

    getBalance() {
        return this.#balance;
    }

    getTransactions() {
        return this.#transactions;
    }
}

export default Account;