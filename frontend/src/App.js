import "./App.css";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.backgroundColor,
    fontSize: '16px'
  }
}))

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Frontend is alive :)</h1>
    </div>
  );
}

export default App;
