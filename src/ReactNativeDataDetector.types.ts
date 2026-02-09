/**
 * The type of entity detected in the text.
 */
export type DetectionType =
  | 'phoneNumber'
  | 'link'
  | 'email'
  | 'address'
  | 'date';

/**
 * A single detected entity within the text.
 */
export interface DetectedEntity {
  /** The type of detected entity. */
  type: DetectionType;
  /** The matched text substring. */
  text: string;
  /** Start index of the match in the original string. */
  start: number;
  /** End index (exclusive) of the match in the original string. */
  end: number;
  /** Additional data depending on the type (e.g., URL string, phone number, date ISO string). */
  data?: Record<string, string>;
}

/**
 * Options for the detect function.
 */
export interface DetectOptions {
  /** Which entity types to detect. Defaults to all types. */
  types?: DetectionType[];
}
