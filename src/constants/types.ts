export interface Plan {
  premiumTitle: string;
  shortDescription: string;
  rate: number;
  renuvalamount: number;
  validity: number;
  description: string;
  mostPopular: boolean;
  exclusive: boolean;
}

export interface PremiumGroup {
  premiumTitle: string;
  plans: Plan[];
}
export interface DutyReport {
  discordName: string;
  discordId: string;
  department: string;
  lastDutyDate: string;
  totalHours: string;
  peakHours: string;
  offPeakHours: string;
}