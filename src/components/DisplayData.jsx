import { useContext } from 'react';
import { InfoContext } from './InfoContext';
import { format } from 'date-fns';

const DisplayData = () => {
    // Accessing shared context data
    const { submittedInfo, educationEntries, experienceEntries } = useContext(InfoContext);

    if (!submittedInfo) {
        return <div>No data submitted yet.</div>;
    }

    return (
        <div>
            <h2>General Information</h2>
            <p><strong>Name:</strong> {submittedInfo.name}</p>
            <p><strong>Email:</strong> {submittedInfo.email}</p>
            <p><strong>Phone:</strong> {submittedInfo.phone}</p>
            <p><strong>Address:</strong> {submittedInfo.address}</p>
            <p><strong>Link:</strong> <a href={submittedInfo.link} target="_blank" rel="noopener noreferrer">{submittedInfo.link}</a></p>

            <h2>Education</h2>
            {educationEntries.length > 0 && (
                <ul>
                    {educationEntries.map((entry) => (
                        <li key={entry.id}>
                            <p><strong>School:</strong> {entry.schoolName}</p>
                            <p><strong>Major:</strong> {entry.major}</p>
                            <p><strong>Location:</strong> {entry.schoolLocation}</p>
                            <p><strong>Degree:</strong> {entry.degree}</p>
                            <p><strong>Start Date:</strong> {format(entry.startDate, 'MMM yyyy')}</p>
                            <p><strong>End Date:</strong> {entry.isCurrent ? 'Present' : (entry.endDate ? format(new Date(entry.endDate), 'MMM yyyy') : 'Present')}</p>
                        </li>
                    ))}
                </ul>
            )}

            <h2>Experience</h2>
            {experienceEntries.length > 0 && (
                <ul>
                    {experienceEntries.map((entry) => (
                        <li key={entry.id}>                            <p><strong>Company Name:</strong> {entry.companyName}</p>
                            <p><strong>Job Title:</strong> {entry.jobTitle}</p>
                            <p><strong>Job Location:</strong> {entry.jobLocation}</p>
                            <p><strong>Start Date:</strong> {format(entry.startDate, 'MMM yyyy')}</p>
                            <p><strong>End Date:</strong> {entry.isCurrent ? 'Present' : (entry.endDate ? format(new Date(entry.endDate), 'MMM yyyy') : 'Present')}</p>
                            <p><strong>Responsibilities:</strong> {entry.jobResponsibilities}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DisplayData;
