const path = require("path");
const _ = require("lodash");
const fs = require("fs");
const webpackLodashPlugin = require("lodash-webpack-plugin");
const siteConfig = require("./SiteConfig");
const {
  createPaginationPages,
  createLinkedPages
} = require("gatsby-pagination");

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === "AuthorsJson") {
    createNodeField({ node, name: "path", value: "author/" + node.id });
  }
  let slug;
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "slug")
    ) {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`;
    } else if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`;
    } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === "") {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }

    if (
      Object.prototype.hasOwnProperty.call(node.frontmatter, "category") &&
      node.frontmatter.category === "film"
    ) {
      createNodeField({ node, name: "path", value: "/film" + slug });
    } else {
      createNodeField({ node, name: "path", value: slug });
    }
    createNodeField({ node, name: "slug", value: slug });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const indexPage = path.resolve("src/templates/index.jsx");
    // const postPage = path.resolve("src/templates/post.jsx");
    const filmPage = path.resolve("src/templates/film.jsx");
    // const tagPage = path.resolve("src/templates/tag.jsx");
    // const categoryPage = path.resolve("src/templates/category.jsx");
    const authorPage = path.resolve("src/templates/author.jsx");

    if (
      !fs.existsSync(
        path.resolve(`content/${siteConfig.blogAuthorDir}/authors/`)
      )
    ) {
      reject(
        "The 'authors' folder is missing within the 'blogAuthorDir' folder."
      );
    }

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              limit: 1000
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              totalCount
              edges {
                node {
                  frontmatter {
                    title
                    tags
                    cover
                    date
                    category
                    author
                    synopsis
                    credits {
                      id
                      role
                    }
                  }
                  fields {
                    slug
                    path
                  }
                  excerpt
                  timeToRead
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          /* eslint no-console: "off" */
          console.log(result.errors);
          reject(result.errors);
        }

        // Creates Index page
        createPaginationPages({
          createPage,
          edges: result.data.allMarkdownRemark.edges,
          component: indexPage,
          limit: siteConfig.sitePaginationLimit
        });

        // // Creates Posts
        // createLinkedPages({
        //   createPage,
        //   edges: result.data.allMarkdownRemark.edges,
        //   component: postPage,
        //   edgeParser: edge => ({
        //     path: edge.node.fields.slug,
        //     context: {
        //       slug: edge.node.fields.slug
        //     }
        //   }),
        //   circular: true
        // });

        // Creates Film Pages
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          console.log(node);
          if (node.frontmatter.category === "film") {
            console.log(`${node.fields.slug}/`);
            createPage({
              path: "/film" + node.fields.slug,
              component: path.resolve(`./src/templates/film.jsx`),
              context: {
                // Data passed to context is available in page queries as GraphQL variables.
                slug: node.fields.slug,
                path: "/film" + node.fields.slug,
                regexSlug: `${node.fields.slug}/`
              }
            });
          }
        });

        const tagSet = new Set();
        const tagMap = new Map();
        const categorySet = new Set();
        const authorSet = new Set();
        authorSet.add(siteConfig.blogAuthorId);

        result.data.allMarkdownRemark.edges.forEach(edge => {
          if (edge.node.frontmatter.tags) {
            edge.node.frontmatter.tags.forEach(tag => {
              tagSet.add(tag);

              const array = tagMap.has(tag) ? tagMap.get(tag) : [];
              array.push(edge);
              tagMap.set(tag, array);
            });
          }

          if (edge.node.frontmatter.category) {
            categorySet.add(edge.node.frontmatter.category);
          }

          if (edge.node.frontmatter.author) {
            authorSet.add(edge.node.frontmatter.author);
          }
          // TODO: add validation to ensure author exists
          if (edge.node.frontmatter.credits) {
            console.log(edge.node.frontmatter.credits);
            edge.node.frontmatter.credits.forEach(credit =>
              authorSet.add(credit.id)
            );
          }
        });

        // const tagFormatter = tag => route =>
        //   `/tags/${_.kebabCase(tag)}/${route !== 1 ? route : ""}`;
        // const tagList = Array.from(tagSet);
        // tagList.forEach(tag => {
        //   // Creates tag pages
        //   createPaginationPages({
        //     createPage,
        //     edges: tagMap.get(tag),
        //     component: tagPage,
        //     pathFormatter: tagFormatter(tag),
        //     limit: siteConfig.sitePaginationLimit,
        //     context: {
        //       tag
        //     }
        //   });
        // });

        // const categoryList = Array.from(categorySet);
        // categoryList.forEach(category => {
        //   createPage({
        //     path: `/categories/${_.kebabCase(category)}/`,
        //     component: categoryPage,
        //     context: {
        //       category
        //     }
        //   });
        // });

        authorSet.forEach(author => {
          createPage({
            path: `/author/${author}/`,
            component: authorPage,
            context: {
              author: author,
              imgPath: `/(profile-pics\/${author})/`
            }
          });
        });
      })
    );
  });
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-javascript") {
    config.plugin("Lodash", webpackLodashPlugin, null);
  }
  config.merge({
    postcss() {}
  });

  return config;
};
