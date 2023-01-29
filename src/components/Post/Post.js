import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

// Reactte her bir objenin statei olur.
function Post(){
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
            <ul>
                {postList.map(post => (
                    <li>
                        {post.title} {post.text}
                    </li>
                ))}
            </ul>
        );
    }
}

//Dışardan bu posta erişmek isteyenler Post ismiyle bu componentı çağırıp kullanabilirler.
export default Post;