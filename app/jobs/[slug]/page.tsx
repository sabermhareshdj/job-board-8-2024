import { Button } from "@/components/ui/button"
function JobDetail(){

    return(
        <div className="container py-8">
            <div>
                <div className="flex items-center justify-between">
                    <h3 className="py-3 text-3xl "> Python Developer </h3>
                    <Button> Apply Now </Button>
                </div>
                
                <div className="flex flex-wrap">
                    <span className="pr-4 text-sm"> Google </span>
                    <span className="px-4 text-sm"> Mahmoud Ahmed  </span>
                    <span className="px-4 text-sm"> 3 hours ago</span>
                    <span className="px-4 text-sm"> Part Time </span>
                    <span className="px-4 text-sm"> MidSenior </span>
                </div>
                <div className="my-8 pr-8">
                    <p> Stuck in the red tape and bureaucracy that is investment banking? Tired of projects not going into production? Looking to transition and make the jump to the buy side?

A global investment management fund (~$10 billion AUM) is looking for a Python Developer to help them build and maintain a research environment that facilitates diversified systematic strategies in the commodities space.

You will take on development projects for the fixed income side of the business, improving existing systems and developing greenfield ones, having a lot of direct impact and watching your projects go into production from inception.

With the title of Quant Developer, some responsibilities include:
Data acquisition and cleaning
Pricing of fixed income financial instruments
Building and maintaining a research environment
Order execution and interaction with the firm's order management system
Consolidation with back office systems and risk systems
Creation of ad-hoc monitoring and reporting tools
Work on a live trading system

Requirements:
Mathematics/Computer Science Academic background
3-5 years of experience with Python (writing and managing code releases)
Familiarity with numerical Python libraries, e.g. Pandas, Numpy
Firm understanding of version control, testing, and continuous integration
Understanding and appreciation for best practices
Experience working with SQL databases and Sqlalchemy desired

We encourage you to apply even if you think you may not currently fit all these requirements – so long as you have proven academics and are willing to work hard and learn, we want to hear from you.

Note: if you haven't received a reply within 3 days, your application was unfortunately not accepted.</p>
                </div>
            </div>
        </div>
    )
}



export default JobDetail