const isProduction = process.env.NODE_ENV.toString().trim() === "production";

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-discard-comments": {
      removeAll: true, // Loại bỏ tất cả các comment
    },
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",
    ...(isProduction ? { cssnano: {} } : {}),
  },
};
