export interface LegendOption {
  name: string
  value: string
}

export interface Legend {
  oddział: {
    id: string
    options: LegendOption[]
  }
  nauczyciel: {
    id: string
    options: LegendOption[]
  }
  sala: {
    id: string
    options: LegendOption[]
  }
}

interface Lekcja {
  index: number
  data: string
}

interface Dzien {
  name: string
  lekcje: Lekcja[]
}

interface PlanTygodnia {
  godziny: string[]
  tydzien: Dzien[]
}

interface Plan {
  [key: string]: PlanTygodnia
}

export interface ServerResponse {
  legend: Legend
  plany: Plan
}
