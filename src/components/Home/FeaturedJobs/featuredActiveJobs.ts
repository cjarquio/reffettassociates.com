import { FeaturedJobsType } from "./FeaturedJobsType";
import CMPosition from "../../../assets/jobPostings/Unalaska CM Position Description.pdf"
import CityOfUnalaska from "../../../assets/images/recruitments/CityOfUnalaska.png"

export const featuredJobs: FeaturedJobsType[] = [
    {
        companyLogo: CityOfUnalaska,
        companyName: "City of Unalaska",
        jobTitle: "City Manager",
        pdf: CMPosition
    }
]

export default featuredJobs