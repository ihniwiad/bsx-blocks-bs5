# bsx-blocks-bs5

## Development

### Create `.env`

Example workspace setting (using publishing from workspace to WordPress):

```
<YOUR_USERS_FOLDER>
  ┣ workspace
  ┃ ┗ bsx-blocks-bs5
  ┃
  ┗ Herd
    ┗ my-project-wordpress-folder
      ┗ wp-content
        ┣ themes
        ┃ ┗ wp-vite-theme
        ┗ plugins
          ┗ bsx-blocks-bs5
```

`.env` content:

```
FOLDER_NAME="bsx-blocks-bs5"

# Folder to copy built data into (if unset no copying will be done).
PUBLISH_PATH="/Users/<YOUR_USERS_NAME>/Herd/my-project-wordpress-folder/wp-content/plugins"
```

* `FOLDER_NAME` ... name of your Plugin folder inside of `wp-content/plugins`
* `PUBLISH_PATH` ... path to your Plugin’s folder
* `<YOUR_USERS_NAME>` ... your user’s folder name (depends on your project’s location – here we use Herd, you may use MAMP or other)


### Watch

Since you need to watch 2 different processes which depend each other, you need 2 tabs in the terminal:

**1st tab** run (watching the WordPress Plugin files waiting for updates, copying files to destination):

```
npm run watch-copy
```
**2nd tab** run (watching WordPress Block component files waiting for changes, build Plugin):

```
npm run dev
```