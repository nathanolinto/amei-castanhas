import ImgsMotivacionais from '../public/imgsMotivacionais.json'

import { ImgMotivacional } from '../components/imgMotiovacional/index'
import { Header } from '../components/header/index'

import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}));

function Home(props) {
    const classes = useStyles();
    return (
        <Container>
            <Grid container style={{ height: '100vh' }} justify="center" alignItems="center" spacing={2} >
                <Grid item>
                    <Paper className={classes.paper} elevation={3}><ImgMotivacional>{props.staticImgsMotivacionais}</ImgMotivacional></Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export async function getStaticProps() {
    //imagem aleatoria motivacional
    const staticImgsMotivacionais = ImgsMotivacionais[Math.floor(Math.random() * ImgsMotivacionais.length)]['src']
    return {
        props: {
            staticImgsMotivacionais
        },
        revalidate: 3
    }
}

export default Home;