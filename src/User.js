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

    depositFunds(amount) {
        this.#account.setBalance(amount);
    }

    setAccount(account) {
        this.#account = account;
    }

}

export default User;