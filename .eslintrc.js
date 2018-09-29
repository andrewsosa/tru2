module.exports = {
    "extends": "airbnb",
    "plugins": [
        "babel"
    ],
    "parser": "babel-eslint",
    "rules": {
        "strict": 0,
        "no-unused-vars": "off",
        "space-before-function-paren": "warn",
        "object-curly-newline": "off",
        "no-console": "off",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "react/forbid-prop-types": "off",

        // // Replaced by eslint-babel
        // "new-cap": 0,
        // "no-invalid-this": 0,
        // "object-curly-spacing": 0,
        // "quotes": 0,
        // "semi": 0,
        // "no-unused-expressions": 0,
        // "valid-typeof": 0,

        // // Replacements for built-in eslint
        // "babel/new-cap": 1,
        // "babel/no-invalid-this": 1,
        // "babel/object-curly-spacing": 1,
        // "babel/quotes": 1,
        // "babel/semi": 1,
        // "babel/no-unused-expressions": 1,
        // "babel/valid-typeof": 1,
    }
};
