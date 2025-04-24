
import { history } from 'umi';
import store from 'store';

/**
 * Dummy user database for testing authentication.
 * Available users: 
 *   - admin (password: admin123, role: ADMIN)
 *   - guest (password: guest, role: GUEST)
 */
const dummyUsers = {
  admin: { password: 'admin123', role: 'ADMIN' },
  guest: { password: 'guest', role: 'GUEST' },
};

/**
 * Attempts to authenticate the user with the given credentials.
 *
 * @param {string} username - The username provided.
 * @param {string} password - The password provided.
 * @returns {Object} Result object containing success status, user info or error message.
 */
export const login = (username, password) => {
  if (dummyUsers[username] && dummyUsers[username].password === password) {
    // Successful login: Create a user object and store it.
    const user = { username, role: dummyUsers[username].role };
    store.set('user', user);
    return { success: true, user };
  }
  // Login failed; return an error message.
  return { success: false, message: 'Invalid username or password' };
};

/**
 * Logs out the current user.
 * It clears the stored user data and redirects to the login page.
 *
 * @returns {void} This function does not return anything.
 */
export const logout = () => {
  store.remove('user');
  history.push('/login');
};

/**
 * Checks whether a user is currently authenticated.
 *
 * @returns {boolean} True if authenticated; otherwise, false.
 */
export const isAuthenticated = () => {
  return !!store.get('user');
};