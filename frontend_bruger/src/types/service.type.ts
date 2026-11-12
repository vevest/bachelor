import type { accommodation } from "./accommodation.type"

export type service = {
    id: string,
    name: string,
    address: string,
    logo: string,
    isOpen: boolean,
    openUntil: string | null,
    accommodations: accommodation[],
}