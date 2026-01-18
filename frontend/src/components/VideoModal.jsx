import { useEffect } from 'react'

export default function VideoModal({ open, onClose, videoUrl }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null
  return (
    <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div className="w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-xl" onClick={(e) => e.stopPropagation()}>
        {videoUrl ? (
          <iframe
            className="w-full h-full"
            src={videoUrl}
            title="Showreel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video className="w-full h-full" controls>
            <source src="" type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  )
}
