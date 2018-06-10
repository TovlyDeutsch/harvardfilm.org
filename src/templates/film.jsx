import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import MainHeader from "../layouts/MainHeader/MainHeader";
import MainNav from "../layouts/MainNav/MainNav";
import BlogLogo from "../components/BlogLogo/BlogLogo";
import MenuButton from "../components/MenuButton/MenuButton";
import Drawer from "../layouts/Drawer/Drawer";
import Navigation from "../components/Navigation/Navigation";
import SiteWrapper from "../layouts/SiteWrapper/SiteWrapper";
import MainContent from "../layouts/MainContent/MainContent";
import PostHeader from "../layouts/PostHeader/PostHeader";
import PostFormatting from "../layouts/PostFormatting/PostFormatting";
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
import Disqus from "../components/Disqus/Disqus";

class FilmTemplate extends React.Component {
  state = {
    menuOpen: false
  };

  handleOnClick = evt => {
    evt.stopPropagation();
    if (this.state.menuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  };

  handleOnClose = evt => {
    evt.stopPropagation();
    this.closeMenu();
  };

  openMenu = () => {
    this.setState({ menuOpen: true });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const { location, data } = this.props;
    const { slug } = this.props.pathContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter
    const { cover, title, date, author, tags, thumbnail } = post;
    console.log(thumbnail, author)
    const className = post.post_class ? post.post_class : "post";
    const authorData = AuthorModel.getAuthor(
      data.authors.edges,
      author,
      config.blogAuthorId
    );

    return (
      <Drawer className="post-template" isOpen={this.state.menuOpen}>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />

        {/* The blog navigation links */}
        <Navigation config={config} onClose={this.handleOnClose} />

        <SiteWrapper>
          <MainHeader className="post-head">
            <MainNav overlay={cover}>
              <BlogLogo logo={config.siteLogo} title={config.siteTitle} />
              <MenuButton
                navigation={config.siteNavigation}
                onClick={this.handleOnClick}
              />
            </MainNav>
          </MainHeader>
          <MainContent>

              <PostHeader thumbnail={thumbnail}>
                <h1 className="post-title">{title}</h1>
                <section className="post-meta">
                  <PostDate date={date} />
                  <PostTags prefix=" " tags={tags} />
                </section>
                <iframe className='film-video'/>
              </PostHeader>
              <PostFormatting className={className}>
              <section
                className="post-content"
                dangerouslySetInnerHTML={{ __html: postNode.html }}
              />

              <PostFooter>
                {/*<PostShare
                  postNode={postNode}
                  postPath={location.pathname}
                  config={config}
                />*/}
                <GhostSubscribe />
                <Disqus postNode={postNode} />
              </PostFooter>
            </PostFormatting>
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
        cover
        date
        category
        tags
        thumbnail
        author
        credits {
          id
          role
          description
        }
      }
      fields {
        slug
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
  }
`;

export default FilmTemplate;
