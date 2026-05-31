import { Box, Button, Paper, TextField, Typography } from "@mui/material";

export default function ActivityForm() {
  return (
    <Paper sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Create new activity
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", mb: "3", gap: 1 }}>
        <TextField label="Title" />
        <TextField label="Description" multiline rows={3} />
        <TextField label="Category" />
        <TextField label="Date" type="date" />
        <TextField label="Venue" />
        <TextField label="City" />
        <Button variant="contained">Save</Button>
      </Box>
    </Paper>
  );
}
