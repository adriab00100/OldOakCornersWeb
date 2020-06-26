import React from "react";
import Container from "../components/container";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ExternalLink from "../components/external-link"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Container type="centering">
      <div>
        <section>
          <h1>About this blog</h1>
          <p>
            I want to share my projects with the general public because I was inspired to get into this hobby by looking through
            similar blogs. I figure here I might be able to inspire someone else to pick up the saw and get in to this themselves.
            I also hope that my projects that I show can provide ideas that others can build on, or reuse for their own needs.
          </p>
          <p>
            Any advice I provide, or designs I share are free to use at your own risk. I'm not an expert, and not a professional,
            but I sure do love the craft!
          </p>
        </section>
        <section>
          <h2>About Brian</h2>
          <p>
            As a kid I told my parents I want to be a carpenter when I grew up. They were understandably skeptical about that.
            After all how many five-year-olds follow through and become what they say they want to be? I'm pretty sure I've also
            wanted to be an astronomer, astronaut, fiction author, and at least several other things.
          </p>
          <p>
            Largely my dreams of carpentry had faded away by the time college came around, and I turned myself into a software engineer.
            Building software is interesting and fun, but you can't reach out and touch it. One of my former co-workers, Scott, was an
            avid woodworking hobbyist and he rekindled my interest in building stuff out of wood. Most of my projects these days might fall
            more under the area of joinery, but I also have worked on a few projects that might fall under carpentry.
          </p>
        </section>
        <section>
          <h2>Inspirations</h2>
          <p>Several amazing wood-crafters have inspired me to build and create, and I'll list some of them here.</p>
          <ul>
            <li>
              <ExternalLink href="https://www.pbs.org/woodwrightsshop/">The Woodwright's Shop</ExternalLink> with Roy Underhill
          </li>
            <li>
              <ExternalLink href="https://christophermschwarz.com/">Christopher Schwartz</ExternalLink> is a furniture maker, author,
            and also researchers traditional woodworking techniques
          </li>
            <li>
              <ExternalLink href="https://www.youtube.com/watch?v=lrAAglKLPh8">Frank Klausz</ExternalLink> is a master jointer with many videos on YouTube
          </li>
          </ul>
          <p>There are loads more interesting people sharing their work on YouTube and Facebook, so I encourage you to look around.</p>
        </section>
        <section>
          <h2>How is this blog made?</h2>
          <p>
            I've used a combination of <ExternalLink href="https://www.gatsbyjs.org/">Gatsby</ExternalLink> and <ExternalLink>React</ExternalLink> for this blog,
            while I am storing the code in a <ExternalLink href="https://github.com/adriab00100/OldOakCornersWeb">github repository</ExternalLink>.
            I am hosting the website on <ExternalLink href="https://www.netlify.com/">Netlify</ExternalLink> and using <ExternalLink href="https://cloudinary.com/">
              Cloudinary</ExternalLink> for all my image and video needs.
          </p>
          <p>
            The inspiration for how I built this was from a crash-course by <ExternalLink href="https://www.youtube.com/watch?v=6YhqQ2ZW1sc">
              TraversyMedia on YouTube</ExternalLink>
          </p>
        </section>
      </div>
    </Container>
  </Layout>
);

export default AboutPage;
