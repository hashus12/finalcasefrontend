import React from "react";
import Post from "../Post/Post";

function Home(){
    return(
        <div className="container">
            Home!!
            {/* //Home componentta Post componentınıda renderlıyoruz. Reactta bu iç içe yapı var.Component içinde başka compoenent yapboz gibi */}
            <Post></Post>
        </div>
    )
}

export default Home;