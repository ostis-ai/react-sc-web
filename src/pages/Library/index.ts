import { lazy } from 'react';

export const Liberary = lazy(() => import(/* webpackChunkName: "liberary" */ './Library'));
