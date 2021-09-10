# Sass Exercises:

##### Setup:
1. Install `sass` - `npm i -g sass`;
2. Create folder for `scss` files and a separate folder for `css` files.
3. Create `scss` file and `css` files.
3. Run compiler in you terminal with `sass SCSS_FILE_PATH:CSS_FILE_PATH`.

```
NOTE: 
You can use `--watch` attribute to watch for any changes.
For example: `sass index.scss:index.css --watch`
```

1. Create a scss file `theme` and declare the next variables:
- color-primary;
- color-secondary;
- font-size-title;
- font-size-subtitle;
- font-size-text;
2. Style each type of elements inside `.main` with nesting.
3. Add hover stylings to third `li` from `.main` with nesting and `&`.
4. Create a function `setEms` which takes number as an argument and multiply by 14px;
5. Create a scss file `mixins` and create a mixin `container` with some default stylings.
7. Create some markup to test all your created styles.
8. create a function which takes argument(`small`, `medium`, `large`) and return font size `14px`, `18px` and `24px` respectfully.