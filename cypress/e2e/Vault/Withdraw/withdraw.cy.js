/// <reference types="cypress" />

import "cypress-xpath";
import { email, password } from "../../testData/loginData";
import { LoginPage } from "../../pages/loginPage";
import { DashboardPage } from "../../pages/dashboardPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe("Validate Withdrawal to Bank Account", () => {
  it("Withdraw to Saved Bank Account", function () {
    //Login to dashboard
    cy.visit("https://vault-staging.investbamboo.com");
    loginPage.enterUsername(email);
    loginPage.enterPassword(password);
    loginPage.clickOnLogin();
    cy.wait(2000);
    loginPage.enterOTP("111111");
    cy.wait(2000);
    cy.get("form > .css-yqo5z").click();
    cy.wait(10000);
    cy.get(".css-u6uitd").click({ force: true });
    cy.wait(2000);
    cy.get(".css-bwr297 > :nth-child(2)").click();
    cy.wait(2000);
    cy.get(".chakra-input").type("1000");
    cy.get(".css-c34v3g > .chakra-button").click();
    cy.wait(2000);
    cy.get(".css-159vi11 > .chakra-heading").should(
      "contain",
      "Withdrawal request sent"
    );
    cy.get(".chakra-modal__close-btn").click();
  });

  after(function () {
    dashboardPage.clickOnProfile();
    dashboardPage.clickOnLogout();
  });
});
