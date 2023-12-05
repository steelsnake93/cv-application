import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const InfoContext = createContext();
export const InfoProvider = ({ children }) => {
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    link: ''
  });

  const [submittedInfo, setSubmittedInfo] = useState(null);
  const [educationEntries, setEducationEntries] = useState([]);
  const [experienceEntries, setExperienceEntries] = useState([]);

  const contextValue = {
    info,
    setInfo,
    submittedInfo,
    setSubmittedInfo,
    educationEntries,
    setEducationEntries,
    experienceEntries,
    setExperienceEntries
  };

  return (
    <InfoContext.Provider value={contextValue}>
      {children}
    </InfoContext.Provider>
  );
};

InfoProvider.propTypes = {
  children: PropTypes.node.isRequired
};
