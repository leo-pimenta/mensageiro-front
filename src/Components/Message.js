import { makeStyles, Grid } from '@material-ui/core';

const useStyle = makeStyles(props => ({
    message: props => ({
        backgroundColor: props.backgroundColor,
        paddingTop: '0.25rem',
        paddingBottom: '0.25rem',
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
        margin: '0',
        borderRadius: '0.5rem'
    })
}));

export default function Message (props) {
    const backgroundColor = props.backgroundColor;
    const nickname = props.nickname;
    const text = props.text;
    const side = props.side === 'right' ? 'flex-end' : 'flex-start';
    const classes = useStyle({ backgroundColor });

    return (
        <Grid container justifyContent={side}>
            <p className={classes.message}>{nickname}: {text}</p>
        </Grid>
    );
}