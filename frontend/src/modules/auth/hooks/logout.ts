import { useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { removeLocalStorageValue } from '../../../utils/localStorage';
import routePaths from '../../../constants';
import { client } from '../../../providers/apollo/config';
import { LOGOUT_MUTATION } from '../graphql/mutations/logout';
import RoutePaths from "../../../constants/routePaths";
export const useLogout = () => {
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  return async () => {
    await client.mutate({
      mutation: LOGOUT_MUTATION,
    })
    await apolloClient.clearStore();
    removeLocalStorageValue('accessToken');
    removeLocalStorageValue('refreshToken');
    navigate(`../${RoutePaths.signIn.route}`);
  };
};
