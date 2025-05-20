module.exports = {
  purge: {
    mode: 'all',
    content: ["./public/**/*.{html,js}"],
  },
  theme: {
    fontFamily: {
      body: ['Anton']
    },
    extend: {},
  },
  plugins: [
    require('autoprefixer')
  ],
}
