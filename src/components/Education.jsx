import { useState } from "react";
import CustomDatePicker from "./CustomDatePicker";
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';

// Education Component
export default function Education() {
    // State to store multiple education entries
    const [educationEntries, setEducationEntries] = useState([]);

    // State to store data for a new entry
    const [newEntry, setNewEntry] = useState({
        id: uuidv4(),
        schoolName: "",
        schoolLocation: "",
        degree: "",
        major: "",
        startDate: new Date(),
        endDate: "",
        isCurrent: false
    });

    // Function handlers for date change
    const handleStartDateChange = (date) => {
        setNewEntry({ ...newEntry, startDate: date });
    };

    const handleEndDateChange = (date) => {
        setNewEntry({ ...newEntry, endDate: date });
    };

    // Handle input changes and update the state for the new entry
    const handleInputChange = (e) => {
        setNewEntry({ ...newEntry, [e.target.name]: e.target.value });
    };

    // Handle form submission to add a new education entry
    const handleSubmit = (e) => {
        e.preventDefault();
        const entryToAdd = {
            ...newEntry,
            endDate: newEntry.endDate === '' ? null : newEntry.endDate
        };
        setEducationEntries([...educationEntries, entryToAdd]);
        setNewEntry({
            id: uuidv4(),
            schoolName: "",
            schoolLocation: "",
            degree: "",
            major: "",
            startDate: new Date(),
            endDate: "",
            isCurrent: false
        });
    };

    const handleRemoveEntry = (id) => {
        setEducationEntries(educationEntries.filter(entry => entry.id !== id));
    };

    return (
        <div>
            <h3>Education</h3>
            <form onSubmit={handleSubmit}>
                {/* Input fields for education details */}
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
                <div>
                    <label htmlFor="schoolLocation">Location</label>
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
                <CustomDatePicker
                    id="startDate"
                    label="Start Date"
                    selectedDate={newEntry.startDate}
                    handleDateChange={handleStartDateChange}
                />
                <CustomDatePicker
                    id="endDate"
                    label="End Date"
                    selectedDate={newEntry.isCurrent ? '' : newEntry.endDate}
                    handleDateChange={handleEndDateChange}
                    disabled={newEntry.isCurrent}
                    isEndDate={true}
                />
                {/* Button to add new education entries */}
                <button type="submit">Add School</button>
            </form>

            {/* Display Education information */}
            {educationEntries.length > 0 && (
                <div>
                    <h4>Education</h4>
                    <ul>
                        {educationEntries.map((entry) => (
                            <li key={entry.id}>
                                {/* Displaying each education entry */}
                                <p>{entry.schoolName}</p>
                                <p>{entry.major}</p>
                                <p>{entry.schoolLocation}</p>
                                <p>{entry.degree}</p>
                                <p>Start Date: {format(entry.startDate, 'MMM yyyy')}</p>
                                <p>End Date: {entry.isCurrent ? 'Present' : (entry.endDate ? format(new Date(entry.endDate), 'MMM yyyy') : 'Present')}</p>
                                <button type="submit" onClick={() => handleRemoveEntry(entry.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
