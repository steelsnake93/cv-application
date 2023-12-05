import { useState, useContext } from "react";
import { InfoContext } from './InfoContext';
import { v4 as uuidv4 } from 'uuid';
import CustomDatePicker from "./CustomDatePicker";
import { format } from "date-fns";

// Define the Experience component
export default function Experience() {
    // State to store multiple work experience entries
    const { experienceEntries, setExperienceEntries } = useContext(InfoContext);
    // State to store data for a new or currently editing entry
    const [newEntry, setNewEntry] = useState(initialEntryState());
    // State to track the ID of an entry currently being edited
    const [editingId, setEditingId] = useState(null);
    // Initial state setup for a new experience entry
    function initialEntryState() {
        return {
            id: uuidv4(),
            companyName: "",
            jobTitle: "",
            jobLocation: "",
            startDate: new Date(),
            endDate: "",
            isCurrent: false,
            jobResponsibilities: ""
        };
    }
    // Function to handle changes in start date
    const handleStartDateChange = (date) => {
        setNewEntry({ ...newEntry, startDate: date });
    };
    // Function to handle changes in end date
    const handleEndDateChange = (date) => {
        setNewEntry({ ...newEntry, endDate: date });
    };
    // Function to handle changes in input fields
    const handleInputChange = (e) => {
        setNewEntry({ ...newEntry, [e.target.name]: e.target.value });
    };
    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const entry = { ...newEntry, endDate: newEntry.endDate === '' ? null : newEntry.endDate };
        if (editingId) {
            // Update an existing entry
            setExperienceEntries(experienceEntries.map(e => e.id === editingId ? entry : e));
            setEditingId(null);
        } else {
            // Add a new entry
            setExperienceEntries([...experienceEntries, entry]);
        }
        setNewEntry(initialEntryState());
    };
    // Function to remove a specific work experience entry
    const handleRemoveEntry = (id) => {
        setExperienceEntries(experienceEntries.filter(entry => entry.id !== id));
    };
    return (
        <div>
            <h3>Work Experience</h3>
            <form onSubmit={handleSubmit}>
                {/* Input fields for job experience details */}
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
                {/* Button to add new job experience entries */}
                <button type="submit">Add Job</button>
            </form>
            {/* Display list of work experience entries */}
            {experienceEntries.length > 0 && (
                <div>
                    <h4>Experince</h4>
                    <ul>
                        {experienceEntries.map((entry) =>
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
