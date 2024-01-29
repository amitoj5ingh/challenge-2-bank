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
        let userA;

        beforeEach(() => {
            userA = new User('testUser', 'testPassword');
        });

        it('should call the addBalance method in the Account object when depositFunds is called', () => {
            // Arrange
            let accountA = jasmine.createSpyObj('accountA', ['addBalance']);
            userA.setAccount(accountA);

            // Act
            userA.depositFunds(100);

            // Assert
            expect(accountA.addBalance).toHaveBeenCalled();

        });
    });

    describe('withdraw tests', () => {
        let userA;

        beforeEach(() => {
            userA = new User('testUser', 'testPassword');
        });

        it('should call the withdrawBalance method in the Account object when withdrawFunds is called', () => {
            // Arrange
            let accountA = jasmine.createSpyObj('accountA', ['subtractBalance']);
            userA.setAccount(accountA);

            // Act
            userA.withdrawFunds(100);

            // Assert
            expect(accountA.subtractBalance).toHaveBeenCalled();

        });
    });

});