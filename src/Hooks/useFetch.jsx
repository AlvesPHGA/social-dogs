import React from 'react';

const useFetch = () => {
   const [data, setData] = React.useState(null);
   const [error, setError] = React.useState(null);
   const [load, setLoad] = React.useState(false);

   const request = React.useCallback(async (url, options) => {
      let res, json;

      try {
         setError(null);
         setLoad(true);

         res = await fetch(url, options);
         json = await res.json();

         if (res.ok === false) throw new Error(json.message);
      } catch (er) {
         json = null;
         setError(er.message);
      } finally {
         setData(json);
         setLoad(false);
      }
   }, []);

   return {
      data,
      error,
      load,

      request,
   };
};

export default useFetch;
