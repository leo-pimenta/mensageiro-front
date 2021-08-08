import { createTheme } from '@material-ui/core/styles'

function Theme() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#ffffff'
            },
            type: 'dark'
        }
    })

    return theme;
}

export default Theme