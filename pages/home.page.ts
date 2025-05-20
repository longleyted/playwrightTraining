import { Locator, Page } from "playwright/test";

export default class HomePage{

    page: Page;
    showRoomLink: Locator;


    constructor(page: Page){
        this.page = page;
        this.showRoomLink = this.page.getByRole("link", {name:"SHOWROOM"}).first();

        
    }

    async visit(){
        await this.page.goto('');
    }
}