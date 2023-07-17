/// <reference types="cypress" />

import "cypress-xpath";
import { LoginPage } from "../../pages/loginPage";

const loginPage = new LoginPage();

describe("Validate Login Page", function () {
  beforeEach(function () {
    //Get test data from the file in fixture folder
    cy.fixture("loginTest.json").then(function (test_data) {
      this.test_data = test_data;
    });
  });

  it("Validate page Title", function () {
    cy.visit("https://vault-staging.investbamboo.com");

    //Validate page title
    cy.title().should("contain", "Bamboo Enterprise");
  });

  it("Invalid Login test", function () {
    loginPage.enterUsername(this.test_data.email);
    loginPage.enterPassword(this.test_data.invalid_password);
    loginPage.clickOnLogin();
    cy.wait(3000);

    //Validate Invalid Credentials response is returned
    cy.xpath(
      '//*[@id="toast-error-Invalid email or password-description"]'
    ).should("contain", "Invalid email or password");

    loginPage.cancelToastMessage();
  });

  it("Valid Login test", function () {
    //clear fields
    loginPage.clearUsernamefield();
    loginPage.clearPasswordfield();

    //Enter valid login credentials
    loginPage.enterUsername(this.test_data.email);
    loginPage.enterPassword(this.test_data.password);
    loginPage.clickOnLogin();

    //Validate if user was redirected to the OTP page
    cy.get(".css-2sxm65 > .chakra-heading").should(
      "contain",
      "Enter Verification code"
    );
  });
});
