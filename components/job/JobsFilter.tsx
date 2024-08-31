"use client"

import { Input } from "@/components/ui/input"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useEffect, useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"

import useFilterStore from "@/stores/jobsFilterStore"

function JobsFilter(){

    const {minSalary,maxSalary,keyword,fromDate,toDate,educationlevels,experiencelevels,jobTypes,setFilter,resetFilter} = useFilterStore();
    const [jobs , setJobs] = useState([]);

    useEffect(() => {
       applyFilter();
    }, [
       minSalary,
       maxSalary,
       keyword,
       fromDate,
       toDate,
       educationlevels,
       experiencelevels,
       jobTypes,
    ]);


    const fetchJobs = async(url) => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        return data
    }


    const applyFilter = async () => {
        const params = new URLSearchParams({
           keyword: keyword || "",
           job_type: jobTypes.join(","),
           education: educationlevels.join(","),
           experience: experiencelevels.join(","),
           min_salary: minSalary || "",
           max_salary: maxSalary || "",
           date: fromDate ? format(fromDate, "yyyy-MM-dd") : "",
        });

        const url = `/api/jobs?${params.toString()}`;
        const fetchedJobs = await fetchJobs(url);
        setJobs(fetchedJobs)
    }




    // const [date, setDate] = useState<Date>()



    return(
        <div className="w-full lg:w-1/4">
            <div className="px-6 py-2 shadow-md rounded-lg">
                <h4 className="text-lg mb-4 font-semibold"> Filters </h4>
                <form onSubmit={(e) => e.preventDefault()}>
                    <Input 
                        type="number" 
                        placeholder="Min Salary" 
                        className="w-full mb-2"
                        name="minSalary"
                        value={minSalary}
                        onChange={(e) => setFilter("minSalary",e.target.value)}
                    />

                    <Input 
                        type="number" 
                        placeholder="Max Salary" 
                        className="w-full mb-2"
                        name="maxSalary"
                        value={maxSalary}
                        onChange={(e) => setFilter("maxSalary",e.target.value)}
                    />
                    <Input 
                        type="text" 
                        placeholder="Keyword"
                        className="w-full mb-2"
                        name="keyword"
                        value={keyword}
                        onChange={(e) => setFilter("keyword",e.target.value)}
                        />

                    <div className="mb-2">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                variant={"outline"}
                                className={cn(
                                    "w-[280px] justify-start text-left font-normal",
                                    !fromDate && "text-muted-foreground w-full"
                                )}
                                >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {fromDate ? format(fromDate, "PPP") : <span>From date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                mode="single"
                                selected={fromDate}
                                onSelect={(date) => setFilter("fromDate",date)}
                                initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="mb-2">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                variant={"outline"}
                                className={cn(
                                    "w-[280px] justify-start text-left font-normal",
                                    !toDate && "text-muted-foreground w-full"
                                )}
                                >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {toDate ? format(toDate, "PPP") : <span>To date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                mode="single"
                                selected={toDate}
                                onSelect={(date) => setFilter("toDate",date)}
                                initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    
                    <div className="mt-5">
                        <h5 className="font-medium"> Job Type </h5>
                        <div className="flex flex-wrap gap-4">
                            {["Internship","PartTime","FullTime","Contract"].map((type) =>(

                                <div className="flex items-center space-x-2 mt-3" key={type}>
                                    <Checkbox 
                                        id={type}
                                        checked={jobTypes.includes(type)} 
                                        onCheckedChange={(checked) => {
                                            setFilter("jobTypes",
                                                checked
                                            ? [...jobTypes , type]
                                            : jobTypes.filter((t) => t !== type)
                                            );
                                            
                                        }}
                                    />
                                    <label
                                        htmlFor={type}
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {type}
                                    </label>
                                </div>

                            ))}

                        </div>
                    </div>
                    <div className="mt-8">
                        <h5 className="font-medium"> Education Level </h5>
                        <div className="flex flex-wrap gap-4">
                            {["PHD","Master","Bachelor"].map((level) => (

                                <div className="flex items-center space-x-2 mt-3" key={level}>
                                    <Checkbox 
                                    id={level}
                                    checked={educationlevels.includes(level)}
                                    onCheckedChange={(checked) => {
                                        setFilter("educationlevels",
                                            checked
                                            ? [... educationlevels , level] 
                                            : educationlevels.filter((l) => l !== level)
                                        )
                                    }} 
                                    />
                                    <label
                                        htmlFor={level}
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {level}
                                    </label>
                                </div>

                            ))}


                        </div>

                    </div>
                    <div className="my-8">
                        <h5 className="font-medium"> Experience Level </h5>
                        <div className="flex flex-wrap gap-4">
                            {["NoExperience","Junior","MidLevel","MidSenior"].map((level) => (

                                <div className="flex items-center space-x-2 mt-3" key={level}>
                                    <Checkbox 
                                    id={level} 
                                    checked={experiencelevels.includes(level)}
                                    onCheckedChange={(checked) => {
                                        setFilter("experiencelevels",
                                            checked
                                            ? [... experiencelevels , level] 
                                            : experiencelevels.filter((l) => l !== level)
                                        )
                                    }}
                                    />
                                    <label
                                        htmlFor={level}
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {level}
                                    </label>
                                </div>
                            ))}
                            

                        </div>
                    </div>
                    <Button className="w-full" onClick={applyFilter}>Apply Filters </Button>
                    <Button className="w-full mt-3" variant="outline" onClick={resetFilter}>Reset Filters </Button>
                </form>
            </div>
        </div>
    )
}



export default JobsFilter