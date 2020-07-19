# Veterinária Deyse Ribeiro - Website
A veterinary about/blog/content built with Gatsby

## 🚀 Quick start

1.  **Setup Contentful Models**

    Use [contentful-cli](https://github.com/contentful/contentful-cli) to import the models from contentful-data.json

    ```
    contentful space --space-id <CONTENTFUL_spaceId> import --content-file contentful-data.json
    ```

    Then export/import data with:

    ```sh
    contentful space use
    contentful space export
    ```

1.  **Setup env**

    Clone `.env.example` to `.env` and fill `spaceId` and `accessToken` with Contentful info found in `Settings > API Keys`.

    ```sh
    npm install
    gatsby develop
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    npm install
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!