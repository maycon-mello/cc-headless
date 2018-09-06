// @flow
import ContextProvider from '~/core/ContextProvider';

export function preloadImages(images: Array<string>) {
  images.forEach(getImage);
}

export function getImage(src: string) {
  return new Promise((resolve, reject) => {
    const element = document.createElement('img');
    element.src = resolveImage(src);
    element.onload = function() {
      resolve(element);
    }
  })
}

export function resolveImage(imageUrl, context = ContextProvider.getContext()) {
  const url = `${context.getEnvUrl()}${imageUrl}`;
  return url;
}