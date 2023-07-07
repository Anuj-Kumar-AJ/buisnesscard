const tailwindcss = require('tailwindcss');

module.exports = {
    style: {
        postcss: {
            Plugins=[tailwindcss('./tailwind.config.js')]
        }
    }
}