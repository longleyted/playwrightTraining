import { Locator, Page } from "playwright/test";

export default class AboutUsPage{

    page: Page;
    ourStoryText: Locator;

    constructor(page: Page){
        this.page = page;
        this.ourStoryText = this.page.getByText('OUR STORY')
    }

    async visit(){
        await this.page.goto('/pages/about-us');
    }
}