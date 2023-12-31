// /src/App.jsx
import { DisplayData } from "./components/DisplayData";
import { Header } from "./components/Header";
import { Box } from "@mui/material";
import { CVForm } from "./components/CVForm";
import { createContext } from "react";
import { useRef, useState } from "react";
import randomData from "./components/random_data.json";

const FormDataContext = createContext(null);

export default function App() {
  const printRef = useRef();
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState(randomData);

  const handleTogglePreview = () => {
    setShowPreview(!showPreview);
  };

  const handleFormDataChange = (newFormData) => {
    setFormData(newFormData);
  };
  return (
    <FormDataContext.Provider
      value={{
        submittedInfo: formData,
        educationEntries: formData.education,
        experienceEntries: formData.experience,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box>
          <Header printRef={printRef} onTogglePreview={handleTogglePreview} />
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexGrow: 1,
              "@media (max-width: 768px)": { flexDirection: "column" },
            }}
          >
            <CVForm onChange={handleFormDataChange} />
            <Box id="pdf-content" sx={{ width: { sm: "100%", md: "60%" } }}>
              <Box>
                {showPreview && (
                  <DisplayData printRef={printRef} formData={formData} />
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </FormDataContext.Provider>
  );
}
