import AboutUsPage from "../aboutUs.page"
import {test as base} from 'playwright/test'

type commonFixtures = {
    aboutUsPage: AboutUsPage
}

export const test = base.extend<commonFixtures>({

    aboutUsPage: async({page},use)=>{
        const aboutUsPage = new AboutUsPage(page)
        await use(aboutUsPage)
    }

})
