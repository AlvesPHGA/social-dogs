import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
import ImageSkeleton from '../ImageSkeleton/ImageSkeleton';
import PhotoComments from '../PhotoComments/PhotoComments';
import PhotoDelete from '../PhotoDelete/PhotoDelete';
import { Title } from '../Title';
import {
   BoxAttributeDetails,
   BoxContentDetails,
   BoxDetails,
   BoxImage,
   PhotoContentStyle,
} from './PhotoContent.style';

const PhotoContent = ({ data }) => {
   const user = React.useContext(UserContext);

   const { photo, comments } = data;

   return (
      <PhotoContentStyle>
         <BoxImage>
            <ImageSkeleton src={photo.src} alt={photo.title} />
         </BoxImage>
         <BoxDetails>
            <BoxContentDetails>
               <p className="author">
                  {user.data && user.data.username === photo.author ? (
                     <PhotoDelete id={photo.id} />
                  ) : (
                     <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
                  )}
                  <span className="views">{photo.acessos}</span>
               </p>

               <Title>
                  <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
               </Title>

               <BoxAttributeDetails>
                  <li>{photo.peso} Kg</li>
                  <li>{photo.idade} anos</li>
               </BoxAttributeDetails>
            </BoxContentDetails>
         </BoxDetails>
         <PhotoComments id={photo.id} comments={comments} />
      </PhotoContentStyle>
   );
};

export default PhotoContent;
