import React,{ useState } from 'react'
import './App.css'
import Post from './Post'
const App = () => {
    const [posts, setPosts] = useState([
        {
            username: 'FreecodeCamp', 
            caption: 'Learning ReactJS', 
            imageUrl: "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
        },
        {
            username: 'Nikhil Singh', 
            caption: 'Feeling Fresh', 
            imageUrl: "https://avatars.githubusercontent.com/u/71940958?s=460&u=24ef1c10f91e5ef2dffac627465b825a9fef769a&v=4"
        },
        {
            username: 'Anonymous', 
            caption: 'Eye for A eye', 
            imageUrl: "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
        },
    ]);
    return (
        <div className="app">
            <div className="app__header">
                <img
                    className="app__headerImage"
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt=""
                />
            </div>
            {
                posts.map(post => (
                    <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
                ))
            }
        
        </div>
    )
}


export default App;
