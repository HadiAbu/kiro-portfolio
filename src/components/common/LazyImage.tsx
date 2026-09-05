import React, { useState, useEffect, useRef } from 'react'
import styles from './LazyImage.module.css'

export interface LazyImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  placeholder?: string
  srcSet?: string
  sizes?: string
  onLoad?: () => void
  onError?: (error: Error) => void
}

/**
 * LazyImage component with Intersection Observer for lazy loading
 * Implements fade-in transition and error handling
 * Supports responsive images with srcset and sizes attributes
 *
 * Requirements: 8.4 (lazy loading), 11.2 (alt text)
 */
export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  placeholder,
  srcSet,
  sizes,
  onLoad,
  onError,
}) => {
  const [imageSrc, setImageSrc] = useState<string>(placeholder || '')
  const [imageSrcSet, setImageSrcSet] = useState<string>('')
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    // If browser doesn't support IntersectionObserver, load image immediately
    if (!('IntersectionObserver' in window)) {
      setImageSrc(src)
      if (srcSet) {
        setImageSrcSet(srcSet)
      }
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Load the actual image when it enters the viewport
            setImageSrc(src)
            if (srcSet) {
              setImageSrcSet(srcSet)
            }
            // Disconnect observer after loading
            observer.disconnect()
          }
        })
      },
      {
        // Start loading 50px before the image enters the viewport
        rootMargin: '50px',
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [src, srcSet])

  const handleLoad = () => {
    setIsLoaded(true)
    if (onLoad) {
      onLoad()
    }
  }

  const handleError = () => {
    setHasError(true)
    const error = new Error(`Failed to load image: ${src}`)
    if (onError) {
      onError(error)
    }
  }

  // Combine custom className with loading/loaded/error states
  const imageClasses = [
    styles.lazyImage,
    className,
    isLoaded ? styles.loaded : styles.loading,
    hasError ? styles.error : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      srcSet={imageSrcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      className={imageClasses}
      onLoad={handleLoad}
      onError={handleError}
      loading="lazy"
    />
  )
}

export default LazyImage
