import routePaths from '../../../constants/routePaths';
import React from 'react';
import { RouteType } from '../../common/interfaces/moduleInterfaces';
import AdminPanel from "../pages/AdminPanel";

export const routes = [
  { path: routePaths.adminPanel.route, pageName: routePaths.adminPanel.pageName, component: <AdminPanel/>, type: RouteType.Auth },
];
