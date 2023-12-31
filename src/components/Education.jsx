// /src//components/Education.jsx
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const Education = ({ onChange }) => {
  const [schools, setSchools] = useState([]);
  const handleAddSchool = () => {
    setSchools([
      ...schools,
      {
        schoolName: "",
        institution: "",
        degree: "",
        major: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const handleRemoveSchool = (index) => {
    const newList = schools.filter((_, i) => i !== index);
    setSchools(newList);
  };

  const handleChange = (index, event) => {
    const updatedSchools = [...schools];
    updatedSchools[index][event.target.name] = event.target.value;
    setSchools(updatedSchools);
  };

  useEffect(() => {
    onChange(schools);
  }, [schools, onChange]);

  return (
    <Box sx={{ flexGrow: 1, m: 2 }}>
      <Typography variant="h6" component="div" mb={1} fontWeight={600}>
        Education
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        {schools.map((school, index) => (
          <Paper key={index} elevation={3} sx={{ p: 2, mb: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="School Name"
                  name="schoolName"
                  value={school.schoolName}
                  onChange={(e) => handleChange(index, e)}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="School Location"
                  name="institution"
                  value={school.institution}
                  onChange={(e) => handleChange(index, e)}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="Degree"
                  name="degree"
                  value={school.degree}
                  onChange={(e) => handleChange(index, e)}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="Major"
                  name="major"
                  value={school.major}
                  onChange={(e) => handleChange(index, e)}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="Start Date"
                  name="startDate"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={school.startDate}
                  onChange={(e) => handleChange(index, e)}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="End Date"
                  name="endDate"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={school.endDate}
                  onChange={(e) => handleChange(index, e)}
                  variant="outlined"
                />
              </Grid>
              <IconButton
                aria-label="delete"
                onClick={() => handleRemoveSchool(index)}
                disabled={schools.length === 1}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Paper>
        ))}
        <Button variant="contained" onClick={handleAddSchool}>
          + Education
        </Button>
      </Box>
    </Box>
  );
};
