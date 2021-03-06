import React from "react";
import MenuTemplate from "./MenuTemplate";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import config from "../../SiteConfig";
import Drawer from "../layouts/Drawer/Drawer";
import SEO from "../components/SEO/SEO";
import Navigation from "../components/Navigation/Navigation";
import SiteWrapper from "../layouts/SiteWrapper/SiteWrapper";
import MainHeader from "../layouts/MainHeader/MainHeader";
import MainNav from "../layouts/MainNav/MainNav";
import BlogLogo from "../components/BlogLogo/BlogLogo";
import MenuButton from "../components/MenuButton/MenuButton";
import AuthorImage from "../components/AuthorImage/AuthorImage";
import CastTile from "../components/CastTile/CastTile";
import AuthorProfile from "../layouts/AuthorProfile/AuthorProfile";
import AuthorName from "../components/AuthorName/AuthorName";
import AuthorBio from "../components/AuthorBio/AuthorBio";
import AuthorMeta from "../layouts/AuthorMeta/AuthorMeta";
import AuthorLocation from "../components/AuthorLocation/AuthorLocation";
import AuthorWebsite from "../components/AuthorWebsite/AuthorWebsite";
import AuthorStats from "../components/AuthorStats/AuthorStats";
import Footer from "../components/Footer/Footer";
import SocialMediaIcons from "../components/SocialMediaIcons/SocialMediaIcons";

class AuthorTemplate extends MenuTemplate {
  render() {
    const { author, cover, slug } = this.props.pathContext;
    const { authorPic } = this.props.data;
    let postEdges =
      this.props.data.allMarkdownRemark &&
      this.props.data.allMarkdownRemark.edges
        ? this.props.data.allMarkdownRemark.edges
        : [];
    // TODO: fix this convoluted mess
    postEdges = postEdges.filter(edge => {
      if (edge.node.frontmatter.credits) {
        return (
          edge.node.frontmatter.credits.findIndex(
            credit => credit.id === author
          ) !== -1
        );
      } else {
        return false;
      }
    });
    const authorsEdges =
      this.props.data.allAuthorsJson && this.props.data.allAuthorsJson.edges
        ? this.props.data.allAuthorsJson.edges
        : [];

    if (!authorsEdges[0]) {
      return null;
    }
    const getAuthor = () => authorsEdges[0].node;

    return (
      <Drawer className="author-template" isOpen={this.state.menuOpen}>
        <Helmet title={`Posts by "${author}" | ${config.siteTitle}`} />
        {/* TODO make seo for authors better */}
        <SEO postPath={slug} />

        {/* The blog navigation links */}
        <Navigation config={config} onClose={this.handleOnClose} />

        <SiteWrapper>
          <MainHeader className="author-head" cover={cover}>
            <MainNav overlay={cover}>
              <BlogLogo logo={config.siteLogo} title={config.siteTitle} />
              <MenuButton
                navigation={config.siteNavigation}
                onClick={this.handleOnClick}
              />
            </MainNav>
          </MainHeader>

          <AuthorProfile className="inner">
            <CastTile
              member={{
                authorData: getAuthor(),
                imageUrl: authorPic.edges[0].node.childImageSharp.resize.src
              }}
            />
            <AuthorName name={getAuthor().name} />
            <AuthorBio bio={getAuthor().bio} />
            <AuthorMeta>
              <AuthorLocation location={getAuthor().location} />
              <AuthorWebsite url={getAuthor().url} />
              {/* Social information here */}
              <SocialMediaIcons urls={getAuthor().socialUrls} />
            </AuthorMeta>
            <AuthorStats postEdges={postEdges} />
          </AuthorProfile>

          {/* PostListing component renders all the posts */}
          <PostListing postEdges={postEdges} postAuthors={authorsEdges} />

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
  query AuthorPage($author: String, $imgPath: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "film" } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            path
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
            author
            synopsis
            credits {
              id
            }
          }
        }
      }
    }
    allAuthorsJson(filter: { id: { eq: $author } }) {
      edges {
        node {
          id
          name
          image
          url
          bio
          location
          socialUrls
        }
      }
    }
    authorPic: allFile(filter: { absolutePath: { regex: $imgPath } }) {
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
  }
`;

export default AuthorTemplate;
