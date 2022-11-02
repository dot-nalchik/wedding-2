import {createSlice} from '@reduxjs/toolkit';

export enum EThemes {
  Classic = 'classic',
  Aquarell = 'aquarell',
  Gold = 'gold',
  BlackAndWhite = 'blackAndWhite',
  Modern = 'modern',
}

export type MainState = Record<EThemes, boolean>

interface Plan {
  planTime: string;
  doing: string;
}

export enum Patterns {
  first,
  second,
}

export interface Pattern {
  nameOfGroom: string;
  nameOfBride: string;
  weddingDate: string;
  tillTitle: string;
  firstTitle: string;
  textOfFirstTitle: string;
  secondTitle: string;
  textOfSecondTitle: string;
  waiting: string;
  startAt: string;
  planSection: Plan[];
  place: {
    media: string | null,
    whereText: string,
  }
  patternKey: Patterns;
}


const initialState: MainState = {
  classic: true,
  aquarell: false,
  gold: false,
  blackAndWhite: false,
  modern: false,
}

export const main = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changePage(state, action) {
      console.log(action);
    },
  },
});

export const {
  changePage,
} = main.actions;

export default main.reducer;
