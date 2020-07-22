const { default: HomePage } = require("../pages/HomePage");
const { default: TopBar } = require("../pages/components/TopBar");
const { default: LoginPage } = require("../pages/LoginPage");
const { default: FeedbackPage } = require("../pages/FeedbackPage");


describe('Example', () => {
    let homepage;
    let topbar;
    let loginpage;
    let feedbackpage;

    beforeAll(async () => {
        jest.setTimeout(15000);
        homepage = new HomePage();
        topbar = new TopBar();
        loginpage = new LoginPage();
        feedbackpage = new FeedbackPage();

    });

    it("homepage should work", async () => {
        await homepage.visit();
    });

    it("navbar should be displayed", async () => {
        await homepage.isNavBarDisplayed();
        await topbar.isTopBarDisplayed();
    });

    it("login test", async () => {
        await loginpage.visit();
        await loginpage.isLoginFormDisplayed();
        await loginpage.login('username', 'password');
        await loginpage.wait(5000);
    });

    it("feedback test", async () => {
        await feedbackpage.visit();
        await feedbackpage.isFeedbackFormDisplayed();
        await feedbackpage.submitFeedback('Johny', 'johnyTheSales@gmail.com', 'subject', 'comment');
        await feedbackpage.wait(5000);
    });
});