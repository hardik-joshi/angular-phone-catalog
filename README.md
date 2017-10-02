# AngularJS Phone Catalog Tutorial Application


## Overview

This application takes the developer through the process of building a web-application using
AngularJS. The application is loosely based on the **Google Phone Gallery**, which no longer exists.
Here is a historical reference: [Google Phone Gallery on WayBack][google-phone-gallery]

Each tagged commit is a separate lesson teaching a single aspect of the framework.

The full tutorial can be found at https://docs.angularjs.org/tutorial.


## Prerequisites

### Git

- A good place to learn about setting up git is [here][git-setup].
- You can find documentation and download git [here][git-home].

### Node.js and Tools

- Get [Node.js][node].
- Install the tool dependencies: `npm install`


## Workings of the Application

- The application filesystem layout structure is based on the [angular-seed][angular-seed] project.
- There is no dynamic backend (no application server) for this application. Instead we fake the
  application server by fetching static JSON files.
- Read the _Development_ section at the end to familiarize yourself with running and developing
  an Angular application.


## Commits / Tutorial Outline

You can check out any point of the tutorial using:

```
git checkout step-?
```

To see the changes made between any two lessons use the `git diff` command:

```
git diff step-?..step-?
```

### step-0 _Bootstrapping_

- Add the 'angular.js' script.
- Add the `ngApp` directive to bootstrap the application.
- Add a simple template with an expression.

### step-1 _Static Template_

- Add a stylesheet file ('app/app.css').
- Add a static list with two phones.

### step-2 _Angular Templates_

- Convert the static phone list to dynamic by:
  - Creating a `PhoneListController` controller.
  - Extracting the data from HTML into the controller as an in-memory dataset.
  - Converting the static document into a template with the use of the `ngRepeat` directive.
- Add a simple unit test for the `PhoneListController` controller to show how to write tests and
  run them using Karma.

### step-3 _Components_

- Introduce components.
- Combine the controller and the template into a reusable, isolated `phoneList` component.
- Refactor the application and tests to use the `phoneList` component.

### step-4 _Directory and File Organization_

- Refactor the layout of files and directories, applying best practices and techniques that will
  make the application easier to maintain and expand in the future:
  - Put each entity in its own file.
  - Organize code by feature area (instead of by function).
  - Split code into modules that other modules can depend on.
  - Use external templates in `.html` files (instead of inline HTML strings).

### step-5 _Filtering Repeaters_

- Add a search box to demonstrate:
  - How the data-binding works on input fields.
  - How to use the `filter` filter.
  - How `ngRepeat` automatically shrinks and grows the number of phones in the view.
- Add an end-to-end test to:
  - Show how end-to-end tests are written and used.
  - Prove that the search box and the repeater are correctly wired together.

### step-6 _Two-way Data Binding_

- Add an `age` property to the phone model.
- Add a drop-down menu to control the phone list order.
- Override the default order value in controller.
- Add unit and end-to-end tests for this feature.

### step-7 _XHR & Dependency Injection_

- Replace the in-memory dataset with data loaded from the server (in the form of a static 'phone.json' file to keep the tutorial backend   agnostic):
  - The JSON data is loaded using the `$http` service.
- Demonstrate the use of services and `dependency injection` (DI):
  - `$http` is injected into the controller through DI.
  - Introduce DI annotation methods: `.$inject` and inline array
