// /src//components/Header.jsx
import {
  AppBar,
  Button,
  Container,
  FormControlLabel,
  Stack,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export const Header = ({ onTogglePreview, printRef }) => {
  const downloadPDF = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(data, "JPEG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("cv.pdf");
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
            }}
          >
            ResumeRanger
          </Typography>
          <Stack spacing={2} direction="row">
            <FormControlLabel
              control={<Switch color="default" onChange={onTogglePreview} />}
              label="Live Preview"
              labelPlacement="start"
              sx={{ marginRight: 2, color: "inherit" }}
            />
            <Button
              onClick={downloadPDF}
              variant="contained"
              size="small"
              color="success"
            >
              Download PDF
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
