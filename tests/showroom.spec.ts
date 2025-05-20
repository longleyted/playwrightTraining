import { expect } from "playwright/test";
import {test} from "../pages/fixtures/base";


test("My first test", async ({showroomPage}) => {
    await showroomPage.visit();
    await expect(showroomPage.visitUsText).toBeVisible()
})