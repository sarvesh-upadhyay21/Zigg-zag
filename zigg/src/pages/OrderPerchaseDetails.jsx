import React from "react";
import Sidebar from "../component/Sidebar";
import { Tabs } from "@mui/joy";
import { TabList } from "@mui/joy";
import { TabPanel } from "@mui/joy";
import { Typogaphy } from "@mui/joy";
import Tab, { tabClasses } from "@mui/joy/Tab";
import Box from "@mui/material/Box";
import Navbar from "../component/Navbar";
import PerchaseOrderDetails from './../PurchaseTab/PerchaseOrderDetails';
import AddComponentDetails from './../PurchaseTab/AddComponentDetails';

function OrderPerchaseDetails() {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Tabs
              aria-label="tabs"
              defaultValue={0}
              sx={{ bgcolor: "transparent" }}
            >
              <TabList
                disableUnderline
                sx={{
                  p: 0.5,
                  gap: 1,
                  borderRadius: "xl",
                  backgroundColor: "#ffffff",
                  padding: 1,
                  boxShadow:
                    "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
                  // bgcolor: "background.level1",
                  [`& .${tabClasses.root}[aria-selected="true"]`]: {
                    boxShadow: "sm",
                    borderRadius: "xl",
                    bgcolor: "#eceff1",
                  },
                }}
              >
                <Tab disableIndicator>PerchaseOrderDetails</Tab>
                <Tab disableIndicator>AddComponentDetails</Tab>
              
              </TabList>
              <TabPanel value={0}>
                <PerchaseOrderDetails />
              </TabPanel>
              <TabPanel value={1}>
                <AddComponentDetails />
              </TabPanel>
              
            </Tabs>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default OrderPerchaseDetails;
