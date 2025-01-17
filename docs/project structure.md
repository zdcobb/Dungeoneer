# Project Structure Planning

### Data flows

- Dumb components/views; smart controllers & models
- MVC-"ish?":
  - Models will contain _most_ of the business logic;
  - View logic will be handled by components;
  - Controllers will control the flow of logic;
- Some higher-order components control their own data fetching, making things more composable and maintaining a "separation of concerns."

## Tech stack:

- AWS or GCP (?)
- docker & node
- yarn & vite
- React & typescript
- react router
- react query
- zod
- Vitest & Playwright

## Routes

- Register
- Login
- Home or Dashboard
- Maps Library
- Map viewer
- User Profile
- Password Recovery

## Option 1

### /Controllers or /Routes?

This will be where we store the routes/controllers for the project, this includes `loaders` & `actions` for each route.
Most business logic (e.g., data fetching & transformations) should be _defined_ in the `/models` and _used by_ the controllers as needed.

### /Components

As the title implies, this will be storage for components big and small. Some components will be "specialized", but generally
will be designed to be as dumb and reusable as possible.

- Heirarchical: prefer passing data downstream via props as opposed to relying on context/side effects or expecting components to fetch data.
- Data fetching: components should be view-centric, only dealing with UI logic in most cases, but in some specialized cases a component could fetch its own data.

### /Models

Models will serve 2 major purposes (and probably several other smaller):

1. Schema definitions of request/responses and commonly used objects w/in the project. Most likely Zod.
2. the models will also contain a much business logic as possible as it relates directly to the model,
   - i.e., a `user` model can also define functions for fetching user-related data.

### /Panels, /Pages, or /Views?

- Login
- User registration
- Landing/Welcome
- User prefs
- Maps library
- Map viewer/editor

### /Utils

???

## Option 2

Feature-Based Structure: instead of having things broken up by `/controllers`, `views`, `/models`, etc., the project will be split up into directories relating to features, e.g., the `/home` or `/dashboard` directories.

Each feature directory will have:

- component file
- styles (as needed)
- a zod model(s) w/ types (as needed)
- helpers
- fetchers? perhaps for loaders, actions, controller logic if large, etc.

There are also some non-feature-related folders too, such as:

- /layouts
- /config
- /routes
- etc. ???
