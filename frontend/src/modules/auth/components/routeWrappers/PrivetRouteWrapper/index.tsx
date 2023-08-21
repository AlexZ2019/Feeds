import { FC, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { USER_QUERY } from '../../../../user/graphql/queries/getUser';
import RoutePaths from '../../../../../constants/routePaths';
import { useQuery } from '@apollo/client';
import { useLogout } from "../../../hooks/logout";
import Header from "../../../../common/components/Header";
import { RouteWrapper } from "../../../types";

export const PrivetRouteWrapper: FC<RouteWrapper> = ({ children, title}) => {
  const navigate = useNavigate();
  const { data } = useQuery(USER_QUERY);
  const logout = useLogout();

  useEffect(() => {
    if (!data) {
      navigate(RoutePaths.signIn.route);
    }
  }, [data]);

  if (!data) {
    return null;
  }

  return <>
    <Header title={title} logout={logout} userEmail={data.getCurrentUser.email}/>
    {children}
  </>;
};
