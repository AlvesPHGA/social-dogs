export const API_URL = 'https://dogsapi.origamid.dev/json';

export const TOKEN_POST = (body) => {
   return {
      url: API_URL + '/jwt-auth/v1/token',

      options: {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },

         body: JSON.stringify(body),
      },
   };
};

export const TOKEN_VALIDATE_POST = (token) => {
   return {
      url: API_URL + '/jwt-auth/v1/token/validate',

      options: {
         method: 'POST',
         headers: {
            Authorization: 'Bearer ' + token,
         },
      },
   };
};

export const USER_GET = (token) => {
   return {
      url: API_URL + '/api/user',

      options: {
         method: 'GET',
         headers: {
            Authorization: 'Bearer ' + token,
         },
      },
   };
};

// Create new user
export const USER_POST = (body) => {
   return {
      url: API_URL + '/api/user',

      options: {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },

         body: JSON.stringify(body),
      },
   };
};

// new photo post
export const PHOTO_POST = (formData, token) => {
   return {
      url: API_URL + '/api/photo',

      options: {
         method: 'POST',
         headers: {
            Authorization: 'Bearer ' + token,
         },

         body: formData,
      },
   };
};

// get photo
export const PHOTOS_GET = ({ page, total, user }) => {
   return {
      url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user${user}`,

      options: {
         method: 'GET',
         cache: 'no-store',
      },
   };
};

// get photo
export const PHOT_GET = (id) => {
   return {
      url: `${API_URL}/api/photo/${id}`,
   };
};

// get photo to modal
export const PHOTO_GET = (id) => {
   return {
      url: `${API_URL}/api/photo/${id}`,

      options: {
         method: 'GET',
         cache: 'no-store',
      },
   };
};

// post comment about photo
export const COMMENT_PHOTO_POST = (id, body) => {
   return {
      url: `${API_URL}/api/comment/${id}`,

      options: {
         method: 'POST',

         headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + window.localStorage.getItem('token'),
         },

         body: JSON.stringify(body),
      },
   };
};

// delete photo
export const DELETE_PHOTO = (id) => {
   return {
      url: `${API_URL}/api/photo/${id}`,

      options: {
         method: 'DELETE',

         headers: {
            Authorization: 'Bearer ' + window.localStorage.getItem('token'),
         },
      },
   };
};
