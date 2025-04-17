import { lazy } from 'react';

export const About = lazy(() => import(/* webpackChunkName: "library" */ './About'));
