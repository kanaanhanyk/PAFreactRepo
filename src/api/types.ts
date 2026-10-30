export interface DomainResponse {
  id: number;
  name: string;
  photoPath: string;
}

export interface DomainsResponse {
  items: DomainResponse[];
}

export interface DomainsDetails {
  domain: number;
  count: number;
}

export interface ExpertisesResponse {
  items: ExpertiseResponse[];
}

export interface ExpertiseResponse {
  id: number;
  name: string;
  photoPAth: string;
}

export interface ExpertisesDetails {
  expertise: number;
  count: number;
}
