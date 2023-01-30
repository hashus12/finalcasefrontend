import { Container } from "@mui/material";
import React, {useState, useEffect} from "react";
import styled from '@emotion/styled'
import Post from "../Post/Post";


function Home(){

    const StyledContainer = styled(Container)`
    // bir satıra sığmayanlar alt satıra geçecek
    display: flex; 
    flex-wrap : wrap;
    // bir satırdaki elemanlar ortada bulunacak
    justify-content: center;
    // o satırdaki eleman yukardan aşağıya doğru ortada olacak
    align-items : center;
    background-color: #cfe8fc;
    height : 100vh`;

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList, setPostList] = useState([]);

    // hooks kullanıyoruz burda
    // componentteki mount gibi düşünülebilir. Burda datayı fetch ediyoruz ve statelerimizi ona uygun bir şekilde set ediyoruz.
    useEffect(() => {
        // localhostu package.jsonda proxy olarak tanımladım. yani base urlimizin başına ordan eklicek biz fetch yaptığımızda.
        fetch("/posts")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setPostList(result)
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    if(error){
        // html elementini return ediyoruz. Ekranda bu dom elementlerini kullanarak normal bir html page gibi gösteriyor.
        //çok farklı kullanımlarda var biz basit şekilde direk html taglerini kullandık burda.
        return <div>Error !!!</div>;
    }else if(!isLoaded){
        return <div> Loading...</div>
    } else {
        return(

            <StyledContainer fixed>
            {/* //Home componentta Post componentınıda renderlıyoruz. Reactta bu iç içe yapı var.Component içinde başka compoenent yapboz gibi */}
                {/* Bize gelen postlistesini post compoenenta mapledik. Herbir gelen datayı bir tane post componentı olacak şekilde renderlıcaz. */}
                {postList.map(post => (
                    // post componentımıza props gönderelim.Child ve parent componentlar arasındaki iletilen data home parent post child Component
                    <Post title={post.title} text={post.text}></Post>
                ))}
            </StyledContainer>
        );
    }
}

export default Home;