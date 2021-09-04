import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    footer: ({
        backgroundColor: '#2e2e2e',
        borderTop: 'outset 0.1rem #000000',
        height: '3.5rem'
    }),
    text: {
        marginLeft: '1rem'
    }
});

function Footer(props) {
    const classes = useStyles(props)
    
    return (
        <Grid container className={classes.footer}>
            <p className={classes.text}>Mensageiro 2021@</p>
        </Grid>
    );
}

export default Footer;