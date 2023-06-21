import React from "react";
import Layout from "@theme/Layout";
import BlogPostItem from "@theme/BlogPostItem";
import { Content } from "@theme/BlogPostPage";
import PaginatorNavLink from "@theme/PaginatorNavLink";
import { BlogPostProvider } from "@docusaurus/theme-common/internal";

export function Home({ recentPosts }) {
  return (
    <Layout>
      <div className="hero hero--dark hero--home shadow--lw">
        <div className="container">
          <div className="row">
            <div className="col col--9 col--offset-1">
              <h1 className="hero__title">👋 I'm Sara, a software engineer.</h1>
              <p className="hero__subtitle">
                Welcome to my development playground.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container margin-top--xl margin-bottom--lg">
        <div className="row">
          <div className="col col--9 col--offset-1">
            {recentPosts.map((content) => (
              <BlogPostProvider
                key={BlogPostContent.metadata.permalink}
                content={BlogPostContent}
              >
                <BlogPostItem>
                  <BlogPostContent />
                </BlogPostItem>
              </BlogPostProvider>
            ))}
          </div>
        </div>
        <div className="row">
            <div className="col col--5 col--offset-5">
                <PaginatorNavLink
            </div>
        </div>
      </div>
    </Layout>
  );
}
