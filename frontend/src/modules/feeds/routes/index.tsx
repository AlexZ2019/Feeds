import routePaths from '../../../constants/routePaths';
import React from 'react';
import { RouteType } from '../../common/interfaces/moduleInterfaces';
import Feeds from "../pages/Feeds";

export const routes = [
  { path: routePaths.main.route, pageName: routePaths.main.pageName, component: <Feeds />, type: RouteType.Public },
];
