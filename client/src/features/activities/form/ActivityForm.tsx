import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import type { FormEvent } from "react";
import { useActivities } from "../../../lib/hooks/useActivities";

type Props = {
  closeForm: () => void;
  activity: Activity | undefined;
};

export default function ActivityForm({ closeForm, activity }: Props) {
  const { updateActivity } = useActivities();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.forEach((defaultValue, key) => {
      data[key] = defaultValue;
    });

    if (activity) {
      data.id = activity.id;
      await updateActivity.mutateAsync(data as unknown as Activity);
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
        <TextField name="title" label="Title" defaultValue={activity?.title} />
        <TextField
          name="description"
          label="Description"
          multiline
          rows={3}
          defaultValue={activity?.description}
        />
        <TextField
          label="Category"
          defaultValue={activity?.category}
          name="category"
        />
        <TextField
          name="date"
          label="Date"
          defaultValue={activity?.date}
          type="date"
        />
        <TextField name="city" label="City" defaultValue={activity?.city} />
        <TextField name="venue" label="Venue" defaultValue={activity?.venue} />
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
