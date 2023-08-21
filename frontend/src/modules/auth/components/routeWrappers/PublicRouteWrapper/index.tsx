import { FC } from 'react';
import Header from "../../../../common/components/Header";
import { RouteWrapper } from "../../../types";

export const PublicRouteWrapper: FC<RouteWrapper> = ({ children, title }) => {

  return <>
    <Header title={title} />
    {children}
  </>;
};
