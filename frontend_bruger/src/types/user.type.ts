import type { accommodation } from "./accommodation.type"
import type { language } from "./language.type"
import type { situation } from "./situation.type"

export type user = {
    language:language,
    situation:situation[],
    searchingFor:accommodation[]
}
