<h1 align="center">Github Clone</h1>

_This is application have a pretty landing page and a simply Github repository interface. In which you could sort repositories by `Date updated`, `Date created` and `Name`._
I wish you like it😁

## Index
 - [Getting Started](#getting-started)
 - [Built with](#built-with)

### Getting Started

To run the project, first is required to establish required environment variables. <br/>
You need to create a `.env` file in the root of the project and the keys you are going to use are specified into `.env.example` file.

Get an API Key at [https://github.com/settings/tokens](https://github.com/settings/tokens)

   ```env
   VITE_GITHUB_KEY=ENTER YOUR API
   ```

#### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/valentraverso/github-clone
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run project
     ```sh
    npm run dev
   ```

### Built with

- [React](https://es.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Octokit](https://octokit.github.io/rest.js/v19/)
- [@tanstack/react-query](https://tanstack.com/query)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React router DOM](https://reactrouter.com/)
- [Typewriter effect](https://www.npmjs.com/package/typewriter-effect)
- [React helmet async](https://www.npmjs.com/package/react-helmet-async)


### Future improvements
Some upgrades that I will like to do in the future are:

- Use the API v4 of Github wich works with GraphQL.
- Add a user search bar to improve UI/UX experience.
- More sorting options: language, description and stars.
- Add skeleton loaders to improve UI.

### Author

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/valentraverso"><img src="https://avatars.githubusercontent.com/u/56070071?v=4"
    width="100px;" alt="Valentino Traverso"/><br /><sub><b>Valentino Traverso</b></sub></a></td>
    </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->