module.exports = {
  locales: ['en', 'pt', 'es'],
  defaultLocale: 'en',
  pages: {
    "*": ["common"],
    "/[lang]": ["common"],
    "/[lang]/[slug]": ["common"]
  },
}