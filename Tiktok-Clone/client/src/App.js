import React from 'react'
import Video from './Video'
import './App.css'

const App = () => {
    return (
        <div className="app">

            <div className="app__videos">
                <Video url='https://vod-progressive.akamaized.net/exp=1615076752~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3968%2F18%2F469843671%2F2089634529.mp4~hmac=776019479c460919790511c053bed9f21899f24f5252529400694d9a2061c830/vimeo-prod-skyfire-std-us/01/3968/18/469843671/2089634529.mp4?filename=pexels-maksim-goncharenok-5642532.mp4' />
                <Video url='https://vod-progressive.akamaized.net/exp=1615076693~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4127%2F17%2F445636626%2F1954201251.mp4~hmac=2ac59c377e1b63b58a85ce046cc2099be1065d1b4e72449faf5b5cf913895a3c/vimeo-prod-skyfire-std-us/01/4127/17/445636626/1954201251.mp4?filename=production+ID%3A5056339.mp4' />
            </div>

        </div>
    )

}


export default App;
