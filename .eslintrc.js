module.exports = {
  root: true,
  env: {
    node: true,
    browser: true, // 是否开启浏览器的环境变量
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",

    // 关闭括号后的报错
    "space-before-function-paren": 0,
  },
};
