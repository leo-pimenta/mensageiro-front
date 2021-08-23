import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyle = makeStyles({
    container: {
        '&:hover': {
            backgroundColor: '#000000'
        }
    },
    header: {
        padding: '0.8rem',
        cursor: 'pointer'
    },
    body: {
        marginLeft: '1rem',
        padding: '0.5rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        maxWidth: '90%',
        border: '1px solid #ffffff',
        borderRadius: '16px'
    },
    bodyContainer: {
        paddingBottom: '1rem',
    }
})

function Notification (props) {
    const [ open, setOpen ] = React.useState(false);
    
    const header = props?.header ?? 'Pass in a text prop';
    const expands = props?.expands ?? false;
    const classes = useStyle();
    const body = props?.body ?? <Grid>pass in a body prop</Grid>;
    
    function changeOpenStatus() {
        if (expands) {
            setOpen(!open)
        }
    }

    function getNotificationBody() {
        if (open) {
            return (
                <Grid container className={classes.bodyContainer}>
                    <Grid container className={classes.body}>
                        {body}
                    </Grid>
                </Grid>
            );
        }
    }

    function getOpenIcon() {
        if (expands) {
            return (
                <Grid item xs='1'>
                   { open ? <ExpandLessIcon></ExpandLessIcon> : <ExpandMoreIcon></ExpandMoreIcon> } 
                </Grid>
            );
        }
    }
    
    return (
        <Grid className={classes.container}>
            <Grid 
                container 
                alignItems='center'
                className={classes.header}
                onClick={changeOpenStatus}
            >
                <Grid item xs='11'>
                    {header}
                </Grid>

                { getOpenIcon() }
            </Grid>

            { getNotificationBody() }
        </Grid>
    )
}

export default Notification