import Header from '../components/layout/header'
import Conteudo from '../components/layout/conteudo'

function Index(){
    //const itens = props.data
    return(
        <>
            <Header />
            <div className="container">
                <Conteudo />
                <script src="/scroll.js"></script>
                <script src="/anime.min.js"></script>
                <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
                <script type="module" src="/App.js"></script>
                <script type="module" src="/init.js"></script>
            </div>
        </>
    )
}

export default Index;