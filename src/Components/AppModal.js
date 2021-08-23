import { Dialog, Grid, DialogContent, DialogTitle } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

const useStyle = makeStyles(theme => ({
    dialog: {
        boxShadow: '0.2rem 0.2rem black',
    },
    body: {
        backgroundColor: '#131313',
    },
    header: {
        backgroundColor: '#0c0c0c',
        color: '#ffffff' 
    },
    headerText: {
        marginTop: '0',
        marginBottom: '0.5rem'
    },
    closeIcon: {
        position: 'absolute',
        left: '90%',
        cursor: 'pointer'
    }
}));

function AppModal (props) {
    let open = props?.open ?? false;
    let onClose = props?.onClose ?? function () {};
    let label = props?.label ?? '';
    let body = props?.body ?? <div>Pass in a body prop</div>;
    let headerText = props?.headerText ?? 'Pass in a headerText prop';

    const classes = useStyle();

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby={label}
            hideBackdrop
            className={classes.dialog}
            fullWidth 
            maxWidth='xs'
            PaperProps={ { square: 'false', elevation: '10' } }
            >

            <DialogTitle className={classes.header}>
                <Grid container justifyContent='center'>
                    <h4 className={classes.headerText}>{headerText}</h4>
                    <CloseIcon className={classes.closeIcon} onClick={onClose}></CloseIcon>
                </Grid>
            </DialogTitle>

            <DialogContent dividers className={classes.body}>
                {body}
            </DialogContent>
        </Dialog>
    );
}

export default AppModal;