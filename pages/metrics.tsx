import { useAuth } from "../contexts/AuthContext";
import { setupAPIClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Metrics() {
  const { user } = useAuth();

  return <h1>Metrics: {user?.email}</h1>;
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const response  = await apiClient.get('/me');

  return {
    props: {},
  };
}, {
  permissions: ['metrics.list'],
  roles: ['administrator']
});
