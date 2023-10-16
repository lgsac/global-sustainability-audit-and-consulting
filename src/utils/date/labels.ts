import { Hashmap } from "#/api/models";
import { Locale } from "date-fns";
import { enCA, ptBR } from "date-fns/locale";
import es from "date-fns/locale/es";

export const languageLocaleLabel: Hashmap<Locale> = {
  "en": enCA,
  "pt": ptBR,
  "es": es,
}