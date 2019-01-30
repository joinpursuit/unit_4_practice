Xavier:
null checks - accounting for latency period by using if/else statement. if these are empty, show 'loading'. else (i.e. 'if') show the fully loaded page.

Me:
create-react-app file_name
cd file_name
npm install --save react-router react-router-dom
npm install axios

# Practice Exam

For this exam, we have no opinion about what your component structure is, or where state is held. It's up to you to create a performant app with the routes we'd like to see.

Your homepage should simply read "Welcome to my Website", with links to each route on the top of the page in a persistent menu.

Using the [JSON Placeholder API](https://jsonplaceholder.typicode.com/), create the following routes:

- `/posts`: Lists each post with their corresponding comments underneath. Think Facebook. The comments should be indented so that we know they aren't part of the post. Make sure we know which users made the posts/comments!
- `/albums`: List of all album titles, with links to the individual album routes.
- `/albums/:id`: Lists all photos for a given album in a row that wraps if the page is too narrow. Don't worry about the photos' titles. Feel free to use the `thumbnailUrl` for the photos rather than the full-sized URL. Include a `back` link to return to the `/albums` route.
- `/todos`: List of all todos.
- `/users`: List of all users' names, each linking to that user's posts. There should be a text input with a button, `search`. When the user types a name (full, not case-sensitive) into the text input and clicks the button, the user list should be filtered for the user they're looking for.
- `/users/:id/posts`: List of all an individual users' posts.

After you create these routes, add the following styling:

- Import two fonts from Google Fonts - one for headers and one for bodies. Utilize them.
- Make each route's background color different. The top menu should have a consistent background color to differentiate it.
