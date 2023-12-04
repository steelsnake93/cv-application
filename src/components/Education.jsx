import { useState } from "react";

// Define the Education component
export default function Education() {
    // State for storing multiple education entries
    const [educationEntries, setEducationEntries] = useState([]);
    // State for storing form data for a new entry
    const [newEntry, setNewEntry] = useState({
        schoolName: "",
        schoolLocation: "",
        degree: "",
        major: "",
        studyDate: "",
    });

    // Handle input changes and update the state for the new entry
    const handleInputChange = (e) => {
        setNewEntry({
            ...newEntry,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission to add a new education entry
    const handleSubmit = (e) => {
        e.preventDefault();
        setEducationEntries([...educationEntries, newEntry]);
        // Reset the new entry form after submission
        setNewEntry({
            schoolName: "",
            schoolLocation: "",
            degree: "",
            major: "",
            studyDate: ""
        });
    };

    // Function to remove the last school from the list
    const handleRemoveLastSchool = () => {
        setEducationEntries(educationEntries.slice(0, -1));
    };

    return (
        <div>
            <h4>YOUR EDUCATIONAL BACKGROUND</h4>
            <form onSubmit={handleSubmit}>
                {/* School Name input field */}
                <div>
                    <label htmlFor="schoolName">School</label>
                    <input
                        type="text"
                        name="schoolName"
                        id="schoolName"
                        value={newEntry.schoolName}
                        onChange={handleInputChange}
                    />
                </div>
                {/* School Location input field */}
                <div>
                    <label htmlFor="schoolLocation">School Location</label>
                    <input
                        type="text"
                        name="schoolLocation"
                        id="schoolLocation"
                        value={newEntry.schoolLocation}
                        onChange={handleInputChange}
                    />
                </div>
                {/* Degree input field */}
                <div>
                    <label htmlFor="degree">Degree</label>
                    <input
                        type="text"
                        name="degree"
                        id="degree"
                        value={newEntry.degree}
                        onChange={handleInputChange}
                    />
                </div>
                {/* Major input field */}
                <div>
                    <label htmlFor="major">Major</label>
                    <input
                        type="text"
                        name="major"
                        id="major"
                        value={newEntry.major}
                        onChange={handleInputChange}
                    />
                </div>
                {/* Date input field */}
                <div>
                    <label htmlFor="studyDate">Date</label>
                    <input
                        type="text"
                        name="studyDate"
                        id="studyDate"
                        value={newEntry.studyDate}
                        onChange={handleInputChange}
                    />
                </div>
                {/* Button to add new education entry */}
                <button type="submit">Add School</button>
                {/* Button to remove the last added school */}
                <button type="button" onClick={handleRemoveLastSchool}>Remove Last School</button>
            </form>

            {/* Display Education information */}
            {educationEntries.length > 0 && (
                <div>
                    <h4>YOUR EDUCATION HISTORY</h4>
                    <ul>
                        {educationEntries.map((entry, index) => (
                            <li key={index}>
                                <p>{entry.schoolName}</p>
                                <p>{entry.major}</p>
                                <p>{entry.schoolLocation}</p>
                                <p>{entry.degree}</p>
                                <p>{entry.studyDate}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
