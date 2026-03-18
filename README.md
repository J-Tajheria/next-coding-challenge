# Michael's NextJS Coding Challenge

## The Challenge:
Some newb has made a mess of this code. There are TODOs that need finishing off, broken and questionable tests and the code itself is inefficient.  
Please fix up whatever mess you find to get this piece of work working well.

### Extended tasks

- Our Product Manager wants a new 'checkout' page which should detail all of the items in the basket with their quantity and a total item quantity. Create this page.
- We've launched our new product API - <https://v0-api-endpoint-request.vercel.app/api/products> - can you please migrate the site to use the products from here - UK only for now. Our CTO is adamant that products should be available as soon as the page loads - no loading spinners.
- We've released a way of getting some more products. Its a bit slow so these can be displayed to the user after the initial products load please <https://v0-api-endpoint-request.vercel.app/api/more-products>
- We're launching in the states! When the user navigates to /us, prices should be displayed in dollars (USD) instead of GBP, and text should be localized for US users. Ensure the solution is scalable for future regions (e.g., Europe, Asia). Consider how you would handle currency formatting, locale-specific content, and dynamic routing.
- Run your applications tests when you push the branch to github
- Deploy your application when you push the branch to github

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, `npm install`, then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run the testing and linting with `npm run test` and `npm run lint`.

## Notes on my work
I approached the task by first identifying areas of repetition and improving the structure of the code. I introduced reusable components such as a Card component for product display and a Basket component to manage selected items.

I also replaced hardcoded data with a local JSON file to simulate dynamic data, allowing me to map over items and make the UI more scalable and maintainable.

### Component Structure & Approach
> Refactored the application to remove hardcoded UI by introducing reusable components:
    > Card component for displaying products
    > Basket logic handled in the main component
> Used .map() to dynamically render product data instead of duplicating markup

### Data Handling
> Replaced hardcoded product data with a local JSON file
> This allowed for more flexibility and simulated working with dynamic data

### Basket Functionality
> Implemented core basket functionality:
    > Add items to basket
    > Track quantity per item
    > Display total item count

> Added a dropdown-style basket preview showing:
    > Items
    > Quantities
    > Total price

### Testing
> Reviewed and improved existing unit tests within the time constraints
> Began improving coverage, though not fully comprehensive yet

### General Approach
> Focused on:
    > Improving reusability
    > Reducing duplication
    > Building a structure that could scale
    > Prioritised getting a working end-to-end flow before adding enhancements

## Improvements for next time
### Testing
> Add full unit test coverage:
    > Happy path scenarios
    > Edge cases:
        > Empty basket
        > Invalid items
        > Missing price data
> Add integration tests for user flows (e.g. adding to basket)
> Improve validation and error handling in tests

### Checkout Experience
> Replace dropdown basket with:
    > Side drawer (preferred for persistent visibility)
    > OR dedicated checkout page
> Improve usability, especially when scrolling

### Filtering & Search
> Add filtering options:
    > Category (e.g. clothing type)
    > Price range
    > Size, colour
> Add search functionality for quicker item discovery

### Pagination
> Implement pagination to:
    > Reduce excessive scrolling
    > Improve mobile experience
    > Better organise large datasets

### API Integration
> Replace local JSON with a real API
> Fetch products dynamically

### Backend & Architecture
> Introduce a backend layer:
    > API layer
    > Database (e.g. PostgreSQL, MongoDB)
> Separate:
    > UI
    > Business logic
    > Data layer

### State Management
> Move basket logic into:
    > Context API or state management library (e.g. Zustand)
> Improve scalability and avoid prop drilling

### Performance Optimisation
> Add:
    > Lazy loading / pagination
    > Memoisation where needed
> Reduce unnecessary re-renders

### Accessibility & UX
> Improve accessibility:
    > Keyboard navigation
    > ARIA attributes
> Enhance responsive design

### Productionisation
> Add CI/CD pipeline
> Improve test coverage
> Deploy via Vercel
> Configure environments properly