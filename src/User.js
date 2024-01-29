class User {
    #username;
    #password;

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

}

export default User;