import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import {Box, Grid, makeStyles, List, ListItem} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%'
  },
  leftMenu: {
    height: '100%',
    display: 'flex',
    flexFlow: 'column'
  },
  leftMenuHeader: {
    flex: '0 1 auto',
    border: '1px solid'
  },
  leftMenuList: {
    flex: '1 1 auto',
    border: '1px solid lightgreen',
    position: 'relative',
    height: '100%'
  },
  leftMenuListInner: {
    position: 'absolute',
    overflow: 'scroll',
    'overflow-x': 'hidden',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  leftMenuPagination: {
    flex: '0 1 auto',
    border: '1px solid'
  },
  messagesBlock: {
    display: 'flex',
    flexFlow: 'column',
    height: '100%',
    justifyContent: 'flex-end'
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Grid container className={classes.root}>
        <Grid item xs={3}>
          <Box className={classes.leftMenu}>
            <Box className={classes.leftMenuHeader}>
              top title
            </Box>
            <Box className={classes.leftMenuList}>
              <Box className={classes.leftMenuListInner}>
                {new Array(100).fill(1).map((_, index) => <Box key={index}>item {index}</Box>)}
              </Box>
            </Box>
            <Box className={classes.leftMenuPagination}>
              bottom pagination
            </Box>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Box className={classes.messagesBlock}>
            <Box>
              <List>
                <ListItem>
                  Message 1
                </ListItem>
                <ListItem>
                  Message 2
                </ListItem>
                <ListItem>
                  Message 3
                </ListItem>
                <ListItem>
                  Message 4
                </ListItem>
              </List>
            </Box>
            <Box xs={12} mx={2}>
              <TextField
                  fullWidth
                  id="standard-multiline-static"
                  label="Multiline"
                  multiline
                  rows={4}
                  defaultValue="Default Value"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
