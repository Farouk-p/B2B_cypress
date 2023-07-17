export class LoginPage {
  email_textbox = '//*[@id="field-:r0:"]';
  password_textbox = '//*[@id="field-:r1:"]';
  login_button = ".chakra-button";
  cancelToastMessage_button = ".css-1hb91mz";
  loginErrorMessage =
    '//*[@id="toast-error-Invalid email or password-description"]';
  otp_textbox = '//*[@id="field-:r4:"]';

  enterUsername(email) {
    cy.xpath(this.email_textbox).type(email);
  }
  enterPassword(password) {
    cy.xpath(this.password_textbox).type(password);
  }
  clickOnLogin() {
    cy.get(this.login_button).click();
  }

  cancelToastMessage() {
    cy.get(this.cancelToastMessage_button).click();
  }

  clearUsernamefield() {
    cy.xpath(this.email_textbox).clear();
  }

  clearPasswordfield() {
    cy.xpath(this.password_textbox).clear();
  }

  enterOTP(otp) {
    cy.xpath(this.otp_textbox).type(otp);
  }

  clearOtpField() {
    cy.xpath(this.otp_textbox).clear();
  }
}
