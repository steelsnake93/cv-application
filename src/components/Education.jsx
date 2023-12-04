import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';

// Define the Education component
export default function Education() {
    // State for storing multiple education entries
    const [educationEntries, setEducationEntries] = useState([]);
    // State for storing form data for a new entry
    const [newEntry, setNewEntry] = useState({
        id: uuidv4(),
        schoolName: "",
        schoolLocation: "",
        degree: "",
        major: "",
        startDate: new Date(),
        endDate: new Date(),
        isCurrent: false
    });

    // Handle changes in start date
    const handleStartDateChange = (date) => {
        setNewEntry({ ...newEntry, startDate: date });
    };

    // Handle changes in end date
    const handleEndDateChange = (date) => {
        setNewEntry({ ...newEntry, endDate: date });
    };

    // Handle changes in current study checkbox
    const handleCurrentStudyChange = (e) => {
        const isCurrentlyStudying = e.target.checked;
        setNewEntry({
            ...newEntry,
            isCurrent: isCurrentlyStudying,
            endDate: isCurrentlyStudying ? new Date() : newEntry.endDate
        });
    };

    // Handle input changes and update the state for the new entry
    const handleInputChange = (e) => {
        setNewEntry({ ...newEntry, [e.target.name]: e.target.value });
    };

    // Handle form submission to add a new education entry
    const handleSubmit = (e) => {
        e.preventDefault();
        setEducationEntries([...educationEntries, newEntry]);
        // Reset the new entry form after submission
        setNewEntry({
            id: uuidv4(),
            schoolName: "",
            schoolLocation: "",
            degree: "",
            major: "",
            startDate: new Date(),
            endDate: new Date(),
            isCurrent: false
        });
    };

    // Function to remove the specific school from the list
    const handleRemoveEntry = (id) => {
        setEducationEntries(educationEntries.filter(entry => entry.id !== id));
    };

    return (
        <div>
            <h4>YOUR EDUCATIONAL BACKGROUND</h4>
            <form onSubmit={handleSubmit}>
                {/* Input fields for education details */}
                <div>
                    <label htmlFor="schoolName">School Name</label>
                    <input
                        type="text"
                        name="schoolName"
                        id="schoolName"
                        value={newEntry.schoolName}
                        onChange={handleInputChange}
                    />
                </div>
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
                {/* Date pickers for start and end dates */}
                <div>
                    <label htmlFor="startDate">Start Date</label>
                    <DatePicker
                        id="startDate"
                        selected={newEntry.startDate}
                        onChange={handleStartDateChange}
                        dateFormat="MMM yyyy"
                    />
                </div>
                <div>
                    <label htmlFor="endDate">End Date</label>
                    <DatePicker
                        id="endDate"
                        selected={newEntry.endDate}
                        onChange={handleEndDateChange}
                        disabled={newEntry.isCurrent}
                        dateFormat="MMM yyyy"
                    />
                    <label htmlFor="present">
                        <input
                            type="checkbox"
                            id="present"
                            checked={newEntry.isCurrent}
                            onChange={handleCurrentStudyChange}
                        />
                        Present
                    </label>
                </div>
                {/* Button to add new education entries */}
                <button type="submit">Add School</button>
            </form>

            {/* Display Education information */}
            {educationEntries.length > 0 && (
                <div>
                    <h4>YOUR EDUCATION HISTORY</h4>
                    <ul>
                        {educationEntries.map((entry) => (
                            <li key={entry.id}>
                                {/* Displaying each education entry */}
                                <p>{entry.schoolName}</p>
                                <p>{entry.major}</p>
                                <p>{entry.schoolLocation}</p>
                                <p>{entry.degree}</p>
                                <p>Start Date: {format(entry.startDate, 'MMM yyyy')}</p>
                                <p>End Date: {entry.isCurrent ? 'Present' : format(new Date(entry.endDate), 'MMM yyyy')}</p>
                                {/* Button to remove an education entry */}
                                <button type="button" onClick={() => handleRemoveEntry(entry.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
