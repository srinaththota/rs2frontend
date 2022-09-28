import { createTheme } from '@mui/material'

const bluecol='#0b72b9'
const orangecol='#0ffba60'
const theme = createTheme({
    palette:{
        common:{
            blue:`${bluecol}`,
            orange:`${orangecol}`
        },
        primary:{
            main:`${bluecol}`
        },
        secondary:{
            main:`${orangecol}`
        }
    }
  });

  export default theme;