# Frontend Mentor - Clipboard landing page solution

![Site preview](./design/desktop-preview.jpg)

This is a solution to the [Clipboard landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clipboard-landing-page-5cc9bccd6c4c91111378ecb9). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshots

- [Desktop](./screenshots/Frontend-Mentor-Clipboard-landing-page-desktop.png) - (1440px)

- [Tablet](./screenshots/Frontend-Mentor-Clipboard-landing-page-tablet.png) - (1024px)

- [Mobile](./screenshots/Frontend-Mentor-Clipboard-landing-page.png) - (375px)

### Links

- Solution URL: [View](https://github.com/snehamoybag/fem-clipboard-landing-page)
- Live Site URL: [View](https://snehamoybag.github.io/fem-clipboard-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [BEM](https://getbem.com/) - Naming Convention
- [Sass/Scss](https://sass-lang.com/) - Pre-processor
- [Vite](https://vitejs.dev/) - Development Enviroment
- [AOS Library](https://michalsnik.github.io/aos/) - For Scroll Animations

### What I learned

This project helped me to understand grid layout better and how Grid can be used in simple layouts to reduce extra lines of codes. Grid gap can be used instead of margins to space-out elements and grid makes positioning of elements super easy.

```css
  /* centering a div is a piece of cake */
  .parent {
    display: grid;
    place-items: center;
  }
```

```html
  <!-- center the child -->
  <div class="parent">
    <div class="child"> <!-- I am now centered --> </div>
  </div>
```

The design of the site is very plain and simple so I wanted to use some scroll Animations, hence I installed the popular 'Animation on Scroll' aka the AOS Library. I installed the Library via NPM and used the given javascript codes to use the animations on my HTML file, which was super easy to do.

Although some animations were causing horizontal scroll bar to appear, so I had to implement some  javascript to add an `overflow-X: hidden` style on the animation's container/parent block.

### Continued development

I want to learn more about the 'implicit' behaviour of grid cells and how to make them responsive, as currently the site looks weired when viewed from desktop mode on a smartphone.

### Useful resources

- [CSS Grid](https://youtube.com/playlist?list=PLu8EoSxDXHP5CIFvt9-ze3IngcdAc2xKG) - This helped me to understand the basics of how grid works.
- [Use Grid instead of Flex](https://youtu.be/ctHE8EXEoj8) - This is an amazing video by the 'Css King' Kevin Powel where he discusses, why one should use Css Grid instead of Css Flexbox.

## Author

- Github - [@snehamoybag](https://github.com/snehamoybag)
- Frontend Mentor - [@snehamoybag](https://www.frontendmentor.io/profile/snehamoybag)
- Instagram - [@snehamoy_yt](https://www.instagram.com/snehamoy_yt/)