# Thin CSS: The Last Framework You'll Ever **Not** Need

A lightweight, utility-first CSS framework built with modern Sass and PostCSS. Build beautiful layouts with minimal CSS and maximum flexibility.

## 🚀 Features

- **Utility-first approach** - Build layouts quickly with utility classes
- **Modern Sass** - Uses latest Sass features and best practices
- **Optimized output** - PostCSS processing with autoprefixer and cssnano
- **Source maps** - Better debugging experience
- **Type scale** - Mathematical type scaling system with roman numerals
- **Flexbox utilities** - Complete flexbox control
- **Positioning** - Absolute and fixed positioning utilities
- **Spacing** - Comprehensive padding and margin utilities
- **Reset styles** - Clean element resets

## 📦 Installation

```bash
npm install thin.css
```

## 🌐 CDN

```html
<link rel="stylesheet" href="https://unpkg.com/thin.css@2.0.3/dist/thin.css">
```

## 📖 Quick Start

Include thin.css in your HTML and start building with utility classes:

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://unpkg.com/thin.css@2.0.3/dist/thin.css">
</head>
<body>
  <div class="flex--center">
    <h1 class="type--size-i+2">Hello, Thin CSS!</h1>
  </div>
</body>
</html>
```

## 🎯 Core Utilities

### Flexbox Layout

Build flexible layouts with the `.flex` utility:

```html
<!-- Basic flex container -->
<div class="flex">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Centered content -->
<div class="flex--center">
  <div>Centered content</div>
</div>

<!-- Space between items -->
<div class="flex--between">
  <div>Left</div>
  <div>Right</div>
</div>

<!-- Vertical layout -->
<div class="flex--column">
  <div>Top</div>
  <div>Bottom</div>
</div>

<!-- Column with center alignment -->
<div class="flex--column-center">
  <div>Centered vertically and horizontally</div>
</div>

<!-- Flex wrap -->
<div class="flex--wrap">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Typography

Control text with the `.type` utility using roman numeral scale:

```html
<!-- Font sizes (roman numeral scale) -->
<h1 class="type--size-i+3">Largest heading (i+3)</h1>
<h2 class="type--size-i+2">Large heading (i+2)</h2>
<h3 class="type--size-i+1">Medium heading (i+1)</h3>
<p class="type--size-i">Normal text (i)</p>
<small class="type--size-i-1">Small text (i-1)</small>

<!-- Font weights -->
<p class="type--weight-light">Light text (300)</p>
<p class="type--weight-normal">Normal text (400)</p>
<p class="type--weight-bold">Bold text (700)</p>
<p class="type--weight-black">Black text (900)</p>

<!-- Text alignment -->
<p class="type--align-left">Left aligned</p>
<p class="type--align-center">Center aligned</p>
<p class="type--align-right">Right aligned</p>
```

### Spacing

Add consistent spacing with `.padding` and `.margin`:

```html
<!-- Padding (xs, sm, md, lg, xl) -->
<div class="padding--all-md">Medium padding all around</div>
<div class="padding--vertical-lg padding--horizontal-sm">Large vertical, small horizontal padding</div>
<div class="padding--top-xl">Extra large top padding</div>

<!-- Margins -->
<div class="margin--top-lg">Large top margin</div>
<div class="margin--bottom-md">Medium bottom margin</div>
<div class="margin--auto-horizontal">Centered with auto margins</div>

<!-- Zero margins -->
<div class="margin--zero">No margins</div>
<div class="margin--zero-top">No top margin</div>
```

### Positioning

Position elements with `.layout` and `.fixed`:

```html
<!-- Relative positioning (requires .layout--container parent) -->
<div class="layout--container">
  <div class="layout--top-left">Top left corner</div>
  <div class="layout--center">Absolutely centered</div>
  <div class="layout--bottom-right">Bottom right corner</div>
</div>

<!-- Fixed positioning -->
<div class="fixed--top">Fixed to viewport top</div>
<div class="fixed--center">Fixed to viewport center</div>
<div class="fixed--bottom">Fixed to viewport bottom</div>
```

