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
                            <h1 className="hero__title">
                            👋 I'm Kishan, a software engineer.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
