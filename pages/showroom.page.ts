import { Locator, Page } from "playwright/test";

export default class ShowroomPage{

    page: Page;
    visitUsText: Locator;

    constructor(page: Page){
        this.page = page;
        this.visitUsText = this.page.getByText('SHOWROOM').first()
    }

    async visit(){
        await this.page.goto('/pages/showroom');
    }
}