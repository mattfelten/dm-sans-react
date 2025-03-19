# Using DM Sans with alternate G character

https://github.com/mattfelten/dm-sans-react

### What didn't work

-   **Google Fonts**
-   **Font Source**

I thought this had to do with the file types Google & Font Source are loading (.ttf & .woff2 respectively) didn't support Open Type features but in my testing that's not true. Maybe they're both just using old versions of the font?

### What did work

-   Downloading the fonts from the source repo https://github.com/googlefonts/dm-fonts/
-   Loading the fonts manually with `@font-face`

This also means that swapping the g character through CSS `font-feature-settings: 'ss03' on;` can happen globally with the `@font-face` declarations.
