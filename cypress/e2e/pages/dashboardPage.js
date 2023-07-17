export class DashboardPage {
  profile_button = '//*[@id="menu-button-:r8:"]';
  logout_button = '//*[@id="menu-list-:r8:"]/div/div[3]/button';

  clickOnProfile() {
    cy.xpath(this.profile_button).click();
  }

  clickOnLogout() {
    cy.xpath(this.logout_button).click();
  }
}
