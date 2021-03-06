import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function ErrorNotification({loggenIn}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div className={classes.root}>

      {loggenIn ?  
        <Alert severity="error">Please check loggin credential</Alert> :  <Alert severity="success">awesome you logged in</Alert> }
     
    </div>
  );
}
