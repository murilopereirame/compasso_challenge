export interface Pokemon {
  id: number,
  name: string, 
  image: string,
  height: number,
  weight: number,
  types: string[],  
  moves: string[],
  stats: Stat[]
};

interface Stat {
  name: string,
  base_stat: number,
  effort: number
}