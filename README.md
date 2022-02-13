# Earth Explorer V2
## Tech Stack
* React JS
* Deck.GL
* React Map GL
* Nebula.GL
# Welcome to Earth Explorer V2 
* What happened to Earth Explorer V1?
    * The codebase got out of hand
    * It was not written for testability or reusablity in mind
    * The scope and features built followed no plan
* V2 is designed to be all of these things from the ground up. 
    * It will be rebuilt from the ground up with best practices in mind
    * A more clearly defined scope has be written (With a roadmap to come soon)
    * V2 Will be fully tested
        * Using Cypress alongside Storybook to ensure components are reused

# How To Install/Run
* `git clone https://github.com/lm93547/earth-explorer-v2.git`
* ```cd folder-name```
* ```yarn install```
* ```yarn run```

## Run Generators
* ```yarn generate```
    * ```yarn generate component```
        * For generating a component (With Cypress Tests and Storybook Files)
    * ```yarn generate container```
        * For generating a redux ready container for new pages
    * ```yarn generate reducer-pattern```
        * For generating reducer patters for fetching and sharing data across containers

## Run Tests
* ```yarn cypress```
    * Runs Cypress tests in GUI mode
* ```yarn cypress-headless```
    * Run Cypress in CLI mode

# Roadmap
* UI Components
    * Header
        * Tests
        * Mobile Responsive
    * Sidebar
        * Tests
        * Mobile Responsive
* Map Container
* Github actions