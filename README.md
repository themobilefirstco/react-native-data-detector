# react-native-data-detector

Cross-platform text data detection for React Native. Uses **NSDataDetector** on iOS and **ML Kit Entity Extraction** on Android to detect phone numbers, URLs, emails, dates, and addresses — returning structured results to JavaScript.

## Features

- **Phone numbers** — Detect and extract phone numbers
- **URLs** — Detect web links
- **Emails** — Detect email addresses
- **Addresses** — Detect street addresses with parsed components (iOS)
- **Dates** — Detect dates and times with ISO 8601 output (iOS) / timestamps (Android)
- **Native accuracy** — Uses battle-tested platform APIs instead of regex
- **Expo Modules API** — Built with the modern Expo native module system

## Installation

```bash
npm install react-native-data-detector
```

### iOS

```bash
npx pod-install
```

### Android

The ML Kit entity extraction model (~5.6MB) is downloaded on first use. No additional setup is required.

## Usage

```typescript
import { detect } from 'react-native-data-detector';

// Detect all entity types
const entities = await detect('Call me at 555-1234 or email john@example.com');
// [
//   { type: 'phoneNumber', text: '555-1234', start: 14, end: 22, data: { phoneNumber: '555-1234' } },
//   { type: 'email', text: 'john@example.com', start: 32, end: 48, data: { email: 'john@example.com' } }
// ]

// Detect only specific types
const phones = await detect('Call 555-1234 or visit https://example.com', {
  types: ['phoneNumber'],
});
// [
//   { type: 'phoneNumber', text: '555-1234', start: 5, end: 13, data: { phoneNumber: '555-1234' } }
// ]
```

## API

### `detect(text, options?)`

Detects entities in the given text using native platform APIs.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | `string` | The text to analyze |
| `options` | `DetectOptions` | Optional configuration |

**DetectOptions:**

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `types` | `DetectionType[]` | All types | Which entity types to detect |

**DetectionType:** `'phoneNumber' | 'link' | 'email' | 'address' | 'date'`

**Returns:** `Promise<DetectedEntity[]>`

### `DetectedEntity`

| Property | Type | Description |
|----------|------|-------------|
| `type` | `DetectionType` | The type of detected entity |
| `text` | `string` | The matched text substring |
| `start` | `number` | Start index in the original string |
| `end` | `number` | End index (exclusive) in the original string |
| `data` | `Record<string, string>` | Additional structured data (see below) |

### Entity Data by Type

| Type | Data fields |
|------|-------------|
| `phoneNumber` | `{ phoneNumber }` |
| `link` | `{ url }` |
| `email` | `{ email }` |
| `address` | `{ street, city, state, zip, country }` (iOS) / `{ address }` (Android) |
| `date` | `{ date }` ISO 8601 string (iOS) / `{ timestamp }` milliseconds (Android) |

## Platform Differences

| Feature | iOS | Android |
|---------|-----|---------|
| Engine | NSDataDetector | ML Kit Entity Extraction |
| Offline | Always | After first model download |
| Address parsing | Structured components | Raw string |
| Date output | ISO 8601 | Timestamp (ms) |

## Requirements

- iOS 15.1+
- Android API 24+ (minSdk)
- Expo SDK 50+ or bare React Native with `expo-modules-core`

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT
