import React from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import Box from "@mui/material/Box";
import { Stack } from "@mui/joy";
import Typography from "@mui/material/Typography";
import Card from "@mui/joy/Card";

function Skill() {
  return (
    <>
      <div style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
        <Navbar />
        <Sidebar />
        <Card style={{ width: '100vh', minHeight: '35vh', padding: '20px', backgroundColor: '#ffffff', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px', marginBottom: '15px' }}>
          <Box sx={{ mb: 1 }}>
            <Typography sx={{ fontSize: 25, fontWeight: 'bolder' }} variant="h1">
              Technical Skills
            </Typography>
            <hr style={{ borderTop: '1px solid #ccc' }} />
            <Stack direction="column" spacing={1} sx={{ my: 1 }}>
              <Typography variant="h2" style={{ fontSize: 18, fontWeight: 'bolder' }}>
                Languages: <span style={{ fontWeight: 'normal' }}>C++, Java, PHP, JavaScript</span>
              </Typography>
              <Typography variant="h2" style={{ fontSize: 18, fontWeight: 'bolder' }}>
                Technologies: <span style={{ fontWeight: 'normal' }}>Git, GitHub, jQuery, Ajax, ReactJs, NodeJs, Bootstrap, HTML, CSS, Postman, WordPress, Visual Studio Code</span>
              </Typography>
              <Typography variant="h2" style={{ fontSize: 18, fontWeight: 'bolder' }}>
                Concepts: <span style={{ fontWeight: 'normal' }}>Operating Systems, Data Structure and Algorithm, Oops, Networking, System Design</span>
              </Typography>
              <Typography variant="h2" style={{ fontSize: 18, fontWeight: 'bolder' }}>
                General: <span style={{ fontWeight: 'normal' }}>Flexibility, Team Work, Effective Communication, Determination, Quick learner, Problem-Solving</span>
              </Typography>
            </Stack>
          </Box>
        </Card>
      </div>
    </>
  );
}

export default Skill;
