import { expect } from "playwright/test";
import {test} from "../pages/fixtures/base";

test("do some shit", async ({aboutUsPage}) => {
    await aboutUsPage.visit();
    await expect(aboutUsPage.ourStoryText).toBeVisible()
})