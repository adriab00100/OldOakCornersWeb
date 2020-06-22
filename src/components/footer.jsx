import React from "react"
import "./default-layout.scss"
import "./site-footer.scss"

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="site-footer full-width-container">
            <section className="footer-container full-width-container limited-width-container">
                <div className="copyright ">
                    © {year} Brian Adriance
                </div>
                <div className="disclaimer">
                    All plans and designs presented here are FREE TO USE, COPY, OR MODIFY for personal or commercial use.
                    Images MAY NOT be shared for commercial use or use by a publication without consent of author/creator.
                </div>
            </section>
        </footer>
    )
}

export default Footer;