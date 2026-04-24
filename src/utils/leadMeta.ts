const STORAGE_KEY = 'lead_meta_v1'

export interface LeadMeta {
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_content: string
  utm_term: string
  referrer: string
  landing_url: string
  yandex_client_id: string
  google_client_id: string
  first_visit: string
}

function getCookie(name: string): string {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
  return match ? decodeURIComponent(match[2]) : ''
}

function loadStored(): LeadMeta | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function captureLeadMeta(): void {
  const existing = loadStored()
  const params = new URLSearchParams(window.location.search)

  const hasUtmInUrl = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].some(
    k => params.get(k),
  )

  if (!existing || hasUtmInUrl) {
    const meta: LeadMeta = {
      utm_source: params.get('utm_source') || existing?.utm_source || '',
      utm_medium: params.get('utm_medium') || existing?.utm_medium || '',
      utm_campaign: params.get('utm_campaign') || existing?.utm_campaign || '',
      utm_content: params.get('utm_content') || existing?.utm_content || '',
      utm_term: params.get('utm_term') || existing?.utm_term || '',
      referrer: existing?.referrer || document.referrer || '',
      landing_url: existing?.landing_url || window.location.href,
      yandex_client_id: '',
      google_client_id: '',
      first_visit: existing?.first_visit || new Date().toISOString(),
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(meta))
    } catch {
      // ignore localStorage errors (private mode / full storage)
    }
  }
}

export function getLeadMeta(): LeadMeta {
  const stored = loadStored()
  const base: LeadMeta = stored || {
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_content: '',
    utm_term: '',
    referrer: document.referrer || '',
    landing_url: window.location.href,
    yandex_client_id: '',
    google_client_id: '',
    first_visit: new Date().toISOString(),
  }

  return {
    ...base,
    yandex_client_id: getCookie('_ym_uid'),
    google_client_id: getCookie('_ga'),
  }
}
