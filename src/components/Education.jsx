import { useState } from "react";
import { Box, Button, IconButton, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export const Education = () => {
    const [schools, setSchools] = useState([]);

    const handleAddSchool = () => {
        setSchools([...schools, {
            schoolName: '',
            schoolLocation: '',
            degree: '',
            major: '',
            startDate: '',
            endDate: ''
        }]);
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

    return (
        <Box sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
            <h1>Education Information</h1>
            {schools.map((school, index) => (
                <div key={index}>
                    <TextField
                        label="School Name"
                        name="schoolName"
                        value={school.schoolName}
                        onChange={(e) => handleChange(index, e)}
                        variant="outlined"
                    />
                    <TextField
                        label="School Location"
                        name="schoolLocation"
                        value={school.schoolLocation}
                        onChange={(e) => handleChange(index, e)}
                        variant="outlined"
                    />
                    <TextField
                        label="Degree"
                        name="degree"
                        value={school.degree}
                        onChange={(e) => handleChange(index, e)}
                        variant="outlined"
                    />
                    <TextField
                        label="Major"
                        name="major"
                        value={school.major}
                        onChange={(e) => handleChange(index, e)}
                        variant="outlined"
                    />
                    <TextField
                        label="Start Date"
                        name="startDate"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={school.startDate}
                        onChange={(e) => handleChange(index, e)}
                        variant="outlined"
                    />
                    <TextField
                        label="End Date"
                        name="endDate"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={school.endDate}
                        onChange={(e) => handleChange(index, e)}
                        variant="outlined"
                    />
                    <IconButton aria-label="delete" onClick={() => handleRemoveSchool(index)} disabled={schools.length === 1}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            ))}
            <Button variant="contained" onClick={handleAddSchool}>Add School</Button>
        </Box>
    );
}