# Flexbox

The Flexible Box Module, usually referred to as flexbox, was designed as a one-dimensional
layout model, and as a method that could offer space distribution between items
in an interface and powerful alignment capabilities.

## Learning Objectives

At the end of this project I am expected to explain to anyone without the use of google:

* What is Flexbox?
* How to convert float positioning to a flex display
* How to horizontally and vertically align elements using Flexbox
* The difference between the main and cross axes
* Properties that work on flex elements vs flex container
* Shorthands for flex
* How to create a new page with flex in mind

## Requirements


    Allowed editors: vi, vim, emacs
    A README.md at the root of the project directory is mandatory
    All of your code will be executed on Ubuntu 18.04 using Python 3.7.x
    All of your files should end with a new line


## Files

* HTML starter file
* CSS starter file
* article.html

## Mandatory Tasks

### Task 0

Use the starter HTML and CSS files from this task to task 10. Copy the contents of
the starter files into the files that you need to produce and make the necessary
changes according to the task description.

When using display: flex; on a container, all direct children become flex-items
(and no more inline or block elements).

With display flex, margins are not collapsing as they would with block items.
Also remember that flexbox is 1-dimensional system (vs CSS Grid which is a 2 dimensional system)

In the /* Grid section within your CSS

    Add a selector for the row class
        Property: display, Value: flex

=> Now, all children from the row class are flex items

    Entirely remove the row::after declaration
    Remove the float: left inside [class*='col-']

=> All elements should appear same than before using the float


### Task 1

Using the files from the previous task as the base for this task:

In the outermost section tag for services

    Add the class section-services

In the outermost section tag for works

    Add the class section-works

In the outermost section tag for about

    Add the class section-about-us

In the outermost section tag for latest_news

    Add the class section-latest-news

In the outermost section tag for testimonial

    Add the class section-testimonial

In the outermost section tag for contact

    Add the class section-contact


### Task 2

Using the files from the previous task for this task:

The flex-direction property says how flex items are placed on the main axis and their
direction (normal or reversed).
flex-direction is sometimes used when doing responsive design. Some elements may appear
better when they are in column mode on mobile and row when on desktop.

row-reverse and column-reverse should be used in specific situation. The visual order
of elements should be the same visually and in the HTML code. Refer to [flex-direction - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)
In your CSS file:

Before /*** 4. CARD ***/, add a new comment: /* Section Latest news ============================= */

Under that comment section, target the row class inside section-latest-news class

    Property: flex-direction, Value: row-reverse

The Latest news should appear in a reverse order. 


### Task 3

Using the files from the previous task for this task:

flex-wrap is a property that can force the flex items to be in one or multiple lines. Learn more about it here.

In the Services section of 3-index.html, remove the second ul and put the 3 lielements under the first ul

Now, in your CSS file, before /*** 4. CARD ***/, add a new comment: /* Section SERVICES ============================= */

Under that comment section, add a new selector targeting the row class inside the section-services class

    Property: flex-wrap, Value: wrap


### Task 4

Using the files from the previous task for this task:

In 4-styles.css file, within the Grid section

    In .col-1-3 selector
        Replace the current width with calc((100% / 3) - 2rem)

    In .col-1-2 selector
        Replace the current width with calc((100% / 2) - 2rem)

    In [class*='col-']
        Remove the padding declaration
        Set Property: margin to 1rem

    In ul.row declaration
        Replace the current margin with -1rem


### Task 5

Using the files from the previous task for this task:

In your 5-index.html file, inside the Header section

    Wrap the div with class header-logo and the div with class navbar-menu with a div that has header-container as a class

