const isProduction = process.env.NODE_ENV.toString().trim() === "production";

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-nested": {},
    "postcss-preset-env": {
      stage: 1,
      features: {
        "nesting-rules": true,
      },
    },
    "postcss-discard-comments": {
      removeAll: true, // Loại bỏ tất cả các comment
    },
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",
    ...(isProduction ? { cssnano: {} } : {}),
  },
};
