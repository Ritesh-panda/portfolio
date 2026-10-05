import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  canonicalPath?: string
  ogType?: 'website' | 'profile' | 'article'
  schema?: Record<string, unknown>
}

const BASE_URL = 'https://riteshpanda.com'
const DEFAULT_TITLE = 'Ritesh Panda — AI/ML Engineer & Product-Minded Builder'
const DEFAULT_DESCRIPTION =
  'Ritesh Ranjan Panda is an AI/ML engineer and product-minded builder exploring artificial intelligence, intelligent systems, applied research, and product development.'

/**
 * Helper to get or create a <meta> tag
 */
function setMetaTag(nameOrProperty: 'name' | 'property', attrValue: string, content: string) {
  let element = document.querySelector(`meta[${nameOrProperty}="${attrValue}"]`) as HTMLMetaElement | null
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(nameOrProperty, attrValue)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

/**
 * Helper to get or create a <link rel="..."> tag
 */
function setLinkTag(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

/**
 * SEO Component — Dynamic Document Title, Canonical URL, Meta, and OpenGraph manager
 * Ensures 100% compliant SEO across client-side page changes.
 */
export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonicalPath = '',
  ogType = 'website',
  schema,
}: SEOProps) {
  const canonicalUrl = `${BASE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`.replace(
    /\/$/,
    canonicalPath === '' || canonicalPath === '/' ? '/' : ''
  )

  useEffect(() => {
    // 1. Document Title
    document.title = title

    // 2. Meta Description
    setMetaTag('name', 'description', description)

    // 3. Canonical Link
    setLinkTag('canonical', canonicalUrl)

    // 4. Open Graph
    setMetaTag('property', 'og:title', title)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:url', canonicalUrl)
    setMetaTag('property', 'og:type', ogType)
    setMetaTag('property', 'og:site_name', 'Ritesh Ranjan Panda')

    // 5. Twitter
    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', title)
    setMetaTag('name', 'twitter:description', description)
    setMetaTag('name', 'twitter:url', canonicalUrl)

    // 6. Optional Page-specific Schema JSON-LD
    let scriptTag: HTMLScriptElement | null = null
    if (schema) {
      scriptTag = document.createElement('script')
      scriptTag.type = 'application/ld+json'
      scriptTag.id = 'dynamic-page-schema'
      scriptTag.textContent = JSON.stringify(schema)
      document.head.appendChild(scriptTag)
    }

    return () => {
      if (scriptTag && scriptTag.parentNode) {
        scriptTag.parentNode.removeChild(scriptTag)
      }
    }
  }, [title, description, canonicalUrl, ogType, schema])

  return null
}
