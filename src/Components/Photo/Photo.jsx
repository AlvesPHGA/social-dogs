import React from 'react';
import { useParams } from 'react-router-dom';
import { PHOTO_GET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import { Container } from '../../Styles/Styles.style';
import PhotoContent from '../Global/PhotoContent/PhotoContent';
import Error from '../Helper/Error/Error';
import Load from '../Helper/Load/Load';

const Photo = () => {
   const { id } = useParams();
   const { data, load, error, request } = useFetch();

   React.useEffect(() => {
      const { url, options } = PHOTO_GET(id);

      request(url, options);
   }, [request, id]);

   if (error) return <Error error={error} />;
   if (load) return <Load />;
   if (data)
      return (
         <Container className="mainContainer">
            <PhotoContent data={data} />
         </Container>
      );
   else return null;
};

export default Photo;
