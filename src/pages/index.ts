import { MemoExoticComponent, ReactElement } from 'react';
import { EThemes } from './../store/models/main';
import AquarellPage from './AquarellPage/AquarellPage';
import BlackAndWhitePage from './BlackAndWhitePage/BlackAndWhitePage';
import ClassicPage from './ClassicPage/ClassicPage';
import GoldPage from './GoldPage/GoldPage';
import ModernPage from './ModernPage/ModernPage';

export const Forms: Record<EThemes, MemoExoticComponent<() => ReactElement>> = {
  [EThemes.Classic]: ClassicPage,
  [EThemes.Aquarell]: AquarellPage,
  [EThemes.BlackAndWhite]: BlackAndWhitePage,
  [EThemes.Gold]: GoldPage,
  [EThemes.Modern]: ModernPage,
}