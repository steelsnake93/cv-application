import { useState } from "react";
import { Box, TextField } from "@mui/material";

export const GeneralInfo = () => {
    const [info, setInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        portfolioLink: '',
        address: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedInfo = { ...info, [name]: value };
        setInfo(updatedInfo);
    };

    return (
        <Box sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
            <h1>General Information</h1>
            <TextField
                name="firstName"
                label="First Name"
                value={info.firstName}
                onChange={handleInputChange}
                variant="outlined"
            />
            <TextField
                name="lastName"
                label="Last Name"
                value={info.lastName}
                onChange={handleInputChange}
                variant="outlined"
            />
            <TextField
                label="Email"
                type="email"
                name="email"
                value={info.email}
                onChange={handleInputChange}
                variant="outlined"
            />
            <TextField
                label="Phone Number"
                type="tel"
                name="phoneNumber"
                value={info.phoneNumber}
                onChange={handleInputChange}
                variant="outlined"
            />
            <TextField
                label="Address"
                name="address"
                value={info.address}
                onChange={handleInputChange}
                variant="outlined"
            />
            <TextField
                label="Website"
                name="portfolioLink"
                value={info.portfolioLink}
                type="url"
                onChange={handleInputChange}
                variant="outlined"
            />
        </Box>
    );
}