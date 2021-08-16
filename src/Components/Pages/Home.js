import { Grid } from '@material-ui/core'
import Header from '../Header'
import ContactList from '../ContactList';

function Home(props) {
    const onLogout = props.onLogout ?? function () {};

    return (
        <Grid container spacing='0' direction='column'>
            <Header onLogout={onLogout}></Header>

            <ContactList></ContactList>
        </Grid>
    );
}

export default Home