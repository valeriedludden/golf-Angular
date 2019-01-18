export interface Player{
  name: string;
  hole?: Array<number>;
  inScore?: number;
  outScore?:number;
  totalScore?: number;
  parComparison?: number;
  id?: number;
}
