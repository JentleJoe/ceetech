import { useEffect } from 'react'

const upsertMetaTag = (selector, attributes) => {
  let tag = document.head.querySelector(selector)

  if (!tag) {
    tag = document.createElement('meta')
    Object.entries(attributes).forEach(([key, value]) => {
      tag.setAttribute(key, value)
    })
    document.head.appendChild(tag)
  }

  return tag
}

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = 'https://ceetechcrafts.com/search-logo.png',
  schema
}) => {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title

    const tracked = []

    const descriptionMeta = upsertMetaTag('meta[name="description"]', { name: 'description' })
    const previousDescription = descriptionMeta.getAttribute('content')
    descriptionMeta.setAttribute('content', description)
    tracked.push(() => {
      if (previousDescription === null) {
        descriptionMeta.removeAttribute('content')
      } else {
        descriptionMeta.setAttribute('content', previousDescription)
      }
    })

    const keywordsMeta = upsertMetaTag('meta[name="keywords"]', { name: 'keywords' })
    const previousKeywords = keywordsMeta.getAttribute('content')
    keywordsMeta.setAttribute('content', keywords)
    tracked.push(() => {
      if (previousKeywords === null) {
        keywordsMeta.removeAttribute('content')
      } else {
        keywordsMeta.setAttribute('content', previousKeywords)
      }
    })

    const ogTitleMeta = upsertMetaTag('meta[property="og:title"]', { property: 'og:title' })
    const previousOgTitle = ogTitleMeta.getAttribute('content')
    ogTitleMeta.setAttribute('content', title)
    tracked.push(() => {
      if (previousOgTitle === null) {
        ogTitleMeta.removeAttribute('content')
      } else {
        ogTitleMeta.setAttribute('content', previousOgTitle)
      }
    })

    const ogDescriptionMeta = upsertMetaTag('meta[property="og:description"]', { property: 'og:description' })
    const previousOgDescription = ogDescriptionMeta.getAttribute('content')
    ogDescriptionMeta.setAttribute('content', description)
    tracked.push(() => {
      if (previousOgDescription === null) {
        ogDescriptionMeta.removeAttribute('content')
      } else {
        ogDescriptionMeta.setAttribute('content', previousOgDescription)
      }
    })

    const ogTypeMeta = upsertMetaTag('meta[property="og:type"]', { property: 'og:type' })
    const previousOgType = ogTypeMeta.getAttribute('content')
    ogTypeMeta.setAttribute('content', ogType)
    tracked.push(() => {
      if (previousOgType === null) {
        ogTypeMeta.removeAttribute('content')
      } else {
        ogTypeMeta.setAttribute('content', previousOgType)
      }
    })

    const ogImageMeta = upsertMetaTag('meta[property="og:image"]', { property: 'og:image' })
    const previousOgImage = ogImageMeta.getAttribute('content')
    ogImageMeta.setAttribute('content', ogImage)
    tracked.push(() => {
      if (previousOgImage === null) {
        ogImageMeta.removeAttribute('content')
      } else {
        ogImageMeta.setAttribute('content', previousOgImage)
      }
    })

    const ogUrlMeta = upsertMetaTag('meta[property="og:url"]', { property: 'og:url' })
    const previousOgUrl = ogUrlMeta.getAttribute('content')
    ogUrlMeta.setAttribute('content', canonical)
    tracked.push(() => {
      if (previousOgUrl === null) {
        ogUrlMeta.removeAttribute('content')
      } else {
        ogUrlMeta.setAttribute('content', previousOgUrl)
      }
    })

    const twitterTitleMeta = upsertMetaTag('meta[property="twitter:title"]', { property: 'twitter:title' })
    const previousTwitterTitle = twitterTitleMeta.getAttribute('content')
    twitterTitleMeta.setAttribute('content', title)
    tracked.push(() => {
      if (previousTwitterTitle === null) {
        twitterTitleMeta.removeAttribute('content')
      } else {
        twitterTitleMeta.setAttribute('content', previousTwitterTitle)
      }
    })

    const twitterDescriptionMeta = upsertMetaTag('meta[property="twitter:description"]', {
      property: 'twitter:description'
    })
    const previousTwitterDescription = twitterDescriptionMeta.getAttribute('content')
    twitterDescriptionMeta.setAttribute('content', description)
    tracked.push(() => {
      if (previousTwitterDescription === null) {
        twitterDescriptionMeta.removeAttribute('content')
      } else {
        twitterDescriptionMeta.setAttribute('content', previousTwitterDescription)
      }
    })

    let canonicalTag = document.head.querySelector('link[rel="canonical"]')
    const canonicalExisted = Boolean(canonicalTag)
    const previousCanonical = canonicalTag?.getAttribute('href') ?? null

    if (!canonicalTag) {
      canonicalTag = document.createElement('link')
      canonicalTag.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalTag)
    }

    canonicalTag.setAttribute('href', canonical)

    const schemaScriptId = 'route-seo-schema'
    const existingSchema = document.getElementById(schemaScriptId)
    if (existingSchema) {
      existingSchema.remove()
    }

    let schemaScript = null
    if (schema) {
      schemaScript = document.createElement('script')
      schemaScript.setAttribute('id', schemaScriptId)
      schemaScript.setAttribute('type', 'application/ld+json')
      schemaScript.textContent = JSON.stringify(schema)
      document.head.appendChild(schemaScript)
    }

    return () => {
      document.title = previousTitle
      tracked.forEach((restore) => restore())

      if (!canonicalExisted) {
        canonicalTag.remove()
      } else if (previousCanonical !== null) {
        canonicalTag.setAttribute('href', previousCanonical)
      }

      if (schemaScript) {
        schemaScript.remove()
      }
    }
  }, [title, description, keywords, canonical, ogType, ogImage, schema])

  return null
}

export default SEO