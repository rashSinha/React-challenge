# Take-home challenge instructions

#### Add Client ID and Client Secret to /config/spotify-api.js to run the app and get authenticated by Spotify

### Aim of this challenge:

- Develop a simple web app using React / VanillaJS
- You have full freedom over the styling of your app and while this is not as important to your overall score as functionality and code conventions we would expect your app to be responsive and follow best CSS practices (e.g. BEM naming conventions)
- App.tsx currently imports dummy json data - you **MUST** use data returned from an api call in your final submission, rather than this data.

### Running the app

To fire up the project run `npm install` and then `npm run start` in the root directory


### Requirements and expectations:

#### Mid-Weight Developer
  - Create at least two separate pages:
    - Home page with ~10 items displayed
    - Individual page to show info on each item, accessed by clicking on an item on the home page
  - Use of at least 3 separate front-end components to display data (you may edit and use the existing `Card` component but `App` does not count 😉 )
  - Integrate with one of the APIs listed below to retrieve data using an authenticated GET request (any method of implementation is allowed)
    - https://developers.themoviedb.org/3/getting-started/authentication
    - https://developer.spotify.com/documentation/web-api/
    - https://developers.gettyimages.com/docs/
  - Include a search component using queries to filter results
  - Apply atomic design priniciples to the app structure
  - Setup linting config and apply to your repo
  - Push to a repo on github/gitlab with properly labelled commits