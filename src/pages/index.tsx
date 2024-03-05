import { Link } from "gatsby-link";
import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <h1>Welcome to Brian&apos;s workshop</h1>
      <p>This is my blog about woodworking projects, thoughts, ideas.</p>
      <h3>A change is coming</h3>
      <p>Stay tuned to more and check back later to see what is going to happen.</p>
      <p>
        In the meantime, head on over to the{" "}
        <Link to={"/blog"}>
          <b>blog</b>
        </Link>{" "}
        to see what my latests posts have been.
      </p>
    </section>
  </Layout>
);

export default IndexPage;
