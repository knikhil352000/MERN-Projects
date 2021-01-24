import PostMessage from "../models/postMessage.js"



export const getPosts = async (req, res) => { //find method usually takes time so it should be an async funcion
   try{
        const postMessages = await PostMessage.find();
        // console.log(postMessages);
        res.status(200).json(postMessages);
   } catch (error) {
        res.status(404).json({message: error.message})
   }
}

export const createPosts = async (req, res) => { // save function will takes sometime hence it should be a async funciton

    const post = req.body;
    const newPost = new PostMessage(post)
    try{
        await newPost.save();
        res.status(201).json(newPost);
    } catch(error) {
        res.status(409).json({message: error.message})
    }
}