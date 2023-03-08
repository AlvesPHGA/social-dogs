import React from 'react';
import { Link } from 'react-router-dom';
import PhotoComments from '../PhotoComments/PhotoComments';
import { Title } from '../Title';
import {
   BoxAttributeDetails,
   BoxContentDetails,
   BoxDetails,
   BoxImage,
   PhotoContentStyle,
} from './PhotoContent.style';

const PhotoContent = ({ data }) => {
   const { photo, comments } = data;

   console.log(photo);

   return (
      <PhotoContentStyle>
         <BoxImage>
            <img src={photo.src} alt={photo.title} />
         </BoxImage>
         <BoxDetails>
            <BoxContentDetails>
               <p>
                  <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
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
