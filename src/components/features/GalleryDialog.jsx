import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import Photo, { ImageCredit } from '../ui/Photo.jsx'

export default function GalleryDialog({ images, initialIndex = 0, onClose, trigger }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const available = Array.isArray(images) ? images.filter(image => image && image.src) : []
  const [index, setIndex] = useState(Math.min(Math.max(0, initialIndex), Math.max(0, available.length - 1)))
  const image = available[index]

  useEffect(() => {
    const dialog = dialogRef.current
    const overflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      dialog.close()
      document.body.style.overflow = overflow
      if (trigger?.isConnected) trigger.focus()
    }
  }, [trigger])

  function move(amount) {
    if (available.length > 1) setIndex(current => (current + amount + available.length) % available.length)
  }

  function handleKeys(event) {
    if (event.key === 'Escape') {
      event.preventDefault()
      onClose()
    } else if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault()
      move(event.key === 'ArrowRight' ? 1 : -1)
    } else if (event.key === 'Tab') {
      const controls = [...dialogRef.current.querySelectorAll('button:not(:disabled), a[href]')]
      const first = controls[0]
      const last = controls.at(-1)
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
  }

  return (
    <dialog className="gallery-dialog" ref={dialogRef} aria-labelledby="gallery-dialog-title" aria-describedby="gallery-dialog-description" aria-modal="true" onCancel={event => { event.preventDefault(); onClose() }} onKeyDown={handleKeys}>
      <div className="gallery-dialog__header">
        <h2 id="gallery-dialog-title">Reference image gallery</h2>
        <button ref={closeRef} type="button" onClick={onClose} aria-label="Close image gallery"><X size={22} aria-hidden="true" /></button>
      </div>
      <p id="gallery-dialog-description" className="gallery-dialog__disclosure">Illustrative references from separate spaces, not completed studio work. Use Left and Right arrows to browse; Escape to close.</p>
      {image ? <figure><Photo image={image} className="gallery-dialog__photo" priority sizes="90vw" /><figcaption><p aria-live="polite" aria-atomic="true">Image {index + 1} of {available.length}: {image.alt}</p><ImageCredit image={image} /></figcaption></figure> : <p role="status">No reference images are available for this concept.</p>}
      <div className="gallery-dialog__controls">
        <button type="button" disabled={available.length < 2} onClick={() => move(-1)}><ArrowLeft size={18} aria-hidden="true" /> Previous image</button>
        <button type="button" disabled={available.length < 2} onClick={() => move(1)}>Next image <ArrowRight size={18} aria-hidden="true" /></button>
      </div>
    </dialog>
  )
}
