import { createMuiTheme } from '@material-ui/core/styles'

let defaultTheme = createMuiTheme({
    palette:{
        common:{
            gunPowder: '#43425D'
        },
        blackSqueeze:{
            main: '#F0F4F9'
        },
        primary: {
            main: '#4949F0'
        },
        secondary: {
            main: '#EDBD00'
        },
        error: {
            main: '#FE5858'
        }
    },
    typography: {
        h1:{
            fontFamily: 'Montserrat',
            fontWeight: 500,
            fontSize: '1rem',
        },
        h6:{
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
        },
        body1: {
            fontFamily: 'Montserrat',
            fontWeight: 500,
            fontSize: '1rem',
        },
        body2:{
            fontFamily: 'Montserrat',
            fontWeight: 500,
            fontSize: '0.875rem',
        },
        subtitle1:{
            fontFamily: 'Montserrat',
            fontWeight: 500,
            fontSize: '0.8rem',
        },
    },
    
})

const { breakpoints } = defaultTheme

const theme = {
  ...defaultTheme,
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: "1rem",
        [breakpoints.down("lg")]: {
          fontSize: "0.8rem"
        }
      },
      h6: {
        fontSize: "1rem",
        [breakpoints.down("lg")]: {
          fontSize: "0.8rem"
        }
      },
      subtitle1: {
        fontSize: "0.8rem",
        [breakpoints.down("lg")]: {
          fontSize: "0.7rem"
        }
      },
      subtitle2: {
        fontSize: "0.8rem",
        [breakpoints.down("lg")]: {
          fontSize: "0.7rem"
        }
      },
      body1: {
        fontSize: "1rem",
        [breakpoints.down("lg")]: {
          fontSize: "0.89rem"
        },
        [breakpoints.down("md")]: {
          fontSize: "0.67rem"
        }
      },
      body2: {
        fontSize: "0.875rem",
        [breakpoints.down("lg")]: {
          fontSize: "0.59rem"
        }
      },
      counter: {
        fontSize: "2rem",
        [breakpoints.down("lg")]: {
          fontSize: "1.4rem"
        }
      }
    }
  }
}


export default theme;