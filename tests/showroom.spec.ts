import { expect } from "playwright/test";
import {test} from "../pages/fixtures/base";


test("My first test 123", async ({showroomPage, homePage}) => {
    await homePage.visit();
    await homePage.showRoomLink.click(); //Has to be on page, to find locator, to do action
    await expect(showroomPage.showRoomWelcomeText).toBeVisible();
   // await showroomPage.bookAnAptButton.click();
   // await showroomPage.bookAnAptHereButton.scrollIntoViewIfNeeded();
    await showroomPage.bookAnAptHereButton.click();
    



})

