module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Domeniul Cantacuzino Florești', // Navigation and Site Title
  titleAlt: 'Domeniul Cantacuzino Florești', // Title for JSONLD
  description: 'Domeniul Cantacuzino Florești',
  headline: 'Domeniul Cantacuzino Florești', // Headline for schema.org JSONLD
  url: 'http://domeniulcantacuzino.ro', // Domain of your site. No trailing slash!
  siteLanguage: 'ro', // Language Tag on <html> element
  logo: 'src/logo.png', // Used for SEO
  ogLanguage: 'ro_RO', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/logo.png', // Used for manifest favicon generation
  shortName: 'Prismic', // shortname for manifest. MUST be shorter than 12 characters
  author: 'DomeniulCantacuzino', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@stefanboicea', // Twitter Username
  facebook: 'stefan-boicea', // Facebook Site Name
  // googleAnalyticsID: 'UA-47519312-7',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
