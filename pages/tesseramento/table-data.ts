import { GaranziaMassimale } from "./models";

export const INFORTUNI: GaranziaMassimale[] = [
  { garanzia: "Caso Morte", massimale: "€ 50.000,00" },
  { garanzia: "Caso Grave Invalidita’ Permanente", massimale: "€ 50.000,00", subGaranzia: "(franchigia relativa 50% - Tabella INAIL - per Invalidita’ del 75% liquidato il 100%)" },
  { garanzia: "Indennita’ Giornaliera per Ricovero Ospedaliero", massimale: "€ 25,00", subGaranzia: "(Per ricoveri avvenuti entro 48 ore dall’infortunio- con un massimo di 15 giorni per evento e 30 giorni per anno assicurativo)" },
  { garanzia: "Trasporto in Autoambulanza - Toboga fino al piu’ vicino Pronto Soccorso", massimale: "€ 500,00" },
  { garanzia: "Spese Mediche di primo soccorso sostenute sul luogo dell’Infortunio", massimale: "€ 500,00" },
]