import { create } from 'zustand'

const useFilterStore = create((set) => ({
    minSalary: '' , 
    maxSalary: '',
    keyword: '',
    fromDate: null , 
    toDate: null,
    jobTypes: [],
    educationlevels: [],
    experiencelevels: [],

    setFilter: (filterName, value) => set((state) => ({
        ...state,
        [filterName]: value,  // Update the specific filter with the new value
      })),

    resetFilter: () => set({
        minSalary: '' , 
        maxSalary: '',
        keyword: '',
        fromDate: null , 
        toDate: null,
        jobTypes: [],
        educationlevels: [],
        experiencelevels: [],
    })
}))


export default useFilterStore