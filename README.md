# **Castcle Web - About**

## A decentralized social media for everyone

[![N|Solid](https://avatars.githubusercontent.com/u/85831466?s=200&v=4)](https://github.com/castcle)

This is a source code repository of [Castcle Platform](https://castcle.com)'s project about web page.

All works and source files published in this repository are published under [GNU AGPLv3](https://github.com/castcle/castcle-api/blob/main/LICENSE) license terms.

## **Getting Started** <a name="started"></a>

#### Prerequisites

- Download and **_install npm_** from https://nodejs.org/en/download/.

- Download and **_install git_** tool you prefer. If you don't have one, try [Github Desktop](https://desktop.github.com/).

- **_Clone_**, aka **_Check out_**, this repository to your local `<INSTALL_DIR>` by following [these steps](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository).

- **Navigate to `<INSTALL_DIR>`** by using **_Cmd_** _(in Windows)_ or **_Terminal_** _(in MacOS)_.

- **Install dependencies** by executing:

  - **Grunt**
  ```
    > npm install -g grunt-cli
  ```

  - **SASS**
  ```
    > npm install -g sass
  ```

  - **Browser Sync**
  ```
    > npm install -g browser-sync
  ```

  - **Node Modules**
  ```
    > npm install
  ```

  _**Note:** `sudo` root privileges may be required on some os platforms._

#### Running on Localhost

```
> npm run start
```

Castcle's project about page will be shown on your default browser with `browser-sync` supported. All changes made in `<INSTALL_DIR>/src` folder will be auto-refreshed on web browser.

#### Building Project

Compiled only

```
> npm run build
```

Minified verson (for distribution)

```
> npm run dist
```
