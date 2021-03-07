import axios  from 'axios'
import Header from '../components/layout/header'
import Heading from '../components/layout/heading'
import Grid from '../components/layout/grid'

function Index(props){
    const itens = props.data
    return(
        <>
            <Header />
            <Heading />
            <Grid itens={itens} />
            <script type="text/javascript" src="/initLayout.js"></script>
        </>
    )
}

export async function getStaticProps() {
    const accessToken = "IGQVJWVnFQdkdVZADVxeXBNLXBrRG5jaXFfTnYtWUt6MXk3akxhc2FMT1doazEzc004UmFwOFZARY1NQZAHZA0V2dNcUFJdFNRUzViQ21VMzlwajBFS3FXUVhNRlAxdHJuMnNUSUxCOWlkWGRwVF9lVUFBbAZDZD"
    const urlInsta = `https://graph.instagram.com/me/media?fields=caption,media_url,media_type,permalink,timestamp,username&access_token=${accessToken}`
    //https://graph.instagram.com/me/media?fields=caption,media_url,media_type,permalink,timestamp,username&access_token=IGQVJWVnFQdkdVZADVxeXBNLXBrRG5jaXFfTnYtWUt6MXk3akxhc2FMT1doazEzc004UmFwOFZARY1NQZAHZA0V2dNcUFJdFNRUzViQ21VMzlwajBFS3FXUVhNRlAxdHJuMnNUSUxCOWlkWGRwVF9lVUFBbAZDZD

    const res = await axios.get(urlInsta);
    const { data } = await res;
    return { props: data }
}

export default Index;