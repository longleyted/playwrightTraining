import AboutUsPage from "../aboutUs.page"
import {test as base} from 'playwright/test'
import ShowroomPage from "../showroom.page"
import ReviewsPage from "../reviews.page"
import HomePage from "../home.page.ts"

type commonFixtures = {
    aboutUsPage: AboutUsPage
    showroomPage: ShowroomPage
    reviewsPage: ReviewsPage
    homePage: HomePage
}

export const test = base.extend<commonFixtures>({

    aboutUsPage: async({page},use)=>{
        const aboutUsPage = new AboutUsPage(page)
        await use(aboutUsPage)
    },

     showroomPage: async({page},use)=>{
        const showroomPage = new ShowroomPage(page)
        await use(showroomPage)
    },

         reviewsPage: async({page},use)=>{
        const reviewsPage = new ReviewsPage(page)
        await use(reviewsPage)

    },

        homePage: async({page},use)=>{
        const homePage = new HomePage(page)
        await use(homePage)
            }
})
