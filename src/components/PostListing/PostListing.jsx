import React from "react";
import Link from "gatsby-link";
import AuthorThumbnail from "../AuthorThumbnail/AuthorThumbnail";
import PostTags from "../PostTags/PostTags";
import SiteConfig from "../../../data/SiteConfig";
import AuthorLink from "../AuthorLink/AuthorLink";
import PostFormatting from "../../layouts/PostFormatting/PostFormatting";
import PostHeader from "../../layouts/PostHeader/PostHeader";
import PostDate from "../PostDate/PostDate";
import AuthorModel from "../../models/author-model";
import "./PostListing.css";

const getPostList = (postEdges, authorEdges) =>
  postEdges.map(postEdge => ({
    path: postEdge.node.fields.slug,
    tags: postEdge.node.frontmatter.tags,
    cover: postEdge.node.frontmatter.cover,
    title: postEdge.node.frontmatter.title,
    date: postEdge.node.frontmatter.date,
    author: AuthorModel.getAuthor(
      authorEdges,
      postEdge.node.frontmatter.author,
      SiteConfig.blogAuthorId
    ),
    excerpt: postEdge.node.excerpt,
    timeToRead: postEdge.node.timeToRead
  }));

class PostListing extends React.Component {
  render() {
    const postList = getPostList(this.props.postEdges, this.props.postAuthors);

    return (
      <div>
        {/* This is the post loop - each post will be output using this markup */}
        {postList.map(post => {
          const { title, path, excerpt, author, tags, date, cover } = post;
          const className = post.post_class
            ? post.post_class
            : "film-thumbnail-background";
          const style = {
            "background-image": `linear-gradient(
              to left, rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.83) 75%,
              rgb(255, 255, 255) 100%),
            url(${cover})`
          };
          return (
            <PostFormatting
              className={className}
              key={title}
              style={style}
              path={path}
            >
              <div className="film-listing-text">
                <h2 className="film-list-title">{title}</h2>
                <section className="post-excerpt">
                  <p>{excerpt} &raquo;</p>
                </section>
              </div>
            </PostFormatting>
          );
        })}
      </div>
    );
  }
}

export default PostListing;
