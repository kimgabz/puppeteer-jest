const { default: HomePage } = require("../pages/HomePage");
const { default: TopBar } = require("../pages/components/TopBar");
const { default: LoginPage } = require("../pages/LoginPage");
const { default: FeedbackPage } = require("../pages/FeedbackPage");

import { username, password, timeout } from '../config';

describe('Example', () => {
    let homePage;
    let topBar;
    let loginPage;
    let feedbackPage;

    beforeAll(async () => {
        jest.setTimeout(timeout);
        topBar = new TopBar();
        homePage = new HomePage();
        loginPage = new LoginPage();
        feedbackPage = new FeedbackPage();
    });

    it("home page test", async () => {
        await homePage.visit();
        await homePage.isNavBarDisplayed();
    });

    // it("navbar should be displayed", async () => {
    //     await homepage.isNavBarDisplayed();
    //     await topbar.isTopBarDisplayed();
    // });

    it("feedback test", async () => {
        await feedbackPage.visit();
        await feedbackPage.isFeedbackFormDisplayed();
        await feedbackPage.submitFeedback('Johny walker', 'johnywalkers@gmail.com', 'subject', 'comment');
        // await feedbackPage.wait(5000);
    });

    it("login test", async () => {
        await homePage.visit();
        await topBar.isTopBarDisplayed();
        await topBar.clickSignInButton();
        await loginPage.isLoginFormDisplayed();
        await loginPage.login(username, password);
        // await loginPage.wait(5000);
    });
});