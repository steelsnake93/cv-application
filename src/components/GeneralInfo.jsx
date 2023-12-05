import { useState } from 'react';
import validator from 'validator';

// Define the GeneralInfo component
export default function GeneralInfo() {
    // State for storing form data
    const [info, setInfo] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        link: ''
    });

    const [isEditing, setIsEditing] = useState(true);
    // State for storing form errors
    const [errors, setErrors] = useState({});
    // State for storing submitted information
    const [submittedInfo, setSubmittedInfo] = useState(null);
    // Handle input changes and update the state
    const handleChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        });
    };
    // Validate form fields and set errors if any
    const validateForm = () => {
        let tempErrors = {};
        if (info.name && !info.name.trim()) tempErrors.name = "Name is required";
        if (info.email && !validator.isEmail(info.email)) tempErrors.email = "Invalid email address";
        if (info.phone && !validator.isMobilePhone(info.phone)) tempErrors.phone = "Invalid phone number";
        if (info.address && !info.address.trim()) tempErrors.address = "Address is required";
        if (info.link && !validator.isURL(info.link, { protocols: ['http', 'https'], require_protocol: true })) tempErrors.link = "Invalid URL";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setSubmittedInfo(info);
            setIsEditing(false);
        }
    };
    // When editing the information
    const handleEdit = () => {
        setIsEditing(true);
    };
    // Component JSX
    return (
        <div>
            <h3>Personal Details</h3>
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    {/* Name input field */}
                    <div>
                        <label htmlFor="name">Full Name:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={info.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                    </div>
                    {/* Email input field */}
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={info.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                    </div>
                    {/* Phone number input field */}
                    <div>
                        <label htmlFor="phone">Phone Number:</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={info.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
                    </div>
                    {/* Address input field */}
                    <div>
                        <label htmlFor="address">Location:</label>
                        <input
                            type="text"
                            name="address"
                            id="address"
                            value={info.address}
                            onChange={handleChange}
                        />
                        {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}
                    </div>
                    {/* Link input field */}
                    <div>
                        <label htmlFor="link">Link:</label>
                        <input
                            type="text"
                            name="link"
                            id="link"
                            value={info.link}
                            onChange={handleChange}
                        />
                        {errors.link && <p style={{ color: 'red' }}>{errors.link}</p>}
                    </div>
                    <button type="submit">Save</button>
                </form>
            ) : (
                /* Display submitted information */
                <div>
                    <p>Name: {submittedInfo.name}</p>
                    <p>Email: {submittedInfo.email}</p>
                    <p>Phone: {submittedInfo.phone}</p>
                    <p>Address: {submittedInfo.address}</p>
                    <p>Link:
                        <a href={submittedInfo.link.startsWith('http') ?
                            submittedInfo.link : `http://${submittedInfo.link}`}
                            target="_blank" rel="noopener noreferrer">
                            {submittedInfo.link}
                        </a>
                    </p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
}
