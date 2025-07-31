import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import PropTypes from "prop-types";

import { HelmetProvider, Helmet } from "react-helmet-async";

export function Root({ children }) {
    return (
        <>
            <Analytics />
            <SpeedInsights />
            <HelmetProvider>
                <Helmet>
                    <meta charSet="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />

                    <meta name="title" content="Jack Weller" />
                    <meta
                        name="description"
                        content="My personal website. Here I share my projects and post what I'm up to on my blog"
                    />
                    <meta name="theme-color" content="#699ce2" />

                    <meta property="og:type" content="website" />
                    <meta
                        property="og:url"
                        content="https://www.jackweller.me"
                    />
                    <meta property="og:title" content="Jack Weller" />
                    <meta
                        property="og:description"
                        content="My personal website. Here I share my projects and post what I'm up to on my blog"
                    />
                    <meta property="og:image" content="/images/title.png" />

                    <meta
                        property="twitter:card"
                        content="summary_large_image"
                    />
                    <meta
                        property="twitter:url"
                        content="https://www.jackweller.me"
                    />
                    <meta property="twitter:title" content="Jack Weller" />
                    <meta
                        property="twitter:description"
                        content="My personal website. Here I share my projects and post what I'm up to on my blog"
                    />
                    <meta
                        property="twitter:image"
                        content="/images/title.png"
                    />
                </Helmet>
                {children}
            </HelmetProvider>
        </>
    );
}

Root.propTypes = {
    children: PropTypes.node.isRequired,
};
