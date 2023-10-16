module.exports = {
  locales: ['en', 'pt', 'es'],
  defaultLocale: 'en',
  pages: {
    "*": ["common"],
    "/[lang]": ["home"],
    "/[lang]/[slug]": ["common"]
  },
}