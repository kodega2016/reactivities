import {
  Box,
  Button,
  ButtonGroup,
  List,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { userStore } from "../../lib/hooks/useStore";
import { observer } from "mobx-react-lite";

const Counter = observer(function Counter() {
  const { counterStore } = userStore();

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", my: 4 }}>
      <Paper sx={{ width: "60%", p: 4, mr: 2 }}>
        <Typography variant="h4">{counterStore.title}</Typography>
        <Typography variant="h6">The count is:{counterStore.count}</Typography>
        <ButtonGroup>
          <Button
            variant="contained"
            color="primary"
            onClick={() => counterStore.increment()}
          >
            Increment
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => counterStore.increment(5)}
          >
            Increment By 5
          </Button>

          <Button
            variant="contained"
            color="error"
            onClick={() => counterStore.decrement()}
          >
            Decrement
          </Button>
        </ButtonGroup>
      </Paper>
      <Paper sx={{ width: "40%", p: 4 }}>
        <Typography>Counter Events ({counterStore.eventCount})</Typography>
        <List>
          {counterStore.events.map((event, index) => (
            <ListItemText key={index}>{event}</ListItemText>
          ))}
        </List>
      </Paper>
    </Box>
  );
});

export default Counter;
