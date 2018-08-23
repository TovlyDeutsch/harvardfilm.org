import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import config from "../../SiteConfig";
import Drawer from "../layouts/Drawer/Drawer";
import SEO from "../components/SEO/SEO";
import Navigation from "../components/Navigation/Navigation";
import SiteWrapper from "../layouts/SiteWrapper/SiteWrapper";
import MainContent from "../layouts/MainContent/MainContent";
import MainHeader from "../layouts/MainHeader/MainHeader";
import MainNav from "../layouts/MainNav/MainNav";
import BlogLogo from "../components/BlogLogo/BlogLogo";
import MenuButton from "../components/MenuButton/MenuButton";
import Footer from "../components/Footer/Footer";
import MenuTemplate from "../templates/MenuTemplate";

class FilmPage extends MenuTemplate {
  render() {
    const postEdges =
      this.props.data.allMarkdownRemark &&
      this.props.data.allMarkdownRemark.edges
        ? this.props.data.allMarkdownRemark.edges
        : [];
    console.log("pedges", postEdges);
    return (
      <Drawer className="post-template" isOpen={this.state.menuOpen}>
        <Helmet title={`Films by | ${config.siteTitle}`} />
        {/* <SEO postPath={slug} /> */}

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
            <h1>Our Films</h1>
            {/* TODO: add lazy loading when we start having a lot of films */}
            <PostListing postEdges={postEdges} />
          </MainContent>

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

export default FilmPage;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query FilmsPage {
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
          }
        }
      }
    }
  }
`;
