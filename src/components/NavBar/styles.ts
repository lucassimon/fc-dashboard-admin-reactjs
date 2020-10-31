import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  toolbar: {
    backgroundColor: '#000', // keep right padding when drawer closed
  },
  title: {
    flexGrow: 1,
    textAlign: 'center'
  },
  logo: {
    width: 100,
    [theme.breakpoints.up('sm')]: {
      width: 170,
    }
  }
}));
