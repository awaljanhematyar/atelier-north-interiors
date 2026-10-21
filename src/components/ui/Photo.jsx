import { useState } from 'react'

export default function Photo({ image, className = '', priority = false, sizes = '(min-width: 768px) 50vw, 100vw' }) {
  const [failedSource, setFailedSource] = useState(null)
  if (failedSource === image.src) {
    return <div className={`photo photo-fallback ${className}`} role="img" aria-label={`Reference photograph unavailable: ${image.alt}`}><span aria-hidden="true">Reference image<br />unavailable</span></div>
  }
  return <div className={`photo ${className}`}><img src={image.src} srcSet={image.srcSet} sizes={sizes} alt={image.alt} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} decoding="async" onError={() => setFailedSource(image.src)} /></div>
}

export function ImageCredit({ image }) {
  return <span className="image-credit">Reference photo · <a href={image.source} target="_blank" rel="noreferrer">{image.photographer} / Pexels<span className="sr-only"> (opens in a new tab)</span></a></span>
}
