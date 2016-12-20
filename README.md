OneExchange-ComponentGuide
==================

## Project Structure
```
- base (compiled js from components/base)
- components
| - base
  | - icons
    | - Icon.js
    | - Icon.md
    | - Icon.specs.js
  | - buttons
    | - Button.js
    | - Button.md
    | - Button.specs.js
- css
| - bootstrap.less (compiled from less)
- styles (contains all our less files)
```

## Build commands
```
npm run build (build all assets)
npm run build-css (build css)
npm run build-js (build javascripts)
npm run styleguide-server (run the styleguide on localhost:3000)
```
