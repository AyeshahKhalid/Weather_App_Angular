# WeatherAppAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


# Weather App

## Overview

The Weather App is an Angular-based web application that displays weather data in various chart formats. Users can view weather forecasts, select different chart types, and customize chart colors. The application uses NgRx for state management and RxJS for handling asynchronous operations.

## Features

- **Weather Forecast**: Displays weather forecast data using charts.
- **Chart Customization**: Allows users to customize chart titles, types, and colors.
- **Reactive Forms**: Utilizes Angular reactive forms for handling user inputs.
- **NgRx Integration**: Manages state with NgRx for a scalable and maintainable architecture.

### Prerequisites

- Node.js (v14.x or later)
- Angular CLI (v14.x or later)
- Git (optional, for version control)

# Application Structure
 src/app: Contains the main application files.
 components: Angular components for different views and features.
 services: Services for data handling and API communication.
 store: NgRx store-related files, including actions, reducers, and effects.
 models: TypeScript interfaces and models for the application.
 app.module.ts: Root module for the Angular application.
 app-routing.module.ts: Defines the application routes.
 
# Key Components
 ViewModeComponent: Displays weather data and manages chart configurations.
 ModalWindowComponent: Provides a dialog for chart customization.
 StateUtils: Contains utility methods for interacting with the NgRx store.
 ChartOptionsReducer: Manages the state related to chart options.
 
# NgRx State Management
 actions.ts: Defines actions for requesting and receiving weather data.
 reducers.ts: Contains reducers to handle state changes.
 effects.ts: Manages side effects, such as API calls and dispatching actions.
 selectors.ts: Provides selectors for querying the state.
 
# API Integration
The application interacts with a weather API to fetch weather data. Ensure that the API endpoints and keys are configured correctly in the weather.service.ts file.

# Configuration
environment.ts: Contains environment-specific configurations, including API keys and base URLs.

# Customization
To customize chart types, colors, and titles, update the relevant form controls in the ModalWindowComponent. Changes are applied dynamically to the charts.