### Overflow Control

Handle content overflow:

```html
<!-- Scrollable content -->
<div class="overflow--scroll-y" style="height: 200px;">
  <p>Long content that will scroll vertically...</p>
</div>

<!-- Hidden overflow -->
<div class="overflow--hidden">
  <p>Content that overflows will be hidden</p>
</div>

<!-- Text truncation -->
<div class="overflow--ellipsis">
  <p>This text will be truncated with ellipsis if it's too long</p>
</div>

<!-- Word breaking -->
<div class="overflow--break-word">
  <p>Long words will break to prevent overflow</p>
</div>
```

### Fill Utilities

Fill available space:

```html
<!-- Fill containers -->
<div class="fill--width">100% width</div>
<div class="fill--height">100% height</div>
<div class="fill--parent">100% width and height</div>

<!-- Fill viewport -->
<div class="fill--viewport">100vw × 100vh</div>
<div class="fill--screen">Full screen with min-height</div>
```

### Float Utilities

Control element floating:

```html
<!-- Float elements -->
<div class="float--left">Floated left</div>
<div class="float--right">Floated right</div>

<!-- Clear floats -->
<div class="float--clear">Clears floated elements</div>
```

## 🎨 Complete Example

Here's a complete example showing multiple utilities working together:

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://unpkg.com/thin.css@2.0.3/dist/thin.css">
</head>
<body>
  <!-- Header -->
  <header class="flex--between padding--all-md">
    <h1 class="type--size-i+2 type--weight-bold">My App</h1>
    <nav class="flex">
      <a href="#" class="margin--right-md">Home</a>
      <a href="#" class="margin--right-md">About</a>
      <a href="#">Contact</a>
    </nav>
  </header>

  <!-- Main content -->
  <main class="padding--all-lg">
    <div class="flex--column">
      <!-- Hero section -->
      <section class="flex--center padding--vertical-xl">
        <div class="type--align-center">
          <h2 class="type--size-i+3 type--weight-bold margin--bottom-md">Welcome</h2>
          <p class="type--size-i+1 margin--bottom-lg">
            This is the main content area using Thin CSS utilities.
          </p>
          <button class="reset" style="background: #007bff; color: white; padding: 12px 24px; border-radius: 4px;">
            Get Started
          </button>
        </div>
      </section>

      <!-- Content grid -->
      <div class="flex--wrap">
        <div class="padding--all-md" style="flex: 1; min-width: 300px;">
          <h3 class="type--size-i+1 type--weight-bold margin--bottom-sm">Feature 1</h3>
          <p class="type--size-i">Description of feature one.</p>
        </div>
        <div class="padding--all-md" style="flex: 1; min-width: 300px;">
          <h3 class="type--size-i+1 type--weight-bold margin--bottom-sm">Feature 2</h3>
          <p class="type--size-i">Description of feature two.</p>
        </div>
        <div class="padding--all-md" style="flex: 1; min-width: 300px;">
          <h3 class="type--size-i+1 type--weight-bold margin--bottom-sm">Feature 3</h3>
          <p class="type--size-i">Description of feature three.</p>
        </div>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="flex--center padding--all-md" style="background: #f8f9fa;">
    <p class="type--size-i-1 type--align-center">© 2024 My App. Built with Thin CSS.</p>
  </footer>
</body>
</html>
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Development build (no cleanup)
npm run dev

# Watch for changes
npm run watch

# Clean build directory
npm run clean
```

## 📁 Project Structure

```
src/
├── 2.0/           # Main framework source
│   ├── _flex.scss     # Flexbox utilities
│   ├── _type.scss     # Typography
│   ├── _layout.scss   # Positioning utilities
│   ├── _padding.scss  # Padding utilities
│   ├── _margin.scss   # Margin utilities
│   ├── _overflow.scss # Overflow utilities
│   ├── _reset.scss    # Reset utilities
│   └── index.scss     # Main entry point
└── 1.0/           # Legacy version
```

## 📄 License

ISC License
