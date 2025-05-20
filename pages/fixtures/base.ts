import AboutUsPage from "../aboutUs.page"
import {test as base} from 'playwright/test'
import ShowroomPage from "../showroom.page"
import ReviewsPage from "../reviews.page"

type commonFixtures = {
    aboutUsPage: AboutUsPage
    showroomPage: ShowroomPage
    reviewsPage: ReviewsPage
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

    }

})
