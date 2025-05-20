import { Locator, Page } from "playwright/test";

export default class ReviewsPage{

    page: Page;
    customerReviews: Locator;
    productReviews: Locator;
    reviews: Locator;

    constructor(page: Page){
        this.page = page;
        this.customerReviews = this.page.getByText('Site Reviews')
        this.productReviews = this.page.getByRole('tab', { name: 'Product Reviews' })
        this.reviews = this.page.getByText('reviews')
    }

    async visit(){
        await this.page.goto('/pages/customer-reviews');
    }
}