// /src//components/GeneralInfo.jsx
import { useEffect, useState } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";

export const GeneralInfo = ({ onChange }) => {
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    title: "",
    location: "",
    email: "",
    phoneNumber: "",
    webSite: "",
    summary: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedInfo = { ...info, [name]: value };
    setInfo(updatedInfo);
  };
  useEffect(() => {
    if (typeof onChange === "function") {
      onChange(info);
    }
  }, [info, onChange]);

  return (
    <Box sx={{ flexGrow: 1, m: 2 }}>
      <Typography variant="h6" component="div" mb={1} fontWeight={600}>
        Personal Details
      </Typography>
      <Grid container spacing={2}>
        {Object.keys(info).map((key) => (
          <Grid item xs={12} sm={6} md={6} key={key}>
            <TextField
              size="small"
              fullWidth
              name={key}
              label={
                key.charAt(0).toUpperCase() +
                key.slice(1).replace(/([A-Z])/g, " $1")
              } // Formatting the label
              value={info[key]}
              onChange={handleInputChange}
              variant="outlined"
              type={
                key === "email"
                  ? "email"
                  : key === "phoneNumber"
                  ? "tel"
                  : key === "webSite"
                  ? "url"
                  : "text"
              }
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
