const job = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false }
];
// const activeJobs = job.filter(function(job){return job.isActive;});
const activeJobs = job.filter(job => job.isActive);
console.log(activeJobs);