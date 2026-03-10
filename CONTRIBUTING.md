# Contributing

Thanks for your interest in contributing to `react-native-data-detector`! This guide will help you get started.

## Prerequisites

- Node.js 18+
- Xcode 15+ (for iOS development)
- Android Studio (for Android development)
- CocoaPods

## Getting Started

1. Fork and clone the repository:

   ```bash
   git clone https://github.com/<your-username>/react-native-data-detector.git
   cd react-native-data-detector
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Project Structure

```
src/          # TypeScript source (module API and types)
ios/          # iOS native code (Swift, NSDataDetector)
android/      # Android native code (Kotlin, ML Kit)
example/      # Expo example app for manual testing
```

## Running the Example App

```bash
cd example
npm install
npx pod-install
npx expo run:ios     # or npx expo run:android
```

## Development Workflow

- **TypeScript changes** — edit files in `src/`, then run `npm run build`.
- **Native changes** — edit `ios/` or `android/`, then rebuild the example app.

## Available Scripts

| Script          | Description                        |
| --------------- | ---------------------------------- |
| `npm run build` | TypeScript typecheck and compile   |
| `npm run lint`  | Lint the codebase                  |
| `npm run test`  | Run tests                          |
| `npm run clean` | Remove build artifacts             |

## Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` — new feature
- `fix:` — bug fix
- `docs:` — documentation only
- `chore:` — maintenance, dependencies
- `refactor:` — code change that neither fixes a bug nor adds a feature
- `test:` — adding or updating tests

## Pull Request Process

1. Branch from `main`.
2. Make your changes and ensure all checks pass (`lint`, `build`, `test`).
3. Fill out the [PR template](.github/PULL_REQUEST_TEMPLATE.md).
4. Submit your PR against `main`.

## Code of Conduct

This project is governed by the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Reporting Bugs & Requesting Features

Please use the [issue templates](https://github.com/themobilefirstco/react-native-data-detector/issues/new/choose) when opening an issue.
