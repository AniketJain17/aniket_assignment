<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>UI Library with Snabbdom and Lerna</h1>
<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style&logo=Prettier&logoColor=black" alt="Prettier" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/LERNA-3396F0.svg?style&logo=LERNA&logoColor=white" alt="LERNA" />
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
<img src="https://img.shields.io/badge/Markdown-000000.svg?style&logo=Markdown&logoColor=white" alt="Markdown" />
</p>
<img src="https://img.shields.io/github/license/AniketJain17/aniket_assignment?style&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/AniketJain17/aniket_assignment?style&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/AniketJain17/aniket_assignment?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/AniketJain17/aniket_assignment?style&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [⚙️ Overview](#Overview)
- [🚀 Getting Started](#-getting-started)
    - [🔧 Installation](#-installation)
    - [🤖 Running Form](#-running-Form)
---


## ⚙️ Overview 
This repository contains a UI library developed with Snabbdom for virtual DOM manipulation and Lerna for managing a monorepo structure. The library provides essential functionalities such as templating, reactivity, and lifecycle events.

### Task: Create a UI Library with Snabbdom and Lerna

### Objective: 
Create a UI library within a monorepo using Lerna (https://lerna.js.org/) while leveraging
the Snabbdom virtual DOM library ( https://github.com/snabbdom/snabbdom). The UI library
should encompass the following functionality:

### Functionality of the UI Library:

1. Templating: Provide a method that allows users to define the template for the view to be
rendered on the screen. Template should be a function which has inputs like state, props
and return a Virtual Node. (This method should be generic not specifically coded for the
below outcome).

3. Reactivity: Implement a method named updateState that can be utilized to modify the
internal state of the application and automatically update the view. Importantly, this
method should be designed to be callable within the Template function (ex, a button to call
handleClick function which increments state using updateState). The events listeners should
be handled directly using the snabbdom library rather than adding them using
addEventListener.

5. Life Cycle Events: Incorporate a lifecycle mechanism into the UI library. Detect when a
component is mounted and provide the capability to execute functions when necessary.
This is analogous to the useEffect function in React.

### Desired Outcome: 
Create a simple web page with the following elements:
● An <h1> tag with an initial value of 0.
● A button labeled "Add" that, when clicked, increments the count, and the UI should reflect
this change.
● Console log messages for when the component is mounted and when the state is changed
life cycle events.



## 🚀 Getting Started

### 🔧 Installation

1. Clone the Form repository:
```sh
git clone [https://github.com/AniketJain17/aniket_assignment](https://github.com/AniketJain17/aniket_assignment.git)
```

2. Change to the project directory:
```sh
cd aniket_assignment
```

3. Install the dependencies:
```sh
npm install
```

### 🤖 Running aniket_assignment

```sh
npm run start
```

---

[↑ Return](#Top)

---
