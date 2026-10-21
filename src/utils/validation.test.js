import { describe, expect, it } from 'vitest'
import { validCalendarDate, validateEnquiry, vancouverToday } from './validation.js'

const valid = { name: 'Demo Visitor', email: 'demo@example.com', category: 'residential', date: '2026-10-21', time: 'morning', message: 'A fictional project brief.', acknowledgment: true }
const options = { consultation: true, categories: ['residential'], today: '2026-10-21' }

describe('demo form validation', () => {
  it('accepts trimmed surrounding whitespace and exact field length limits', () => {
    expect(validateEnquiry({ ...valid, name: '  Demo Visitor  ', email: '  demo@example.com  ', message: '  A brief.  ' }, options)).toEqual({})
    expect(validateEnquiry({ ...valid, name: 'N'.repeat(120), email: 'a'.repeat(242) + '@example.com', message: 'M'.repeat(5000) }, options)).toEqual({})
  })
  it('rejects over-limit values even when native maxlength is bypassed', () => {
    expect(validateEnquiry({ ...valid, name: 'N'.repeat(121), email: 'a'.repeat(243) + '@example.com', message: 'M'.repeat(5001), acknowledgment: 'true' }, options)).toMatchObject({ name: expect.any(String), email: expect.any(String), message: expect.any(String), acknowledgment: expect.any(String) })
  })
  it('uses Vancouver dates across historical clock transitions and the 2026 spring boundary', () => {
    for (const instant of ['2025-03-09T09:59:59Z', '2025-03-09T10:00:00Z']) expect(vancouverToday(new Date(instant))).toBe('2025-03-09')
    for (const instant of ['2025-11-02T08:59:59Z', '2025-11-02T09:00:00Z']) expect(vancouverToday(new Date(instant))).toBe('2025-11-02')
    expect(vancouverToday(new Date('2026-03-08T07:59:59Z'))).toBe('2026-03-07')
    expect(vancouverToday(new Date('2026-03-08T08:00:00Z'))).toBe('2026-03-08')
  })
  it('accepts complete contact and consultation values', () => {
    expect(validateEnquiry(valid, options)).toEqual({})
    expect(validateEnquiry(valid, { ...options, consultation: false })).toEqual({})
  })
  it('requires all seven consultation fields and five contact fields', () => {
    const empty = { name: ' ', email: '', category: '', date: '', time: '', message: ' ', acknowledgment: false }
    expect(Object.keys(validateEnquiry(empty, options))).toHaveLength(7)
    expect(Object.keys(validateEnquiry(empty, { ...options, consultation: false }))).toHaveLength(5)
  })
  it.each(['no-at-symbol', 'a@b', 'a@@b.com', 'a b@example.com', 'a@b..com'])('rejects invalid email %s', email => {
    expect(validateEnquiry({ ...valid, email }, options).email).toBeTruthy()
  })
  it('rejects unknown categories and windows', () => {
    expect(validateEnquiry({ ...valid, category: 'unknown', time: 'midnight' }, options)).toMatchObject({ category: expect.any(String), time: expect.any(String) })
  })
  it('rejects past dates but accepts today and future preferences', () => {
    expect(validateEnquiry({ ...valid, date: '2026-10-20' }, options).date).toContain('Vancouver')
    expect(validateEnquiry({ ...valid, date: '2026-10-22' }, options).date).toBeUndefined()
  })
  it.each(['2026-02-29', '2026-04-31', '2026-13-01', '2026-00-10', '2026-01-00', 'not-a-date', '2026-2-03', '0000-01-01'])('rejects invalid date %s', date => {
    expect(validCalendarDate(date)).toBe(false)
    expect(validateEnquiry({ ...valid, date }, options).date).toBeTruthy()
  })
  it('recognizes leap years and resolves Vancouver historical and current date boundaries', () => {
    expect(validCalendarDate('2028-02-29')).toBe(true)
    expect(validCalendarDate('2100-02-29')).toBe(false)
    expect(vancouverToday(new Date('2026-10-21T06:59:00Z'))).toBe('2026-10-20')
    expect(vancouverToday(new Date('2026-10-21T07:00:00Z'))).toBe('2026-10-21')
    expect(vancouverToday(new Date('2025-12-01T07:59:00Z'))).toBe('2025-11-30')
    expect(vancouverToday(new Date('2025-12-01T08:00:00Z'))).toBe('2025-12-01')
    expect(vancouverToday(new Date('2026-12-01T06:59:00Z'))).toBe('2026-11-30')
    expect(vancouverToday(new Date('2026-12-01T07:00:00Z'))).toBe('2026-12-01')
  })
})
