import { create  } from "zustand";


const useFilterStore = create((set) => ({
   minSalary: "",
   maxSalary: "",
   keyword: "",
   fromDate: null,
   toDate: null,
   jobType: [],
   educationlevels: [],
   experiencelevels:[],

   setFilter: '',//(filterName,value) => set(state) => ,
   resetFilter: () => set({
        minSalary: "",
        maxSalary: "",
        keyword: "",
        fromDate: null,
        toDate: null,
        jobType: [],
        educationlevels: [],
        experiencelevels:[],

   })
}));

export default useFilterStore