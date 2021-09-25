import React from "react";
import { Link } from "react-router-dom"

const PostList = ({posts}) => {
    return (<>
        { posts.map((post) => <Link key={post.id} to={`posts/${post.id}`}> <h4 >Post: {post.label}</h4> </Link>) }
    </>)
}

export default PostList