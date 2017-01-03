import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green600, grey900} from 'material-ui/styles/colors';

const themeDefault = getMuiTheme({
  palette: {
  },
  appBar: {
    height: 57,
    color: green600
  },
  drawer: {
    width: 230,
    color: grey900
  },
  raisedButton: {
    primaryColor: green600,
  }
});


export default themeDefault;