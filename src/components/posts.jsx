import React from 'react'
import PostList from "./postList";
import Post from "./post";
import { useParams } from "react-router-dom";
// import query from "query-string"
// import _ from "lodash"

const Posts = ({ match }) => {
   //const search = query.parse(location.search)
    const posts = [
        {id: 1, label: 1},
        {id: 2, label: 2},
        {id: 3, label: 3},
        {id: 4, label: 4},
    ]
    const params = useParams()
    const { postId } = params
    // const cropPosts = search ? _(posts).slice(0).take(search.count).value() : posts
    return (
                <> { postId ? <Post posts={posts} id={postId}/> : <PostList posts={posts} /> } </>
            )

}

export default Posts