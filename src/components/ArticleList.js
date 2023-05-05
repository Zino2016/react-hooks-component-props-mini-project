import React from "react";
import Article from "./Article.js";


function ArticleList (props) {

    const posts = props.posts;
    const articleEl = posts.map((post) =>(
        <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>

    ));
    return(
        <main> {articleEl}</main>
    )

    
}

export default ArticleList;
