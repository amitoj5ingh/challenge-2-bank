class User {
    #username;
    #password;
    #account;

    constructor(username, password) {
        this.#username = username;
        this.#password = password;
    }

    login(username, password) {
        if (username === this.#username && password === this.#password) {
            return true;
        }
        return false;
    }

    depositFunds(amount, date) {
        this.#account.addBalance(amount, date);
    }

    withdrawFunds(amount, date) {
        this.#account.withdrawBalance(amount, date);
    }

    setAccount(account) {
        this.#account = account;
    }

}

export default User;