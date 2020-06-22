import React from "react"
import { Link } from "gatsby"
import { Image, Transformation } from 'cloudinary-react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { cloudinaryCloudId } from "../images/constants"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="centering-container">
      <h1>PAGE NOT FOUND</h1>
    </div>
    <div className="centering-container">
      <div className="side-by-side-container">
        <Image cloudName={cloudinaryCloudId} secure="true" width="440" alt="An empty tool bag" publicId="site-assets/notFound_ipwmwf" >
          <Transformation width="440" crop="scale" fetchFormat="auto" quality="auto" />
        </Image>
        <div className="stacked-container pls" >
          <h2>There's nothing here</h2>
          <span>Unfortunately the page you're trying to visit doesn't seem to exist.<br />Try going back to the <Link to="/">home page</Link> instead.</span>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
