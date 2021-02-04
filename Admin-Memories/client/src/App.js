import React, {useEffect, useState} from 'react'
import memories from './images/memories.png'
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import Posts from './Posts/Posts'
import Form from './Form/Form'
import useStyles from './styles'
import {useDispatch} from 'react-redux'
import { getPosts } from './actions/post'
const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch, currentId]) 
    return (
        <Container maxidth='lg'>
            
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7} >
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;
