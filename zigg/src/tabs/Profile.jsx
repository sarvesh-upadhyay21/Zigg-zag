import React from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import Box from "@mui/material/Box";
import AspectRatio from "@mui/joy/AspectRatio";
import IconButton from "@mui/joy/IconButton";
import { Stack } from "@mui/joy";
import Typography from "@mui/material/Typography";
import Card from "@mui/joy/Card";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import SocialFlow from "./Socialicon";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";

function Profile() {
  return (
    <>
      <div style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
        <Navbar />
        <Sidebar />
        <Card style={{ width: '100vh', minHeight: '40vh', padding: '20px', backgroundColor: '#ffffff', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px', marginBottom: '15px' }}>
          <Box sx={{ mb: 1 }}>
            <Typography style={{ fontSize: '20px', fontWeight: 'bold' }} variant="h5">Personal info</Typography>
            <Typography style={{ fontSize: '14px', color: '#666' }} variant="body2">Customize how your profile information will appear to the networks.</Typography>
          </Box>
          <Divider />
          <Stack direction="row" spacing={3} sx={{ my: 1 }}>
            <Stack direction="column" spacing={1}>
              <AspectRatio ratio="1" maxHeight={300} sx={{ flex: 1, minWidth: 120, borderRadius: '100%' }}>
                <img
                  src="../public/usermy.jpg"
                  srcSet="../public/usermy.jpg 5x"
                  loading="lazy"
                  alt="User"
                />
              </AspectRatio>
              <IconButton
                aria-label="upload new picture"
                size="sm"
                variant="outlined"
                color="neutral"
                style={{
                  backgroundColor: '#fff',
                  position: 'absolute',
                  zIndex: 2,
                  borderRadius: '50%',
                  left: 100,
                  top: 170,
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                }}
              >
                <EditRoundedIcon />
              </IconButton>
            </Stack>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Stack spacing={1}>
                <FormLabel style={{ fontWeight: 'bold' }}>Name</FormLabel>
                <FormControl sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}>
                  <Input size="sm" placeholder="First name" defaultValue="Rohit" readOnly />
                  <Input size="sm" placeholder="Last name" defaultValue="Maurya" sx={{ flexGrow: 1 }} readOnly />
                </FormControl>
              </Stack>
              <Stack direction="row" spacing={2}>
                <FormControl>
                  <FormLabel style={{ fontWeight: 'bold' }}>Role</FormLabel>
                  <Input readOnly size="sm" defaultValue="Software Developer" />
                </FormControl>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel style={{ fontWeight: 'bold' }}>Email</FormLabel>
                  <Input
                    size="sm"
                    type="email"
                    startDecorator={<EmailRoundedIcon />}
                    placeholder="email"
                    defaultValue="rohitmaurya8026@gmail.com"
                    sx={{ flexGrow: 1 }}
                    readOnly
                  />
                </FormControl>
              </Stack>
              <div>
                <Typography style={{ fontSize: '20px', fontWeight: 'bold' }} variant="h6">Social Info</Typography>
                <SocialFlow />
              </div>
            </Stack>
          </Stack>
        </Card>
      </div>
    </>
  );
}

export default Profile;
