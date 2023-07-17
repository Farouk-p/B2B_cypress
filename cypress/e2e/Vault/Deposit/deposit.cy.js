/// <reference types="cypress" />

import "cypress-xpath";
import { email, password } from "../../testData/loginData";
import { LoginPage } from "../../pages/loginPage";
import { DashboardPage } from "../../pages/dashboardPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe("Validate NGN deposit", () => {
  it("Deposit with NGN currency through flutterwaves", function () {
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

    //click on deposit button
    cy.xpath(
      "/html/body/div[1]/div[1]/div[2]/div/div[1]/div[1]/div/div[2]/button[1]"
    ).click({ force: true });
    cy.wait(2000);
    cy.get(".css-tklhvm > :nth-child(2)").click();
    cy.wait(2000);
    cy.get(".chakra-input").type("2000");
    cy.wait(2000);
    cy.xpath('//*[@id="tabs-:rb:--tabpanel-1"]/button').should(
      "contain",
      "Proceed with"
    );
    cy.get(".chakra-modal__close-btn").click();
  });

  after(function () {
    dashboardPage.clickOnProfile();
    dashboardPage.clickOnLogout();
  });
});
