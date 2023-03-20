import React from 'react';
import { useParams } from 'react-router-dom';
import { Title } from '../../../Components/Global/Title';
import { Container } from '../../../Styles/Styles.style';
import Feeds from '../../Feeds/Feeds';
import { UserProfileStyle } from './UserProfile.style';

const UserProfile = () => {
   const { user } = useParams();
   return (
      <UserProfileStyle>
         <Container className="mainContainer">
            <Title>{user}</Title>
            <Feeds user={user} />
         </Container>
      </UserProfileStyle>
   );
};

export default UserProfile;
