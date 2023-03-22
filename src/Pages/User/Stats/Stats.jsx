import React from 'react';
import { GET_STATS } from '../../../api';
import Head from '../../../Components/Global/Head/Head';
import Error from '../../../Components/Helper/Error/Error';
import Load from '../../../Components/Helper/Load/Load';
import useFetch from '../../../Hooks/useFetch';
// import StatsGraph from './StatsGraphs/StatsGraph';

const StatsGraph = React.lazy(() => import('./StatsGraphs/StatsGraph'));

const Stats = () => {
   const { data, error, load, request } = useFetch();

   React.useEffect(() => {
      async function getStats() {
         const { url, options } = GET_STATS();
         await request(url, options);
      }

      getStats();
   }, [request]);

   if (load) return <Load />;
   if (error) return <Error error={error} />;
   if (data)
      return (
         <React.Suspense fallback={<></>}>
            <Head title="Estatisticas" />
            <StatsGraph data={data} />
         </React.Suspense>
      );
   else return null;
};

export default Stats;
