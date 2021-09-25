import React from "react";
import { useHistory } from "react-router-dom";

const Post = ({posts, id}) => {
    const history = useHistory()
    const handleSave = () => {
        history.push('/posts')
    }
    const getPost = (postId) => {
        return posts.find((post) => post.id.toString() === postId)
    }
    const post = getPost(id)
    return (
        <>
            <h2>{post ? `Post ${id}`: `Post ${id} not found`}</h2>
            <button onClick={() => handleSave()} className="btn">Save</button>
        </>
        )

}

export default Post