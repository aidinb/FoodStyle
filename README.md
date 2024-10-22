# Aidin Challenge

## Description

This project is a mobile application built with React Native that displays countries in a hierarchical manner, starting from higher levels. It utilizes various libraries and tools to manage state, make API calls, handle navigation, and render SVG files.

## Technologies Used

- **React Native**: Framework for building native apps using React.
- **Axios**: For making API calls to fetch data.
- **MobX**: For state management, providing the following advantages:
   - **Simplicity**: Easy to understand and use, especially for developers familiar with object-oriented programming.
   - **Performance**: Efficiently tracks and updates only the parts of the state that have changed.
   - **Scalability**: Suitable for large applications due to its flexible and modular architecture.
- **React Native SVGs**: For rendering SVG files within the app.
- **React Navigation**: For handling navigation between different screens and levels.

## Installation

1. Clone the repository: git clone https://github.com/aidinb/FoodStyle
2. Navigate to the project directory: cd FoodStyle
3. Install dependencies: yarn
4. Start the application: yarn start
5. Ios: pod install - yarn run-ios
6. Android: yarn run-android

## Usage

1. Ensure your development environment is set up for React Native.
2. Use a simulator or connect a physical device to view the application.
3. Run the application and navigate through the categories using the provided navigation features.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## Testing

Due to time constraints, comprehensive testing has not been implemented. However, the following tools are typically used for testing in React Native applications:

- **Unit Testing**: Utilize **React Test Renderer** and **Jest** for unit testing components and functions.

- **Integration Testing**: For integration testing, tools like **Maestro** or **Detox** can be used to ensure smooth interactions between different parts of the application.

## CI/CD (Continuous Integration / Continuous Deployment)

Utilizes CI/CD pipelines to automate the build and deployment processes. We typically use either **App Center** or **Fastlane** for managing these pipelines.

## Analytics and Performance Monitoring

Analytics and performance monitoring are crucial, typically managed using tools like **Firebase** and **Sentry**.

## License

This project is licensed under the Aidin Bazarchi License.

## Acknowledgements

- Thanks to the contributors of React Native, Axios, MobX, React Native SVGs, and React Navigation for their excellent libraries and tools.
