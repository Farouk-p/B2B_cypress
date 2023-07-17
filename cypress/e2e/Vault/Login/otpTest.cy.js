/// <reference types="cypress" />

import "cypress-xpath";
import { LoginPage } from "../../pages/loginPage";
import { DashboardPage } from "../../pages/dashboardPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe("Validate Login to dashboard with OTP", function () {
  beforeEach(function () {
    //Get test data from the file in fixture folder
    cy.fixture("loginTest.json").then(function (test_data) {
      this.test_data = test_data;
    });
  });

  it("Enter Valid OTP to login successfully", function () {
    cy.visit("https://vault-staging.investbamboo.com");
    loginPage.enterUsername(this.test_data.email);
    loginPage.enterPassword(this.test_data.password);
    loginPage.clickOnLogin();

    loginPage.enterOTP("111111");
    cy.wait(2000);
    cy.get("form > .css-yqo5z").click();
    cy.wait(10000);
  });

  after(function () {
    dashboardPage.clickOnProfile();
    dashboardPage.clickOnLogout();
  });
});
