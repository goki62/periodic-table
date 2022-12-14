// export interface Element {
//   atomicNumber: number;
//   symbol: string;
//   name: string;
//   atomicMass: any;
//   electronicConfiguration: string;
//   electronegativity: any;
//   atomicRadius: any;
//   ionRadius: string;
//   vanDerWaalsRadius: any;
//   ionizationEnergy: any;
//   electronAffinity: any;
//   oxidationStates: any;
//   standardState: string;
//   bondingType: string;
//   meltingPoint: any;
//   boilingPoint: any;
//   density: any;
//   groupBlock: string;
//   yearDiscovered: any;
//   block: string;
//   cpkHexColor: string;
//   period: number;
//   group: number;
// }
export interface Element {
  shells: number[];
  ionizationEnergies: number[];
  id: string;
  name: string;
  appearance: string;
  atomicMass: number;
  boil?: number;
  category: string;
  color: string;
  density?: number;
  discoveredBy: string;
  melt?: number;
  molarHeat?: number;
  namedBy: string;
  number: number;
  period: number;
  phase: string;
  source: string;
  spectralImg: string;
  summary: string;
  symbol: string;
  xpos: number;
  ypos: number;
  electronConfiguration: string;
  electronAffinity?: number;
  electronegativityPauling?: number;
  v: number;
  isActive: boolean
}
