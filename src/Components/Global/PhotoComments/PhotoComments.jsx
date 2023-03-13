import React, { useContext } from 'react';
import { UserContext } from '../../../UserContext';
import { PhotoCommentsStyle } from './PhotoComments.style';
import PhotoCommentsForm from './PhotoCommentsForm/PhotoCommentsForm';

const PhotoComments = (props) => {
   const { login } = useContext(UserContext);

   const [comments, setComments] = React.useState(() => props.comments);

   const commentsSection = React.useRef();

   React.useEffect(() => {
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
   }, [comments]);

   return (
      <PhotoCommentsStyle>
         <ul ref={commentsSection} className="commentsList">
            {comments.map((comment) => (
               <li key={comment.comment_ID}>
                  <span className="authorName">{comment.comment_author}: </span>{' '}
                  {comment.comment_content}
               </li>
            ))}
         </ul>
         {login && (
            <PhotoCommentsForm id={props.id} setComments={setComments} />
         )}
      </PhotoCommentsStyle>
   );
};

export default PhotoComments;
