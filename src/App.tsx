import { FC } from 'react';

import { CurrencyExchangeContainer } from './container/CurrencyExchangeContainer';
import reportWebVitals from './reportWebVitals';
import { ReturnComponentType } from './types';

export const App: FC = (): ReturnComponentType => <CurrencyExchangeContainer />;

reportWebVitals();
