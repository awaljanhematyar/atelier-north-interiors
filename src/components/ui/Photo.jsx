import { useState } from 'react'
import { responsiveSources } from '../../utils/images.js'

export default function Photo({ image, className = '', priority = false, sizes = '(min-width: 768px) 50vw, 100vw' }) {
  const [failedSource, setFailedSource] = useState(null)
  if (!image?.src || failedSource === image.src) {
    return <div className={`photo photo-fallback ${className}`} role="img" aria-label={`Reference photograph unavailable: ${image?.alt || 'No image provided'}`}><span aria-hidden="true">Reference image<br />unavailable</span></div>
  }
  return <div className={`photo ${className}`}><img src={image.src} srcSet={responsiveSources(image)} sizes={sizes} alt={image.alt || 'Illustrative interior reference photograph'} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} decoding="async" onError={() => setFailedSource(image.src)} /></div>
}

export function ImageCredit({ image }) {
  if (!image?.photographer || typeof image.source !== 'string' || !/^https:\/\/www\.pexels\.com\/photo\//.test(image.source)) return null
  return <span className="image-credit">Reference photo · <a href={image.source} target="_blank" rel="noreferrer">{image.photographer} / Pexels<span className="sr-only"> (opens in a new tab)</span></a></span>
}
