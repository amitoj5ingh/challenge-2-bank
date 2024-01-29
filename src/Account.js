class Account {
    #balance = 0.0;
    #transactions = [];

    setBalance(amount) {
        this.#balance = amount;
    }
}

export default Account;