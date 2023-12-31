// /src//components/Experience.jsx
import { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  IconButton,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";

export const Experience = ({ onChange }) => {
  const [jobs, setJobs] = useState([]);
  const handleAddJob = () => {
    const newJob = {
      companyName: "",
      position: "",
      jobLocation: "",
      startDate: "",
      endDate: "",
      responsibilities: [""],
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
    updatedJobs[jobIndex].responsibilities.push("");
    setJobs(updatedJobs);
  };

  const handleRemoveResponsibility = (jobIndex, respIndex) => {
    const updatedJobs = [...jobs];
    updatedJobs[jobIndex].responsibilities = updatedJobs[
      jobIndex
    ].responsibilities.filter((_, i) => i !== respIndex);
    setJobs(updatedJobs);
  };

  const handleResponsibilityChange = (jobIndex, respIndex, event) => {
    const updatedJobs = [...jobs];
    updatedJobs[jobIndex].responsibilities[respIndex] = event.target.value;
    setJobs(updatedJobs);
  };

  useEffect(() => {
    onChange(jobs);
  }, [jobs, onChange]);

  return (
    <Box sx={{ flexGrow: 1, m: 2 }}>
      <Typography variant="h6" component="div" mb={1} fontWeight={600}>
        Experience
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        {jobs.map((job, jobIndex) => (
          <Paper key={jobIndex} elevation={3} sx={{ p: 2, mb: 3 }}>
            <Grid container spacing={2}>
              {/* Job fields */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Company Name"
                  name="companyName"
                  value={job.companyName}
                  size="small"
                  onChange={(e) => handleJobChange(jobIndex, e)}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Location"
                  name="jobLocation"
                  value={job.jobLocation}
                  size="small"
                  onChange={(e) => handleJobChange(jobIndex, e)}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Job Title"
                  name="position"
                  value={job.position}
                  size="small"
                  onChange={(e) => handleJobChange(jobIndex, e)}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Job Description"
                  name="description"
                  value={job.description}
                  onChange={(e) => handleJobChange(jobIndex, e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Start Date"
                  name="startDate"
                  type="date"
                  size="small"
                  InputLabelProps={{ shrink: true }}
                  value={job.startDate}
                  onChange={(e) => handleJobChange(jobIndex, e)}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="End Date"
                  name="endDate"
                  type="date"
                  size="small"
                  InputLabelProps={{ shrink: true }}
                  value={job.endDate}
                  onChange={(e) => handleJobChange(jobIndex, e)}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                {job.responsibilities.map((resp, respIndex) => (
                  <Box
                    key={respIndex}
                    sx={{ display: "flex", alignItems: "center", mb: 1 }}
                  >
                    <TextField
                      fullWidth
                      label="Job Responsibility"
                      size="small"
                      value={resp}
                      onChange={(e) =>
                        handleResponsibilityChange(jobIndex, respIndex, e)
                      }
                    />
                    <IconButton
                      onClick={() =>
                        handleRemoveResponsibility(jobIndex, respIndex)
                      }
                      disabled={job.responsibilities.length === 1}
                    >
                      <RemoveCircleOutlineIcon />
                    </IconButton>
                  </Box>
                ))}
                <Button
                  startIcon={<AddCircleOutlineIcon />}
                  onClick={() => handleAddResponsibility(jobIndex)}
                >
                  Add Responsibility
                </Button>
              </Grid>
            </Grid>
            <IconButton
              aria-label="delete"
              onClick={() => handleRemoveJob(jobIndex)}
              sx={{ mt: 1 }}
            >
              <DeleteIcon />
            </IconButton>
          </Paper>
        ))}
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" onClick={handleAddJob}>
            + Experience
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
