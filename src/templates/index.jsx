import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-scroll";
import MenuTemplate from "./MenuTemplate";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Drawer from "../layouts/Drawer/Drawer";
import Navigation from "../components/Navigation/Navigation";
import About from "../components/About/About";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import BelowTheFold from "../layouts/BelowTheFold/BelowTheFold";
import SiteWrapper from "../layouts/SiteWrapper/SiteWrapper";
import Footer from "../components/Footer/Footer";
import MainHeader from "../layouts/MainHeader/MainHeader";
import MainNav from "../layouts/MainNav/MainNav";
import BlogLogo from "../components/BlogLogo/BlogLogo";
import MenuButton from "../components/MenuButton/MenuButton";
import CenterImage from "../components/CenterImage/CenterImage";
import PageDescription from "../components/PageDescription/PageDescription";
import PaginatedContent from "../layouts/PaginatedContent/PaginatedContent";
import SocialMediaIcons from "../components/SocialMediaIcons/SocialMediaIcons";

class IndexTemplate extends MenuTemplate {
  render() {
    const {
      nodes,
      page,
      pages,
      total,
      limit,
      prev,
      next
    } = this.props.pathContext;
    const authorsEdges = this.props.data.authors.edges;

    return (
      <Drawer className="home-template" isOpen={this.state.menuOpen}>
        <Helmet title={config.siteTitle} />
        <SEO postEdges={nodes} />

        {/* The blog navigation links */}
        <Navigation config={config} onClose={this.handleOnClose} />

        <SiteWrapper>
          {/* All the main content gets inserted here */}
          <div className="home-template">
            {/* The big featured header */}
            <MainHeader cover={config.siteCover} color="#8a292e">
              <MainNav overlay={config.siteCover}>
                <BlogLogo logo={config.siteLogo} title={config.siteTitle} />
                <MenuButton
                  navigation={config.siteNavigation}
                  onClick={this.handleOnClick}
                />
              </MainNav>
              <div className="vertical" style={{ display: "block" }}>
                <div className="main-header-content inner">
                  <CenterImage src="/images/hufa-logo.svg" />
                  <PageDescription text={config.siteDescription} />
                  <SocialMediaIcons
                    urls={config.siteSocialUrls}
                    color="currentColor"
                  />
                </div>
              </div>
              <Link
                className="scroll-down icon-arrow-left"
                to="content"
                data-offset="-45"
                spy
                smooth
                duration={500}
              >
                <span className="hidden">Scroll Down</span>
              </Link>
            </MainHeader>
            <BelowTheFold>
              <About />
              <WhatWeDo />
            </BelowTheFold>

            {/* <PaginatedContent
              page={page}
              pages={pages}
              total={total}
              limit={limit}
              prev={prev}
              next={next}
            >*/}
            {/* PostListing component renders all the posts */}
            {/*<PostListing postEdges={nodes} postAuthors={authorsEdges} />
            </PaginatedContent>
*/}
          </div>

          {/* The tiny footer at the very bottom */}
          <Footer
            copyright={config.copyright}
            // promoteGatsby={config.promoteGatsby}
          />
        </SiteWrapper>
      </Drawer>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    # posts data comes from the context
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

export default IndexTemplate;
