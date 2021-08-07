import {makeStyles,Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>({
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
      backgroundColor:theme.palette.primary.main,
    },
    
  }));

  export default useStyles