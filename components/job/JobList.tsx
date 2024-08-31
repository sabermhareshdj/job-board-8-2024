"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import Link from "next/link"
import { useState , useEffect } from "react"
import useSWR from 'swr'

import useFilterStore from "@/stores/jobsFilterStore"


function JobsList(){

    const {minSalary,maxSalary,keyword,fromDate,toDate,educationlevels,experiencelevels,jobTypes} = useFilterStore();
    const fetcher = (...args) => fetch(...args).then(res => res.json())

    const [page,setPage] = useState(1);

    // new url with params 
    const buildUrl = () => {
        const params = new URLSearchParams({
             page: page.toString(),
             keyword: keyword || '',
             job_type: jobTypes.join(',') || '',
             education: educationlevels.join(',') || '',
             experience: experiencelevels.join(',') || '',
             min_salary: minSalary || '',
             max_salary: maxSalary || '',
             date: fromDate ? new Date(fromDate).toISOString().slice(0, 10) : ''
        })
        return `/api/jobs?${params.toString()}`
    } 


    const { data, error, isLoading } = useSWR(buildUrl, fetcher)
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    const {results:jobs , count,next,previous} = data;


    return(
        <div className="w-full px-4 lg:w-3/4">
            <div className="grid grid-cols-3 gap-3">
                { jobs.map(job => (
                    <Card key={job.id}>
                    <CardHeader>
                        <CardTitle className="mt-5">{job.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{job.job_type} - {job.education} , {job.experience} , {job.salary}$ - {job.created_at}</p>
                    </CardContent>
                    <CardFooter>
                        <Link href='/blog/www' className="underline"> Read More </Link>
                    </CardFooter>
                </Card>
                )) }

            </div>
        </div>
    )
}



export default JobsList