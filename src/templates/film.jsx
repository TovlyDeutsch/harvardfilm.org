import React from "react";
import Helmet from "react-helmet";
import MenuTemplate from "./MenuTemplate";
import SEO from "../components/SEO/SEO";
import config from "../../SiteConfig";
import MainHeader from "../layouts/MainHeader/MainHeader";
import MainNav from "../layouts/MainNav/MainNav";
import BlogLogo from "../components/BlogLogo/BlogLogo";
import MenuButton from "../components/MenuButton/MenuButton";
import Drawer from "../layouts/Drawer/Drawer";
import Navigation from "../components/Navigation/Navigation";
import SiteWrapper from "../layouts/SiteWrapper/SiteWrapper";
import MainContent from "../layouts/MainContent/MainContent";
import PostHeader from "../layouts/PostHeader/PostHeader";
import FilmFormatting from "../layouts/FilmFormatting/FilmFormatting";
import PostDate from "../components/PostDate/PostDate";
import PostFooter from "../layouts/PostFooter/PostFooter";
import AuthorImage from "../components/AuthorImage/AuthorImage";
import AuthorInfo from "../components/AuthorInfo/AuthorInfo";
import PostShare from "../components/PostShare/PostShare";
import GhostSubscribe from "../components/GhostSubscribe/GhostSubscribe";
// import ReadNext from "../components/ReadNext/ReadNext";
import PostTags from "../components/PostTags/PostTags";
import Footer from "../components/Footer/Footer";
import AuthorModel from "../models/author-model";
import ProportionalVideo from "../components/ProportionalVideo/ProportionalVideo";
import CastGrid from "../components/CastGrid/CastGrid";

class FilmTemplate extends MenuTemplate {
  render() {
    const { location, data } = this.props;
    const { slug } = this.props.pathContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    const { cover, title, date, author, tags, thumbnail, videoLink } = post;
    let { credits } = post;
    const className = post.category ? post.category : "post";
    const authorData = AuthorModel.getAuthor(
      data.authors.edges,
      author,
      config.blogAuthorId
    );
    const authorPics = {};
    this.props.data.authorPics.edges.forEach(
      edge =>
        (authorPics[edge.node.name] = edge.node.childImageSharp.resize.src)
    );
    credits = credits
      ? credits
          .map(crewMemberPostData => ({
            authorData: AuthorModel.getAuthor(
              data.authors.edges,
              crewMemberPostData.id
            ),
            postData: crewMemberPostData,
            imageUrl: authorPics[crewMemberPostData.id]
          }))
          .filter(crewMember => crewMember.authorData && crewMember.postData)
      : null;
    credits = credits === null ? [] : credits;
    console.log("here");
    return (
      <Drawer className="post-template" isOpen={this.state.menuOpen}>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />

        {/* The blog navigation links */}
        <Navigation config={config} onClose={this.handleOnClose} />

        <SiteWrapper>
          <MainHeader className="post-head" color="white">
            <MainNav>
              <BlogLogo logo={config.siteLogo} title={config.siteTitle} />
              <MenuButton
                navigation={config.siteNavigation}
                onClick={this.handleOnClick}
              />
            </MainNav>
          </MainHeader>
          <MainContent>
            <FilmFormatting className={className}>
              <PostHeader thumbnail={thumbnail}>
                <h1 className="film-title">{title}</h1>
                <section className="film-meta">
                  <PostDate date={date} />
                  <PostTags prefix=" " tags={tags} />
                </section>
                <ProportionalVideo videoLink={videoLink} />
              </PostHeader>
              <section
                className="film-content"
                dangerouslySetInnerHTML={{ __html: postNode.html }}
              />
              {credits.length > 0 && <CastGrid cast={credits} />}
              <PostFooter>
                {/*<PostShare
                  postNode={postNode}
                  postPath={location.pathname}
                  config={config}
                />*/}
                <GhostSubscribe />
              </PostFooter>
            </FilmFormatting>
          </MainContent>
          {/*  <ReadNext next={getNextData()} prev={getPrevData()} />*/}

          {/* The tiny footer at the very bottom */}
          <Footer
            copyright={config.copyright}
            promoteGatsby={config.promoteGatsby}
          />
        </SiteWrapper>
      </Drawer>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query FilmBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        author
        cover
        date
        category
        tags
        videoLink
        thumbnail
        credits {
          id
          role
          description
        }
      }
      fields {
        slug
        path
      }
    }
    # authors
    authors: allAuthorsJson {
      edges {
        node {
          id
          name
          image
          url
          bio
        }
      }
    }
    authorPics: allFile(
      filter: { absolutePath: { regex: "/(profile-pics)/" } }
    ) {
      edges {
        node {
          name
          publicURL
          childImageSharp {
            resize(width: 432, height: 540) {
              src
            }
          }
        }
      }
    }
    filmPics: allFile(filter: { absolutePath: { regex: "/(thumbnails)/" } }) {
      edges {
        node {
          name
          publicURL
          childImageSharp {
            resize(width: 900, height: 250, cropFocus: ENTROPY) {
              src
            }
          }
        }
      }
    }
  }
`;

export default FilmTemplate;
