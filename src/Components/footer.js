import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    footer: props => ({
        height: props.height,
        backgroundColor: '#2e2e2e',
        borderTop: 'outset 0.1rem #000000'
    }),
    text: {
        marginLeft: '1rem'
    }
}));

function Footer(props) {
    const classes = useStyles(props)
    
    return (
        <Grid container className={classes.footer}>
            <p className={classes.text} >Mensageiro 2021@</p>
        </Grid>
    );
}

export default Footer;