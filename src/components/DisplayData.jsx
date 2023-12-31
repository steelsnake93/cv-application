// /src//components/DisplayData.jsx
import { Paper, Typography, Box, styled, Grid } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Phone } from "@mui/icons-material";
import LinkIcon from "@mui/icons-material/Link";

const StyledPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  margin: theme.spacing(2),
  backgroundColor: "#f5f5f5",
}));
const StyledHeader = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(5),
  textAlign: "left",
}));

const StyledSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5),
}));

const StyledSectionTitle = styled(Typography)({
  fontWeight: "bold",
  textDecoration: "underline",
});
const StyledListItem = styled(Typography)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
}));
const StyledContactItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

const formatDate = (dateString) => {
  if (!dateString) return "present";
  const date = new Date(dateString);
  const month = date.toLocaleString("default", { month: "2-digit" });
  const year = date.getFullYear();
  return `${month}/${year}`;
};
export const DisplayData = ({ formData, printRef }) => {
  const { generalInfo, education, experience } = formData;
  if (!formData) {
    return <div>No data submitted yet.</div>;
  }
  return (
    <StyledPaper ref={printRef}>
      {generalInfo && (
        <StyledHeader>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {formData.generalInfo.firstName} {formData.generalInfo.lastName}
            <Typography variant="h6" sx={{ paddingBottom: "10px" }}>
              {formData.generalInfo.title}
            </Typography>
          </Typography>
          <StyledContactItem>
            <EmailIcon fontSize="small" /> {formData.generalInfo.email}
            <Phone fontSize="small" /> {formData.generalInfo.phoneNumber}
            <LocationOnIcon fontSize="small" /> {generalInfo.location}
            <LinkIcon fontSize="small" /> {generalInfo.websiteLink}
          </StyledContactItem>
        </StyledHeader>
      )}

      {experience && experience.length > 0 && (
        <StyledSection>
          <StyledSectionTitle variant="h6">Experience</StyledSectionTitle>
          {experience.map((job, index) => (
            <Box key={index} sx={{ my: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1">
                    <strong> {job.position} </strong>
                  </Typography>
                  <Typography variant="body1">{job.companyName}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1" sx={{ textAlign: "right" }}>
                    {formatDate(job.startDate)} - {formatDate(job.endDate)}
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: "right" }}>
                    {" "}
                    {job.jobLocation}
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="body1" sx={{ mt: 1 }}>
                {job.description}
              </Typography>
              {job.responsibilities && Array.isArray(job.responsibilities) ? (
                <ul>
                  <StyledListItem>
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </StyledListItem>
                </ul>
              ) : (
                <ul>
                  <StyledListItem>
                    <li>{job.responsibilities}</li>
                  </StyledListItem>
                </ul>
              )}
            </Box>
          ))}
        </StyledSection>
      )}

      {education && education.length > 0 && (
        <StyledSection>
          <StyledSectionTitle variant="h6">Education</StyledSectionTitle>
          {education.map((school, index) => (
            <Box key={index} sx={{ my: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1">
                    <strong>{school.schoolName}</strong>
                  </Typography>
                  <Typography variant="body1">
                    <strong>
                      {school.degree} {school.major}
                    </strong>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1" sx={{ textAlign: "right" }}>
                    {formatDate(school.startDate)} -{" "}
                    {formatDate(school.endDate)}
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: "right" }}>
                    {school.institution}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          ))}
        </StyledSection>
      )}
    </StyledPaper>
  );
};