In your 5-styles.css file,

    Inside the /* Header section
    Add a selector for the header-container class
        Property: display, Value: flex
        Property: justify-content, Value: space-between
    Remove header-logo and header-logo a rules

    Remove the navbar-menu rule

    In the variables section
        Remove
            header-logo-position
            header-logo-link-display
            header-logo-link-position
            header-logo-link-top
            header-logo-link-left


### Task 6

Using the files from the previous task for this task:

in 6-styles.css, inside the /* Navbarsection

    In the nav class selector
        Property: display, Value: flex
    Inside the .nav .nav-item selector, remove the display declaration
    Target .nav-item + .nav-item inside nav class
        Move the margin declaration from .nav .nav-item inside the new selector.
    In the variables section
        Change the value of the variable nav-item-margin to be 0 0 0 2rem


### Task 7

Using the files from the previous task for this task:

In 7-styles.css, inside the /* Header section, in the header-container class selector,
set the property align-items to center


### Task 8

Using the files from the previous task for this task:

In 8-styles.cssInside the /* Section HERO section

    In the selector targeting section-inner class in section-hero class, remove the padding and replace with
        Property: display, Value: flex
        Property: flex-direction, Value: column
        Property: align-items, Value: flex-start
        Property: justify-content, Value: center
        Property: min-height, Value: 50vh


### Task 9

Using the files from the previous task for this task:

In 9-styles.css, after the /* Section SERVICES section, create a /* Section ABOUT US section. Inside that new section, target all classes that begin with col- inside section-about-us class

    Property: align-self, Value: center


### Task 10

Using the CSS file from the previous task and article.html (provided above in the project description) for this task:
In 10-styles.css, inside the /* Section HERO section
After the .section-hero, add a new hero-homepage class selector
(you will need to add that class later in your html files)
Move all declarations inside section-hero inside the new hero-homepage class selector

Inside section-hero class selector

    Property: position, Value: relative
    Property: margin-top, Value: -8.5rem

Below, target .section-body inside section-hero class

    Property: padding, Value: 10rem 4rem

Below, target .section-category inside section-hero class

    Property: color, Value: point to the variable color-white
    Property: text-transform, Value: uppercase



### Task 11

In 11-article.html in the Hero section

    Add the hero-article class on the <header> which is in <main>
    Add this background-image (pic-article-02.jpg) as an inline style still on the <header>
    Inside the section with section-inner class
        Add a span with the class section-category and the text Digital Life
        Below, add an h1 with the class section-title and the following text Ut alios omittam, hunc appello, quem ille unum secutus est

At the end of 11-styles.css, create a new comment section
   /*** ARTICLE PAGE ***/
   /* Section HERO (article)

```python
       ============================= */
```


### Task 12

In your 12-article.html file, in the Hero section

    After the header, create a <div>and set its class to main-article (this div will be siblings with the Hero section header)
    Create a div inside the main-article div and set the class to container
    Create a div with the class post inside the container div
    Inside the post div:
        Create a new article with the class post-content
        Below the post-content article, add the comment <!-- Aside section -->
        Sibling to the post-content article and after the comment, create an aside with the class post-aside
        Inside post-aside aside, create 2 divs:
            The first with the class post-meta
            The second with the class post-share

In your 12-styles.css:

    Target the main-article class
        Property: padding, Value: 5rem 0

    Add the below separator comment
```python
/* Post
    ============================= */
```


    Target the post class
        Property: display, Value: flex
    Target the post-content class
        Property: width, Value: 100%
    Target the post-aside class
        Property: order, Value: -1
        Property: min-width, Value: 20%


### Task 13

In your 13-article.html

    Create an unordered list inside the post-meta div with the classes post-meta-list and row
        Create a first <li> with the class post-meta-author
            Create the HTML tag that show a stronger importance
                Text: Written by:
            Create a link
                Href: #
                Rel: author
                Text: William Attaway
        Create a second <li> with the class post-meta-date
            Create the HTML tag that show a stronger importance
                Text: Posted on:
            Use the HTML tag for date / time - Datetime: 2019-10 - Text: October 2019
        Create a third <li> with the class post-meta-tag
            Create the HTML tag that show a stronger importance
                Text: Tags:
            Create an unordered list with the class tag-list
                First <li> contain a link
                    Href: #
                    Rel: tag
                    Text: Web Design
                Second <li> contain a link
                    Href: #
                    Rel: tag
                    Text: UX

Update 13-styles.css with this information

Add a separator comment 

```python
/* Post Meta
    ============================= */
```

Target the post-meta-list class

    Property: flex-direction, Value: column

Target the strong tag inside post-meta-list class

    Property: color, Value: point to the variable color-primary
    Property: font-size, Value: point to the variable font-size-small
    Property: text-transform, Value: uppercase
    Property: display, Value: block

Target all classes that start with post-meta- inside post-meta-list class

    Property: margin-bottom, Value: 1rem
    Property: padding-bottom, Value: 1rem
    Property: border-bottom, Values: 0.2rem solid and point to the color-light-grey variable

Target the last child of all classes that start with post-meta inside post-meta-list class

    Property: border, Value: none
    Property: margin-bottom, Value: 3rem

Add a separator comment

```python
/* Tag list
    ============================= */
```

Target the tag-list class

    Property: padding, Value: 0
    Property: list-style, Value: none

Target all li inside the tag-list class

    Property: display, Value: inline

Target the after pseudo element on the li inside tag-list class

    Property: content, Value: ", " (space after the comma)

Target the after pseudo element of the last-child on the li inside tag-list class

    Property: content, Value: empty


### Task 14

In your 14-article.html, inside the post-share div

    Copy paste the social nav list (already existing in the footer) inside
    Remove the li with Instagram (3rd one)
    Replace the href in the links with a default value ( #)
