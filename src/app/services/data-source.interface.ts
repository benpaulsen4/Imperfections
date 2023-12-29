import { InjectionToken } from '@angular/core';
import { Character } from '../models/character';

export interface DataSource {
  cacheData(): Promise<void>;
  getThreeCharacters(): Character[];
  getThreeFlags(): string[];
}

export const DataSourceToken = new InjectionToken<DataSource>('DataSource');
