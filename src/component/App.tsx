import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <Grid container columns={3}>
      <Grid item xs={1}>
        1
      </Grid>
      <Grid item xs={1}>
        2
      </Grid>
      <Grid item xs={1}>
        3
      </Grid>
    </Grid>
  );
}

export default App;
