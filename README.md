# Angular Tutorial - Homes App

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.2.

## Important Notes
1. I did not use the `homes-app-start` code.  Instead, I generated a new Angular project
using Angular/CLI 19.0.1 (since upgraded):

        `ng new homes-app --style=scss`

1. I configured WebStorm to generate single quotes around HTML tag attributes instead of double-quotes by:
   1. Go to Settings/Preferences: 
   1. Open the settings via File > Settings (Windows/Linux) or WebStorm > Preferences (macOS).
   1. Search for HTML Code Style: 
   1. Navigate to Editor > Code Style > HTML.
   1. Change Quote Style: In the "Other" tab, look for the Attribute quotes setting and select Single.
   1. Apply Changes: Click Apply and then OK. 
## Tools Used

| Tool             |  Version |
|:-----------------|---------:|
| @angular/CLI     |   19.0.3 |
| angular          |   19.0.3 |
| WebStorm         | 2024.3.0 |
| VSCode           |   1.95.3 |

## Change History

| Date       | Description                                                           |
|:-----------|:----------------------------------------------------------------------|
| 2024-11-30 | Initial creation                                                      |
| 2024-12-04 | Upgrade to Angular 19.0.3                                             |
| 2024-12-05 | Add Housing List and first set of CSS styles, up to tutorial video #4 |

## References
* [Learning Angular Tutorial Videos](https://www.youtube.com/watch?v=UnOwDuliqZA&list=PL1w1q3fL4pmj9k1FrJ3Pe91EPub2_h4jF&index=2)
* [Homes App Starter Code](goo.gle/homes-app-start)
* [Homes App Sample JSON data - goo.gle/homes-app-listings](https://gist.github.com/MarkTechson/efe8a9d4727ef33949b78812e66db082)
* [Homes App Styles - goo.gle/homes-app-styles](https://gist.github.com/MarkTechson/fa601fdc856d26b3bfa5030dae147f00)

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
