import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import type { FormEvent } from "react";
import { useActivities } from "../../../lib/hooks/useActivities";

export default function ActivityForm() {
  const { updateActivity, createActivity } = useActivities();
  const activity = {} as Activity;
  const closeForm = () => {
    console.log("close the form");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data: { [key: string]: FormDataEntryValue } = {};
    const formData = new FormData(event.currentTarget);

    formData.forEach((value, key) => {
      data[key] = value;
    });

    if (activity) {
      data.id = activity.id;
      await updateActivity.mutateAsync(data as unknown as Activity);
      closeForm();
    } else {
      await createActivity.mutateAsync(data as unknown as Activity);
      closeForm();
    }
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
          <Button
            type="submit"
            color="success"
            variant="contained"
            disabled={updateActivity.isPending}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
