"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
Popover,
PopoverContent,
PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
function JobAdd(){

    const [date, setDate] = useState<Date>()

    return(
        <div className="container py-8">
            <div className="w-3/5 mx-auto">
                <div className="">
                        <h3 className="py-3 text-3xl "> Add New Job </h3>
                </div>
                <div className="flex items-center justify-between mt-5">
                    <form className="w-full ">
                        <Input type="text" placeholder="Enter Job Title" className="w-full mb-4"/>
                        <Textarea placeholder="Enter job description" className="w-full mb-4" />
                        <Select>
                            <SelectTrigger className="w-full mb-4">
                                <SelectValue placeholder="Select a Job Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="Internship">Internship</SelectItem>
                                <SelectItem value="PartTime">PartTime</SelectItem>
                                <SelectItem value="FullTime">FullTime</SelectItem>
                                <SelectItem value="Contract">Contract</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="w-full mb-4">
                                <SelectValue placeholder="Select a Education Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="PHD">PHD</SelectItem>
                                <SelectItem value="Master">Master</SelectItem>
                                <SelectItem value="bachelor">bachelor</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="w-full mb-4">
                                <SelectValue placeholder="Select a Experience Level" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="NoExperience">NoExperience</SelectItem>
                                <SelectItem value="Junior">Junior</SelectItem>
                                <SelectItem value="MidLevel">MidLevel</SelectItem>
                                <SelectItem value="MidSenior">MidSenior</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Input type="number" placeholder="Enter Salary" className="w-full mb-4"/>
                        <Input type="text" placeholder="Enter Position" className="w-full mb-4"/>
                        <div className="mb-2">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[280px] justify-start text-left font-normal",
                                        !date && "text-muted-foreground w-full"
                                    )}
                                    >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP") : <span>Due date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <Button className="w-full mt-5">Add  </Button>

                    </form>
                    
                </div>
            </div>
        </div>
    )
}



export default JobAdd