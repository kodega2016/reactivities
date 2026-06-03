import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import type { FormEvent } from "react";

type Props = {
  closeForm: () => void;
  activity: Activity | undefined;
  submitForm: (activity: Activity) => void;
};

export default function ActivityForm({
  closeForm,
  activity,
  submitForm,
}: Props) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data: { [key: string]: FormDataEntryValue } = {};
    const formData = new FormData(event.currentTarget);

    formData.forEach((value, key) => {
      data[key] = value;
    });

    if (activity) data.id = activity.id;
    submitForm(data as unknown as Activity);
  };

  return (
    <Paper sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Create new activity
      </Typography>
      <Box
        component={"form"}
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", mb: "3", gap: 1 }}
      >
        <TextField name="title" label="Title" value={activity?.title} />
        <TextField
          name="description"
          label="Description"
          multiline
          rows={3}
          value={activity?.description}
        />
        <TextField
          label="Category"
          value={activity?.category}
          name="category"
        />
        <TextField
          name="date"
          label="Date"
          value={activity?.date}
          type="date"
        />
        <TextField name="city" label="City" value={activity?.city} />
        <TextField name="venue" label="Venue" value={activity?.venue} />
        <Box sx={{ display: "flex", justifyContent: "end", gap: 2 }}>
          <Button color="inherit" onClick={closeForm}>
            Cancel
          </Button>
          <Button type="submit" color="success" variant="contained">
            Save
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
