// external api - server componenent : token : backend

import { NextResponse } from "next/server";

export async function GET(request){

    try {
        const { searchParams } = new URL(request.url)
        const page = searchParams.get('page') || '3';

        // include all filter params 
        const keyword = searchParams.get('keyword') || '';
        const jobType = searchParams.get('job_type') || '';
        const education = searchParams.get('education') || '';
        const experience = searchParams.get('experience') || '';
        const minSalary = searchParams.get('min_salary') || '';
        const maxSalary = searchParams.get('max_salary') || '';
        const from_date = searchParams.get("date") || "";

        const params = new URLSearchParams({
           page,
           keyword,
           job_type: jobType,
           education,
           experience,
           man_salary: minSalary,
           max_salary: maxSalary,
           from_date
        });

        console.log(params)

        const response = await fetch(`http://localhost:8002/jobs/?${params.toString()}`)
        const data = await response.json()
        return NextResponse.json(data)

    }
    catch(error){
        console.log('error getting data from API',error)
        return NextResponse.json({status:500})
    }

    


    // http://localhost:8002/jobs/?keyword=&job_type=&education=PHD&experience=&min_salary=&max_salary=&date=
}