import React from 'react';
import { makeStyles, rgbToHex } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor:"black",
    color:"white"
  },
});

export default function CenteredTabs({toggleLinechart,toggleBarchart}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        centered
      >
        <Tab label="Bar chart" onClick={e => toggleLinechart(e)} />
        <Tab label="Line chart" onClick={e => toggleBarchart(e)} />
        <Tab label="Item Three" />
      </Tabs>
    </Paper>
  );
}
