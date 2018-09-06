import ContextProvider from '~/core/ContextProvider';

export default function resolveImage(imageUrl, context = ContextProvider.getContext()) {
  const url = `${context.getEnvUrl()}${imageUrl}`;
  return url;
}