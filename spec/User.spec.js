import User from '../src/User.js';

describe('User tests', () => {

    describe('login tests', () => {
        it('should return true when the correct details are provided', () => {
            // Arrange
            let userA = new User('testUser', 'testPassword');
            let username = 'testUser';
            let password = 'testPassword';
            let expectedOutput = true;

            // Act
            let attempt = userA.login(username, password);

            // Assert
            expect(attempt).toBe(expectedOutput);

        });
    });

    describe('deposit tests', () => {
        it('should call the setBalance method in the Account object when depositFunds is called', () => {
            // Arrange
            let userA = new User('testUser', 'testPassword');
            let accountA = jasmine.createSpyObj('accountA', ['setBalance']);
            userA.setAccount(accountA);

            // Act
            userA.depositFunds(100);

            // Assert
            expect(accountA.setBalance).toHaveBeenCalled();

        });
    });

});