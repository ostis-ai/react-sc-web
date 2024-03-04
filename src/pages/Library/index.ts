import { lazy } from 'react';

export const Library = lazy(() => import(/* webpackChunkName: "liberary" */ './Library'));
