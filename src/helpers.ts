import { EThemes } from "./store/models/main";

export const pages: {
  name: string,
  value: EThemes,
}[] = [
  {
    name: 'Classic',
    value: EThemes.Classic,
  },
  {
    name: 'Black and white',
    value: EThemes.BlackAndWhite,
  },
  {
    name: 'Gold',
    value: EThemes.Gold,
  },
  {
    name: 'Modern',
    value: EThemes.Modern,
  },
  {
    name: 'Aquarell',
    value: EThemes.Aquarell,
  },
];