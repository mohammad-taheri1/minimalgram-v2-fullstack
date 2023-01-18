import React, {useEffect, useState} from 'react';
import './App.css';
import httpClient from "./services/http.service";
import {IPostDto} from "./types/post.types";
import config from './utils/config.json';

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
        <div className="App">
            <header className="App-header">
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                {
                    posts.length > 0 && (
                        posts.map(post => <div key={post.id}>
                            <img src={post.image} alt={post.caption} width={300} height={300}/>
                            <h6>{post.caption}</h6>
                            {/*<p>{post.created_at.getUTCDate()}</p>*/}
                        </div>)
                    )
                }
            </header>
        </div>
    );
}

export default App;
