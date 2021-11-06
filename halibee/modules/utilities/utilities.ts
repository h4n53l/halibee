import { formatRelative } from "date-fns"

export const parseDate = (date) => {
    return formatRelative(
        new Date(date),
        new Date()
    )
}

