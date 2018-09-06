export default function mapIfExists(reference, prop, func, defaultValue) {
  if (reference[prop] && reference[prop].map) {
    reference[prop] = reference[prop].map(func);
  } else {
    reference[prop] = defaultValue;
  }
}
