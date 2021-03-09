import React from 'react'
import './App.css'
import Post from './Post'
const App = () => {
    return (
        <div className="app">
            <div className="app__header">
                <img
                    className="app__headerImage"
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt=""
                />

            </div>
            {/* Header */}
            <Post />
            <Post />
            <Post />
            {/* Posts */}
        </div>
    )
}


export default App;
