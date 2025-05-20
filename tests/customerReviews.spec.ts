import { expect } from "playwright/test";
import {test} from "../pages/fixtures/base";

test("check for Site Reviews", async ({reviewsPage}) => {
    await reviewsPage.visit();
    await expect(reviewsPage.customerReviews).toBeVisible()
    await reviewsPage.productReviews.click();
    
})
