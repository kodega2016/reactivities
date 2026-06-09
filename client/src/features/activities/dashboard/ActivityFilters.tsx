import { FilterList, Event } from "@mui/icons-material";
import { Box, ListItemText, MenuList, Paper, Typography } from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function ActivityFilters() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Paper sx={{ p: 2 }}>
        <Box sx={{ width: "100%", color: "primary.main" }}>
          <Typography
            variant="h6"
            sx={{ display: "flex", alignItems: "center", mb: 1 }}
          >
            <FilterList sx={{ mr: 1 }} />
            Filters
          </Typography>
          <MenuList>
            <ListItemText primary="All Activities" />
            <ListItemText primary="I'm Going" />
            <ListItemText primary="I'm Hosting" />
          </MenuList>
        </Box>
      </Paper>
      <Paper sx={{ p: 2 }}>
        <Box>
          <Typography
            variant="h6"
            sx={{ display: "flex", alignItems: "center", mb: 1 }}
          >
            <Event sx={{ mr: 1 }} />
            Select Date
          </Typography>
          <Calendar />
        </Box>
      </Paper>
    </Box>
  );
}
