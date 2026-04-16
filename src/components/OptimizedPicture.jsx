const OptimizedPicture = ({
  alt,
  avifSrcSet,
  webpSrcSet,
  fallbackSrcSet,
  fallbackSrc,
  sizes = '100vw',
  type = 'image/jpeg',
  pictureClassName,
  className,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority = 'auto',
  ...imgProps
}) => {
  return (
    <picture className={pictureClassName}>
      {avifSrcSet && <source srcSet={avifSrcSet} sizes={sizes} type="image/avif" />}
      {webpSrcSet && <source srcSet={webpSrcSet} sizes={sizes} type="image/webp" />}
      {fallbackSrcSet && <source srcSet={fallbackSrcSet} sizes={sizes} type={type} />}
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        {...imgProps}
      />
    </picture>
  )
}

export default OptimizedPicture
