// /src//components/CVForm.jsx
import { Box, Button } from "@mui/material";
import { GeneralInfo } from "./GeneralInfo";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { useState } from "react";

export const CVForm = ({ onChange }) => {
  const [generalInfo, setGeneralInfo] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      generalInfo,
      education,
      experience,
      showPreview: true,
    };
    console.log(formData);
    onChange(formData);
  };
  return (
    <Box sx={{ width: { sm: "100%", md: "35%" } }}>
      <Box component="form" onSubmit={handleSubmit}>
        <GeneralInfo onChange={setGeneralInfo} />
        <Education onChange={setEducation} />
        <Experience onChange={setExperience} />
        <Box sx={{ display: "flex", justifyContent: "flex-end", m: 2 }}>
          <Button
            size="small"
            type="submit"
            variant="contained"
            color="success"
          >
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
