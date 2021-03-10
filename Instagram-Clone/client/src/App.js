import React,{ useState, useEffect } from 'react'
import './App.css'
import Post from './Post'
import {db} from './firebase'
import { Button, Avatar, makeStyles, Modal, Input } from "@material-ui/core";
function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      height: "300px",
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: 400,
      height: 200,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
const App = () => {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);
    const [open, setOpen] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [modalStyles] = useState(getModalStyle);
    const handleLogin = () => {
        
    }
    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                post: doc.data(),
            })))
        });
    }, [posts])  
    return (
        <div className="app">
            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <div style={modalStyles} className={classes.paper}>
                    <center>
                        <img
                            className="app__headerImage"
                            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                            alt=""
                        />
                        <Input 
                            placeholder='email'
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input 
                            placeholder='password'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button onClick={handleLogin}>Login</Button>
                    </center>
                </div>
            </Modal>
            <div className="app__header">
                <img
                    className="app__headerImage"
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt=""
                />
            </div>
            <Button onClick={() => setOpen(true)}>Sign Up</Button>
            {
                posts.map(({id, post}) => (
                    <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
                ))
            }
        
        </div>
    )
}


export default App;
