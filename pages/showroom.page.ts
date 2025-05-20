import { Locator, Page } from "playwright/test";

export default class ShowroomPage{

    page: Page;
    visitUsText: Locator;
    showRoomWelcomeText: Locator;
    bookAnAptButton: Locator;
    bookAnAptHereButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.visitUsText = this.page.getByText('SHOWROOM').first();
        this.showRoomWelcomeText = this.page.getByText('Come and visit us at our showroom located on Östermalm, central Stockholm.');
        this.bookAnAptButton = this.page.getByRole('link', {name:"Book appointment"});
        this.bookAnAptHereButton = this.page.getByRole('link', {name:"Book appointment here"});
    }

    async visit(){
        await this.page.goto('/pages/showroom');
    }
}