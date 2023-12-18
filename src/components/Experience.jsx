import { useState } from 'react';
import { Box, TextField, Button, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';

export const Experience = () => {
    const [jobs, setJobs] = useState([]);

    const handleAddJob = () => {
        const newJob = {
            companyName: '',
            jobTitle: '',
            jobLocation: '',
            startDate: '',
            endDate: '',
            responsibilities: ['']
        };
        setJobs([...jobs, newJob]);
    };

    const handleRemoveJob = (index) => {
        const updatedJobs = jobs.filter((_, i) => i !== index);
        setJobs(updatedJobs);
    };

    const handleJobChange = (jobIndex, event) => {
        const updatedJobs = [...jobs];
        updatedJobs[jobIndex][event.target.name] = event.target.value;
        setJobs(updatedJobs);
    };

    const handleAddResponsibility = (jobIndex) => {
        const updatedJobs = [...jobs];
        updatedJobs[jobIndex].responsibilities.push('');
        setJobs(updatedJobs);
    };

    const handleRemoveResponsibility = (jobIndex, respIndex) => {
        const updatedJobs = [...jobs];
        updatedJobs[jobIndex].responsibilities = updatedJobs[jobIndex].responsibilities.filter((_, i) => i !== respIndex);
        setJobs(updatedJobs);
    };

    const handleResponsibilityChange = (jobIndex, respIndex, event) => {
        const updatedJobs = [...jobs];
        updatedJobs[jobIndex].responsibilities[respIndex] = event.target.value;
        setJobs(updatedJobs);
    };

    return (
        <Box sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
            <h1>Practical Experience</h1>
            {jobs.map((job, jobIndex) => (
                <div key={jobIndex}>
                    <TextField
                        label="Company Name"
                        name="companyName"
                        value={job.companyName}
                        onChange={(e) => handleJobChange(jobIndex, e)}
                        variant="outlined"
                    />
                    <TextField
                        label="Job Title"
                        name="jobTitle"
                        value={job.jobTitle}
                        onChange={(e) => handleJobChange(jobIndex, e)}
                        variant="outlined"
                    />
                    <TextField
                        label="Job Location"
                        name="jobLocation"
                        value={job.jobLocation}
                        onChange={(e) => handleJobChange(jobIndex, e)}
                        variant="outlined"
                    />
                    <TextField
                        label="Start Date"
                        name="startDate"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={job.startDate}
                        onChange={(e) => handleJobChange(jobIndex, e)}
                        variant="outlined"
                    />
                    <TextField
                        label="End Date"
                        name="endDate"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={job.endDate}
                        onChange={(e) => handleJobChange(jobIndex, e)}
                        variant="outlined"
                    />
                    <Box>
                        {job.responsibilities.map((resp, respIndex) => (
                            <div key={respIndex}>
                                <TextField
                                    label="Job Responsibility"
                                    value={resp}
                                    onChange={(e) => handleResponsibilityChange(jobIndex, respIndex, e)}
                                    variant="outlined"
                                    fullWidth
                                />
                                <IconButton onClick={() => handleRemoveResponsibility(jobIndex, respIndex)} disabled={job.responsibilities.length === 1}>
                                    <RemoveCircleOutlineIcon />
                                </IconButton>
                            </div>
                        ))}
                        <Button startIcon={<AddCircleOutlineIcon />} onClick={() => handleAddResponsibility(jobIndex)}>
                            Add Responsibility
                        </Button>
                    </Box>
                    <IconButton aria-label="delete" onClick={() => handleRemoveJob(jobIndex)}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            ))}
            <Button variant="contained" onClick={handleAddJob}>Add Job</Button>
        </Box>
    );
};
