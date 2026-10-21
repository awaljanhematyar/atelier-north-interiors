// Intermediate size for the portrait reference flagged by the mobile audit.
export function responsiveSources(image) {
  if (image?.id === '28450649' && image.srcSet?.includes('/images/28450649-640.webp')) {
    return '/images/28450649-640.webp 640w, /images/optimized/28450649-960.webp 960w, /images/28450649-1600.webp 1600w'
  }
  return image?.srcSet
}
