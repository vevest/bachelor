
import type { accommodation } from './accommodation.type'
import type { OpeningHours } from './openingHours.type'

export type service = {
    service_pk: string
    service_slug: string
    organisation_fk: string
    service_name: string
    service_logo: string
    service_is_open: boolean
    service_open_until: string | null
    service_accommodations: accommodation[]
    service_street: string
    service_street_number: string
    service_zip: string
    service_city: string
    service_phone: string
    service_email: string
    service_needs_cpr: boolean
    service_website: string
    service_cvr: string
    created_at: string
    updated_at: string
    deleted_at: string | null
    service_description: string
    opening_hours: OpeningHours
    service_news: {
        title: string
        date: string
        description: string
    }[]
    service_long: string
    service_lat: string
}
