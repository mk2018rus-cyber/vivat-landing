import { getLeadMeta } from './leadMeta'

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/ooo-vs-grupp@yandex.ru'

export type LeadSource = 'quiz' | 'abandon_popup'

export interface QuizLead {
  source: LeadSource
  name?: string
  phone: string
  messenger: string
  area?: string
  address?: string
  floor?: string
  hasLift?: string
}

export async function sendLead(lead: QuizLead): Promise<boolean> {
  const meta = getLeadMeta()

  const payload = {
    _subject: `Новая заявка с сайта — ${lead.source === 'quiz' ? 'Квиз' : 'Поп-ап'}`,
    _template: 'table',
    _captcha: 'false',
    ...lead,
    ...meta,
    submitted_at: new Date().toISOString(),
    user_agent: navigator.userAgent,
  }

  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })
    return res.ok
  } catch {
    return false
  }
}
