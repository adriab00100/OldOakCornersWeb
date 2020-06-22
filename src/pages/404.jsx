import React from "react"
import { Image } from 'cloudinary-react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { cloudinaryCloudId } from "../images/constants"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>PAGE NOT FOUND</h1>
    <p>There's nothing here.</p>


    <Image cloudName={cloudinaryCloudId} publicId="notFound_ipwmwf" width="440" crop="scale" />


  </Layout>
)

export default NotFoundPage
