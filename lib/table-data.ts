import GaranziaMassimale from "../interfaces/garanzia-massimale";

export const INFORTUNI: GaranziaMassimale[] = [
  { garanzia: "Caso Morte", massimale: "€ 50.000,00" },
  { garanzia: "Caso Grave Invalidita’ Permanente", massimale: "€ 50.000,00", subGaranzia: "(franchigia relativa 50% - Tabella INAIL - per Invalidita’ del 75% liquidato il 100%)" },
  { garanzia: "Indennita’ Giornaliera per Ricovero Ospedaliero", massimale: "€ 25,00", subGaranzia: "(Per ricoveri avvenuti entro 48 ore dall’infortunio- con un massimo di 15 giorni per evento e 30 giorni per anno assicurativo)" },
  { garanzia: "Trasporto in Autoambulanza - Toboga fino al piu’ vicino Pronto Soccorso", massimale: "€ 250,00" },
  { garanzia: "Spese Mediche di primo soccorso sostenute sul luogo dell’Infortunio", massimale: "€ 500,00" },
  { garanzia: "Spese Mediche per Apparecchi Ortopedici-Ginocchiere-Busti-Collari", massimale: "€ 400,00" },
  { garanzia: "Spese Mediche per Visite Specialistiche", massimale: "€ 400,00" },
  { garanzia: "Spese Mediche riferite a ticket sanitari", massimale: "€ 400,00" },
];

export const RESPONSABILITA_CIVILE: GaranziaMassimale[] = [
  { garanzia: "Singolo sinistro e per anno assicurativo, per danni a terzi a cose e persone", massimale: "€ 2.000.000,00" },
];

export const ASSISTENZA: GaranziaMassimale[] = [
  { garanzia: "INFO Servizi utili prima e durante il soggiorno in montagna", massimale: "" },
  { garanzia: "Consulenza sanitaria - Ricerca centri alta specializzazione", massimale: "" },
  { garanzia: "Elisoccorso e Spese Sanitarie in Emergenza all’estero", massimale: "€ 3.000,00" },
  { garanzia: "Trasferimento centro ospedaliero attrezzato", massimale: "" },
  { garanzia: "Rientro del convalescente", massimale: "€ 1.500,00" },
  { garanzia: "Accompagnamento figli minori", massimale: "" },
  { garanzia: "Autista a disposizione", massimale: "" },
  { garanzia: "Rimborso lezioni sci a seguito infortunio (escluse giornaliere)", massimale: "€ 200,00" },
  { garanzia: "Rimborso dello ski-pass a seguito Infortunio (esclusi giornalieri)", massimale: "€ 200,00" },
  { garanzia: "Rientro salma - viaggio familiare spese € 500,00 con primo pernottamento", massimale: "" },
];