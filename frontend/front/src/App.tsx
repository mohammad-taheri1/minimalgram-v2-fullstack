import React, {useEffect, useState} from 'react';
import httpClient from "./services/http.service";
import {IPostDto} from "./types/post.types";
import config from './utils/config.json';
import {ToastContainer} from "react-toastify";
import {formatDistance} from "date-fns";

function App() {
    const [posts, setPosts] = useState<IPostDto[]>([])

    const getPostsFromServer = async () => {
        const postsUrl = `${config.apiBaseUrl}/post`
        const {data} = await httpClient.get(postsUrl);
        setPosts(data);
    }

    useEffect(() => {
        getPostsFromServer();
    }, [])

    return (
        <div style={temporaryStyles.container}>
            <div className="App-header">
                {
                    posts.length > 0 && (
                        posts.map(post => <div key={post.id}
                                               style={{border: "1px solid red", width: "300px", height: "300px"}}>
                            <img src={post.image} alt={post.caption} width={300} height={300}/>
                            <h6>{post.caption}</h6>
                            <p>{formatDistance(new Date(post.created_at), new Date())}</p>
                        </div>)
                    )
                }
            </div>
            <ToastContainer/>
        </div>
    );
}

export default App;

const temporaryStyles = {
    container: {
        background: "#9696f8",
        display: "flex"
    }
}