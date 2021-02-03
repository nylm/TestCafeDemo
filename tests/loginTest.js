import {Selector} from "testcafe";
import {ClientFunction} from "testcafe";

fixture `Authentication  Tests`
.page`https://app.3yourmind.com/en/accounts/login/`;

test("login scenario",  async(t) => {

const emailInput = Selector("input[type='email']");
const passwordInput = Selector("input[type='password");
const loginButton = Selector("button[type='submit']");
const getPageUrl = ClientFunction(() => window.location.href);

await t
.typeText(emailInput,"colbey.gresham@sixdrops.org")
.typeText(passwordInput,"1234asdf")
.click(loginButton)
.expect(getPageUrl()).contains('https://app.3yourmind.com/user-panel/?showLoginToaster=true');
});
