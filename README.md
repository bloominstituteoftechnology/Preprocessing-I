# Preprocessing-One
Preprocessing Module 1


Objective

Student should be able to install LESS as well as implement variables, operators, nesting, nested at-rules and bubbling.

Description / Rationale

Preprocessing extends the ability of CSS by adding abstractions and making CSS easier to use. There are many flavors of preprocessors but the one we will focus on will be LESS (Leaner Style Sheets).  LESS is a language extension for CSS.  It fits nicely into almost every type of development stack and has been ported to JavaScript among many other programming languages. http://lesscss.org/

Perhaps the biggest reason to learn a preprocessor is equal parts team coding techniques, and speed to delivery with no errors.

Instructor Notes

The students will be implementing LESS syntax on a project that is already built in normal CSS.   The guided demo will showcase everything they need to learn in order to accomplish the challenge.

Teacher Demo

Short Intro to Preprocessing

Preprocessing can cause confusion even after reading about it, take a few minutes to describe how preprocessors use other more robust languages to extend CSS syntax.

Preprocessor Syntax (Developer writes this code) -> preprocessor converts syntax into CSS -> Outputted CSS (developer does NOT write this code)

There are many different flavors of syntax that we need to be aware of.  Some of the most popular in use today are:

* [LESS](http://lesscss.org/)
* [SASS](http://sass-lang.com/)
* [Stylus](http://stylus-lang.com/)
* [PostCSS](http://postcss.org/)

Note: Learning one syntax will prepare you for all the others.  Don’t stress over which preprocessor is better or get hung up on features. For now, we are using LESS because it can be used with JavaScript as the processing language and is easily installed with the node package manager.

Guided Practice

Demonstrate the following in your favorite web editor, I prefer codepen.io for easy LESS configurations:

Variables

Start with a simple HTML structure to demonstrate scope:

```html
<div class="parent">
  <p>Parent</p>
  <div class="child">
    <p>Child</p>
    <div class="grandchild">
      <p>Grandchild</p>
    </div><!-- grandchild -->
  </div><!-- child -->
</div><!-- parent -->
```

Add some simple colors and show that the CSS selectors could be shown like this:

.parent {
  color: #D95ED9;
}

.parent .child {
  color: #8CD95E;
}

.parent .child .grandchild {
  color: #D95E61;
}

Explain that in this small example, we can already start to see 3 values that could be repeated over and over in a website color scheme. Introduce the use of variables using LESS:

Note: be sure to put the variables at the top of the page and explain how the cascade in CSS doesn’t go away in a preprocessor syntax
@orchid: #D95ED9;
@pastel-green: #8CD95E;
@roman: #D95E61;

.parent {
  color: @orchid;
}

.parent .child {
  color: @pastel-green;
}

.parent .child .grandchild {
  color: @roman;
}

Now that they can grasp the simple nature of variables, you can expound on how using variables across a team on a massive project can save literally hours of communication issues as well as DRY principles in programming.

Nesting

CSS scope is one of the biggest problems for beginning and even advanced CSS developers.  Throw in multiple teams contributing to a code base and you have a recipe for specificity disaster.  The introduction of nesting allows even a beginning CSS developer to correctly scope specificity.  Lets keep using our code example from above:

@orchid: #D95ED9;
@pastel-green: #8CD95E;
@roman: #D95E61;

.parent {
  color: @orchid;
}

.parent .child {
  color: @pastel-green;
}

.parent .child .grandchild {
  color: @roman;
}

We actually have our scope locked in nicely with a verbose selector train, but writing this over and over could introduce human error and one wrong selector could bleed scope.  Nesting is simply indenting child selectors inside of a parent.  Being able to control child selectors by indentation creates an easy to read and verbose selection structure.

Here is the above example nested:

// Variables at the top of the page
@orchid: #D95ED9;
@pastel-green: #8CD95E;
@roman: #D95E61;

// Selectors below variables
.parent {
  color: @orchid;

  .child {
    color: @pastel-green;

    .grandchild {
      color: @roman;

    }/
  }// child
}// parent

Take time to explain that the above structure ultimately outputs as pure CSS but now we don’t have to worry about re-writing the selector train over and over.

Note: A danger of introducing nesting to developers new to the concept will want to start nesting EVERYTHING from the body tag on down.  Explain that we should try to keep nesting to a “4 Deep Rule.”  Focus on components and not on the whole page.

Nested-At rules and bubbling



Operators

Operators allow more flexibility in a previously rigid CSS environment.  In LESS we can use +,-,*,/.  These operators can work on numbers, colors, and variables.

Occasionally you will come across a request where you would want to double the width of something no matter what the hard coded pixel is.  You can easily implement this using operators.  Using the previous example we could double the font using the * operator:

.parent {
  color: @orchid;
  font-size: 45px * 2;  // 90px
}

Operators can be used to create your own unique css rules or make tasks easier.  They are not used a lot compared to other features in LESS.

Comments

One of the major conveniences that preprocessors bring are comments.  Because we are writing in a language like JavaScript we can use // for single line comments and of course we can still use the block comment syntax from CSS:

// Single line comments FTW

/* This is a block comment */

Using single line comments to tag larger nested structures can be a huge help for a future developer reading your code.

Example:

.parent {
  color: @orchid;
  font-size: 45px * 2;

  .child {
    color: @pastel-green;

    .grandchild {
      color: @roman;

    }// grandchild
  }// child
}// parent

Escaping

Escaping allows you to use any string you want as a property or variable value. This can be pretty confusing at first as it’s a more advanced feature of LESS.  The syntax looks like this: ~”anything"

As an example we could use escaping to allow us to inject media queries a lot easier by setting up variables first:

@laptop: ~"(max-width: 1100px)";
@tablet: ~"(max-width: 768px)";
@phone: ~"(max-width: 400px)”;

This is really just holding a string, nothing more to it!  But when you combine it with other CSS items, you can get some amazing results:

.parent {
  color: @orchid;
  font-size: 45px * 2;

  .child {
    color: @pastel-green;

    @media @laptop {
      color: black;
    }

    @media @tablet {
      color: red;
    }

    @media @phone {
      color: silver;
    }

    .grandchild {
      color: @roman;

    }// grandchild
  }// child
}// parent

This would compile out to:

.parent {
  color: #D95ED9;
  font-size: 90px;
}
.parent .child {
  color: #8CD95E;
}
@media (max-width: 1000px) {
  .parent .child {
    color: black;
  }
}
@media (max-width: 768px) {
  .parent .child {
    color: red;
  }
}
@media (max-width: 400px) {
  .parent .child {
    color: silver;
  }
}
.parent .child .grandchild {
  color: #D95E61;
}

Now you could easily adjust tablet and mobile styles over and over using a simple @laptop or @tablet nested inside the proper element.  This is a massive idea to grasp when it comes to easily reading media queries in LESS!

Group Demo

Install LESS together via npm.  Go through the exported file process with them.  Make sure they understand that the exported CSS file is NOT where they work on project updates.

Challenge

Convert a single web page built with CSS into LESS syntax and incorporate proper nesting techniques, add variables, comments, and utilize escaping.


Pre Class Links

https://htmlmag.com/article/an-introduction-to-css-preprocessors-sass-less-stylus
