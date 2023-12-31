import routePaths from '../../../constants/routePaths';
import SignIn from '../pages/SignIn';
import React from 'react';
import { RouteType } from '../../common/interfaces/moduleInterfaces';

export const routes = [
  { path: routePaths.signIn.route, pageName: routePaths.signIn.pageName, component: <SignIn />, type: RouteType.NotAuth },
];
