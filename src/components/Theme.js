import { createTheme } from "@material-ui/core/styles";

const arcBlue = "#8468CA";
const arcOrange = "#E6E1F4";
// const arcGrey = "#868686";

export default createTheme({
palette: {
    common: {
      main: arcBlue,
      secondary: arcOrange,
      last: 'red'
    },
    primary: {
      main: arcBlue
    },
    secondary: {
      main: arcOrange
    }
  }
});
