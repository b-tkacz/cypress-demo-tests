import Page from './Page';

class LoginPage extends Page {
  get usernameInput() {
    return this.getElement('[data-test="username"]');
  }
  get passwordInput() {
    return this.getElement('[data-test="password"]');
  }
  get loginButton() {
    return this.getElement('[data-test="login-button"]');
  }

  open() {
    return super.open('/');
  }
  login(username: string, password: string) {
    this.usernameInput.type(username);
    this.passwordInput.type(password);
    this.loginButton.click();
  }
}

export default new LoginPage();
