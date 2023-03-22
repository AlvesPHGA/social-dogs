import React from 'react';
import { AnimaLeft } from '../../../../Styles/Styles.style';
import { StatsGraphStyle } from './StatsGraph.style';

const StatsGraph = ({ data }) => {
   const [graph, setGraph] = React.useState([]);
   const [total, setTotal] = React.useState(0);

   React.useEffect(() => {
      const access = data
         .map(({ acessos }) => Number(acessos))
         .reduce((a, b) => a + b);
      setTotal(access);
   }, [data]);

   return (
      <StatsGraphStyle>
         <AnimaLeft>
            <div className="total">
               <p>Acessos: {total}</p>
            </div>
         </AnimaLeft>
      </StatsGraphStyle>
   );
};

export default StatsGraph;
