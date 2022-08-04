module.exports = {
    env: {
      browser: true,
      node: true,
      es2022: true
    },
    extends: [
        "eslint:recommended",
        "@nuxtjs/eslint-config-typescript",
        'plugin:nuxt/recommended',
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended"
    ],
    parserOptions: {
        ecmaVersion: "latest",
        parser: "@typescript-eslint/parser",
        sourceType: "module"
    },
    plugins: [
        "vue",
        "@typescript-eslint"
    ]
}
