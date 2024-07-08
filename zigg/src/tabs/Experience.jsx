import React from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import Box from "@mui/material/Box";
import AspectRatio from "@mui/joy/AspectRatio";
import { Stack } from "@mui/joy";
import Typography from '@mui/material/Typography';
import Card from "@mui/joy/Card";

const Experience = () => {
  return (
    <>
      <div style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
        <Navbar />
        <Sidebar />

        {/* Experience no 1 */}
        <Card style={{ width: '100vh', minHeight: '35vh', padding: '20px', marginBottom: '15px', backgroundColor: '#ffffff', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
          <Box sx={{ mb: 1 }}>
            <Stack direction="row" spacing={1} sx={{ display: { xs: "none", md: "flex" }, my: 1 }}>
              <Typography sx={{ fontWeight: "bolder" }} variant="h5">
                GeeksForGeeks
              </Typography>
              <Typography variant="h6">Technical Content Reviewer</Typography>
              <Typography variant="body1">September 2023</Typography>
              <Typography variant="body1">February 2024</Typography>
              <AspectRatio ratio="4.5" maxHeight={200} sx={{ flex: 1, minWidth: 100, borderRadius: "1%" }}>
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20190328185307/gfg28.png"
                  srcSet="https://media.geeksforgeeks.org/wp-content/uploads/20190328185307/gfg28.png 5x"
                  loading="lazy"
                  alt="GeeksForGeeks Logo"
                />
              </AspectRatio>
            </Stack>
            <hr />
            <Typography variant="body1">
              <ul>
                <li>Authored 15+ high-quality articles on Software Testing, OOPS, Data Structures, Algorithms, and DBMS.</li>
                <li>Reviewed over 500+ articles to ensure compliance with platform guidelines and maintain credibility.</li>
                <li>Enhanced and optimized 15+ existing articles for improved accuracy and relevance.</li>
                <li>Collaborated effectively with the GeeksForGeeks editorial team to uphold content quality and consistency.</li>
              </ul>
            </Typography>
          </Box>
        </Card>

        {/* Experience no 2 */}
        <Card style={{ width: '100vh', minHeight: '35vh', padding: '20px', marginBottom: '15px', backgroundColor: '#ffffff', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
          <Box sx={{ mb: 1 }}>
            <Stack direction="row" spacing={3} sx={{ display: { xs: "none", md: "flex" }, my: 1 }}>
              <Typography sx={{ fontWeight: "bolder" }} variant="h5">
                Think Realty
              </Typography>
              <Typography variant="h6">PHP Developer Intern</Typography>
              <Typography variant="body1">November 2021</Typography>
              <Typography variant="body1">January 2022</Typography>
              <AspectRatio ratio="4.5" maxHeight={200} sx={{ flex: 1, minWidth: 100, borderRadius: "20%" }}>
                <img
                  src="https://thinkrealty.com/wp-content/uploads/2023/01/TR_v2_4color.png"
                  srcSet="https://thinkrealty.com/wp-content/uploads/2023/01/TR_v2_4color.png 5x"
                  loading="lazy"
                  alt="Think Realty Logo"
                />
              </AspectRatio>
            </Stack>
            <hr />
            <Typography variant="body1">
              <ul>
                <li>Maintained and enhanced a CRM system, focusing on improving user experience and adding new functionality based on company requirements.</li>
                <li>Implemented a chat API and PHP integration to streamline communication by sending details to customers via WhatsApp through a specific link.</li>
                <li>Contributed to the development of an automated invoicing system by using a PHP library.</li>
                <li>Used PHP, AJAX, jQuery, API, SQL, and JavaScript to create interactive and responsive web applications.</li>
              </ul>
            </Typography>
          </Box>
        </Card>

        {/* Experience no 3 */}
        <Card style={{ width: '100vh', minHeight: '35vh', padding: '20px', marginBottom: '15px', backgroundColor: '#ffffff', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
          <Box sx={{ mb: 1 }}>
            <Stack direction="row" spacing={3} sx={{ display: { xs: "none", md: "flex" }, my: 1 }}>
              <Typography sx={{ fontWeight: "bolder" }} variant="h5">
                Hawk Digital
              </Typography>
              <Typography variant="h6">Web Developer Intern</Typography>
              <Typography variant="body1">March 2021</Typography>
              <Typography variant="body1">November 2021</Typography>
              <AspectRatio ratio="4.5" maxHeight={200} sx={{ flex: 1, minWidth: 100, borderRadius: "20%" }}>
                <img
                  src="https://hawkdigital.agency/wp-content/uploads/thegem-logos/logo_1f25f9fbb3bdbb338b463cf41a3368d3_2x.png"
                  srcSet="https://hawkdigital.agency/wp-content/uploads/thegem-logos/logo_1f25f9fbb3bdbb338b463cf41a3368d3_2x.png 5x"
                  loading="lazy"
                  alt="Hawk Digital Logo"
                />
              </AspectRatio>
            </Stack>
            <hr />
            <Typography variant="body1">
              <ul>
                <li>Managed and Developed 15+ websites ensuring adherence to client specifications.</li>
                <li>Specialized in WordPress customization and SEO optimization to enhance visibility and search rankings.</li>
                <li>Crafted responsive, feature-rich websites using PHP, MySQL, HTML, CSS, and JavaScript.</li>
              </ul>
            </Typography>
          </Box>
        </Card>
      </div>
    </>
  );
};

export default Experience;
