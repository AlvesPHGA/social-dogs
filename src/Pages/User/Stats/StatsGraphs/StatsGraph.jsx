import React from 'react';
import { AnimaLeft } from '../../../../Styles/Styles.style';
import { StatsGraphStyle } from './StatsGraph.style';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

const StatsGraph = ({ data }) => {
   const [graph, setGraph] = React.useState([]);
   const [total, setTotal] = React.useState(0);

   React.useEffect(() => {
      const graphData = data.map((item) => {
         return {
            x: item.title,
            y: +item.acessos,
         };
      });
      // const access = data
      //    .map(({ acessos }) => Number(acessos))
      //    .reduce((a, b) => a + b);
      // setTotal(access);
      console.log(data);
      // setGraph(graphData);
   }, [data]);

   return (
      <StatsGraphStyle>
         <AnimaLeft>
            <div className="total graphItem">
               <p>Acessos: {total}</p>
            </div>
            <div className="graphItem">
               <VictoryPie
                  data={graph}
                  innerRadius={50}
                  padding={{
                     top: 20,
                     bottom: 20,
                     left: 80,
                     right: 80,
                  }}
                  style={{
                     data: {
                        fillOpacity: 0.9,
                        stroke: '#fff',
                        strokeWidth: 2,
                     },

                     labels: {
                        fontSize: 14,
                        fill: '#333',
                     },
                  }}
               />
            </div>
         </AnimaLeft>
      </StatsGraphStyle>
   );
};

export default StatsGraph;
