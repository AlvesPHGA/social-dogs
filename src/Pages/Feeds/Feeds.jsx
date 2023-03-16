import React, { useEffect } from 'react';
import { Container } from '../../Styles/Styles.style';
import FeedModal from './FeedModal/FeedModal';
import FeedPhotos from './FeedPhotos/FeedPhotos';

const Feeds = ({ user }) => {
   const [modalPhoto, setModalPhoto] = React.useState(null);

   const [pages, setPages] = React.useState([1]);
   const [infinite, setInfinite] = React.useState(true);

   React.useEffect(() => {
      let toWait = false;
      function handleScroll(ev) {
         if (infinite) {
            const scroll = window.scrollY;
            const height = document.body.offsetHeight - window.innerHeight;

            if (scroll > height * 0.75 && !toWait) {
               setPages((pages) => [...pages, pages.length + 1]);
               toWait = true;

               setTimeout(() => (toWait = false), 500);
            }
            console.log(ev);
         }
      }

      window.addEventListener('wheel', handleScroll);
      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('wheel', handleScroll);
         window.removeEventListener('scroll', handleScroll);
      };
   }, [infinite]);
   return (
      <>
         {modalPhoto && (
            <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
         )}

         {pages.map((page) => (
            <FeedPhotos
               user={user}
               key={page}
               page={page}
               setModalPhoto={setModalPhoto}
               setInfinite={setInfinite}
            />
         ))}

         {/* <FeedPhotos user={user} page="2" setModalPhoto={setModalPhoto} /> */}
      </>
   );
};

export default Feeds;
