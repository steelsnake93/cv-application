import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import CustomDatePicker from "./CustomDatePicker";
import { format } from "date-fns";

// Define the Education component
export default function Experience() {
    // State for storing multiple experience entries
    const [experinceEntries, setExperienceEntries] = useState([]);
    // State for storing form data for a new entry
    const [newEntry, setNewEntry] = useState({
        id: uuidv4(),
        companyName: "",
        jobTitle: "",
        jobLocation: "",
        startDate: new Date(),
        endDate: "",
        isCurrent: false,
        jobResponsibilities: ""
    });

    // Function handlers for date changes
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

    // Handle form submission to add a new experience entry
    const handleSubmit = (e) => {
        e.preventDefault();
        const entryToAdd = {
            ...newEntry,
            endDate: newEntry.endDate === '' ? null : newEntry.endDate
        };
        setExperienceEntries([...experinceEntries, entryToAdd]);
        setNewEntry({
            id: uuidv4(),
            companyName: "",
            jobTitle: "",
            jobLocation: "",
            startDate: new Date(),
            endDate: "",
            isCurrent: false,
            jobResponsibilities: ""
        });
    };

    const handleRemoveEntry = (id) => {
        setExperienceEntries(experinceEntries.filter(entry => entry.id !== id));
    };

    return (
        <div>
            <h3>Work Experience</h3>
            <form onSubmit={handleSubmit}>
                {/* Input fields for education details */}
                <div>
                    <label htmlFor="companyName">Company Name</label>
                    <input
                        type="text"
                        name="companyName"
                        id="companyName"
                        value={newEntry.companyName}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="jobTitle">Job Title</label>
                    <input
                        type="text"
                        name="jobTitle"
                        id="jobTitle"
                        value={newEntry.jobTitle}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="jobLocation">Job Location</label>
                    <input
                        type="text"
                        name="jobLocation"
                        id="jobLocation"
                        value={newEntry.jobLocation}
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
                <div>
                    <label htmlFor="jobResponsibilities">Responsibilities</label>
                    <input
                        type="text"
                        name="jobResponsibilities"
                        id="jobResponsibilities"
                        value={newEntry.jobResponsibilities}
                        onChange={handleInputChange}
                    />
                </div>
                {/* Button to add new experience entries */}
                <button type="submit">Add Job</button>
            </form>

            {experinceEntries.length > 0 && (
                <div>
                    <h4>Experince</h4>
                    <ul>
                        {experinceEntries.map((entry) =>
                            <li key={entry.id}>
                                <p>{entry.companyName}</p>
                                <p>{entry.jobTitle}</p>
                                <p>{entry.jobLocation}</p>
                                <p>Start Date: {format(entry.startDate, 'MMM yyyy')}</p>
                                <p>End Date: {entry.isCurrent ? 'Present' : (entry.endDate ? format(new Date(entry.endDate), 'MMM yyyy') : 'Present')}</p>
                                <p>{entry.jobResponsibilities}</p>
                                <button type="submit" onClick={() => handleRemoveEntry(entry.id)}>Remove</button>
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}
