import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <title>Ghica Floresti</title>
        <meta name="description" content="ghica floresti" />
        <meta name="keywords" content="ghica, floresti" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <script src={'/assets/js/modernizr-2.8.0.min.js'}></script>
        <link href={'/assets/css/bootstrap.min.css'} rel="stylesheet" />
        <link href={'/assets/css/font-awesome.min.css'} rel="stylesheet" />
        <link href={'/assets/css/linecons-font-style.css'} rel="stylesheet" />

        <link href={'/assets/css/style.css'} rel="stylesheet" />
        <link href={'/assets/css/responsive.css'} rel="stylesheet" />
        <link rel="stylesheet" href={'/assets/css/owl.carousel.css'} />
        <link rel="stylesheet" href={'/assets/css/prettyPhoto.css'} />
        <link rel="shortcut icon" href={'/images/favicon.png'} />

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

        <script src={'/assets/js/jquery-2.1.0.min.js'}></script>
        <script src={'/assets/js/email-validation.js'}></script>
        <script src={'/assets/js/jquery.visible.min.js'}></script>
        <script src={'/assets/js/plugins.js'}></script>
        <script src={'/assets/js/jquery.parallax.js'}></script>
        <script src={'/assets/js/functions.js'}></script>
        <script type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
 
        `,
          }}
        />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
