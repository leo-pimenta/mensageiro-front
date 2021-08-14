import Header from '../Header'
import { Grid } from '@material-ui/core'

function Home(props) {
    const onLogout = props.onLogout ?? function () {};

    return (
        <Grid container spacing='0' direction='column'>
            <Header onLogout={onLogout}></Header>

            <div className="home">
                <p>I'm home, bitches...</p>
            </div>
        </Grid>
    );
}

export default Home