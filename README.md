# HomesApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.2.

## Tools Used

| Tool             |  Version |
|:-----------------|---------:|
| @angular/CLI     |   19.0.2 |
| angular          |   19.0.1 |
| WebStorm         | 2024.3.0 |
| VSCode           |   1.95.3 |

## Change History

| Date       | Description                                   |
|:-----------|:----------------------------------------------|
| 2024-11-30 | Initial creation                              |

## What you have to change from the videos to make this application work with Angular 19 and beyond
1. Move the `assets` folder from underneath the `src` folder to underneath the `public` folder.  If you don't move it,
the following tag will fail with an `HTTP 404 - Not Found` error in your brower:
```html

```
## References
* [Learning Angular Tutorial Videos](https://www.youtube.com/watch?v=UnOwDuliqZA&list=PL1w1q3fL4pmj9k1FrJ3Pe91EPub2_h4jF&index=2)
  
## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
