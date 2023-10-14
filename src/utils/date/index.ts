import { format, parseISO } from "date-fns"
import { languageLocaleLabel } from "./labels";

export const formatPeriod = (language: string, IngressDate: string, conclusionDate: string) => {
  return `${format(parseISO(IngressDate), 'MMM yyyy', { locale: languageLocaleLabel[language] })} - ${format(parseISO(conclusionDate), 'MMM yyyy', { locale: languageLocaleLabel[language] })} `
}