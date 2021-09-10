# Sass


##### Variables

Variables as a way to store information that you want to reuse throughout your stylesheet. You can store things like colors, font stacks, or any CSS value you think you'll want to reuse. Sass uses the \$ symbol to make something a variable.

```
$font-main: Helvetica, sans-serif;
$primary-color: #f0f;
$secondary-color: #ff0;

/* Usage: */
.title {
  font: $font-main;
  color: $primary-color;
}
```

##### Nested rules

Sass will let you nest your CSS selectors in a way that follows the same visual hierarchy.

```
.article {
    background-color: green;

    .title {
        font-size: 2em;

        span {
            color: red;
        }
    }
}

/* It will compile to: */
.article {
    background-color: green;
}
.article .title {
    font-size: 2em;
}
.article .title span {
    color: red;
}
```

###### Reference symbol ( & )

Sass uses reference symbol to concatenate to properties.
It can be classes, id, tag, state property (:hover, :focus, etc) etc.

```
.article {
    background-color: green;

    &:hover {
        background-color: yellow;
    }
}
```

##### Math Operators(+, -, /, \*)

CSS has `calc` which gives you ability to use math, but with scss syntax is just more familiar.

```
/* Addition */
p {
    font-size: 10px + 4px;
}

/* Subtraction */
p {
    font-size: 10px - 4px;
}

/* Multiplication */
p {
    font-size: 10px * 3;
}

/* Division */
p {
    font-size: 10px / 2;
}
```

And even remainder:

```
@function rainbow($position) {
    @if ($position % 3 === 1) {
        @return green
    }
    @else {
         @return red
    }
}

.article {
  font-size: double(14px);
}
```

##### Functions

As in any programming language, scss gives you ability to write your functions to style elements.

```
@function double($variable) {
 @return $variable * 2;
}

.article {
  font-size: double(14px);
}
```

##### Mixins

You can avoid repeating yourself with vendor coverage and prefixes. A mixin lets you make groups of CSS declarations that you want to reuse throughout your site. You can pass in values to make your mixin more flexible. A good use of a mixin is for vendor prefixes. Here's an example for transform.

```
@mixin justifyContent($value){
    -webkit-box-pack: $value;
    -ms-flex-pack: $value;
    justify-content: $value;
}

.container {
    @include justifyContent(space-between)
}
```

##### Conditionals

Sass has ability to write your styles with conditions. (@if @else)

```
@mixin setGap($size) {
  @if $isGap == small {
    margin: 20px;
  }
  @else if $size == medium {
    margin: 40px;
  } @else {
      margin: 60px;
  }
}

.article {
  @include setGap(small);
}
```

##### Loops

As in any programming language, scss gives us ability to use loops, such as `for`, `each` and `while` to generate css.

###### @for

The @for directive allows you to have `x` amount of iterations.

```
@for $i from 1 through 5 {
  .#item-#{$i} {
    width: 20px + $i
  }
}
```

###### @each

With `@each` you can apply particular logic to a list of things.

```
$list: banner sidebar footer

  @each $element in $list {
    .#{$element} {
      padding: 2em
    }
  }
```

###### @while

The @while directive takes an expression and emits the nested block of styles until the statement evaluates to false. Much like the @for control directive, you can create complex looping statements "while" a specific condition evaluates to true.

```
$items: 10
$item-width: 10px;

@while $items > 0 {
  .item-#{$items} {
    width: $items-width + ($items * 5)
  }
  $items: $items - 1
}
```

###### Interpolation

Interpolation can be used to inject into unquoted strings. This is particularly useful when dynamically generating names (for example for animations), or when using slash-separated values. Note that interpolation in SassScript always returns an unquoted string.

```
@function example($className) {
    .#{$className} {
        color: red;
    }
}
```

###### @import

Sass extends CSS's `@import` rule with the ability to import Sass and CSS stylesheets, providing access to mixins, functions, and variables and combining multiple stylesheets' CSS together. Unlike plain CSS imports, which require the browser to make multiple HTTP requests as it renders your page, Sass imports are handled entirely during compilation.

```
@import './mixins.scss'

.main {
    @include myMixin;
}
```

###### Checking If Parent Exists

The `&` symbol will select the parent element, if it exists. Or return null otherwise. Therefore, it can be used in combination with an `@if` directive.

```
@mixin styleParent {
    @if & {
        &:hover {
            color: green;
        }
    }
}
```

