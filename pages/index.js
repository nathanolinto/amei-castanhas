function Home(){
    return  <div>Home</div>
}

function Tempo(props){
    return (
        <div>
            <div></div>
            <div>{props.staticDateString}</div>
        </div>
    )
}

export async function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return{
        props: {
            staticDateString
        },
        revalidate: 3
    }
}

export default Home