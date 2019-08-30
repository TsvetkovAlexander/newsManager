import generationGuid from '../../utils';

export const DELETE_NEWS_SUCCESS = 'DELETE_NEWS_SUCCESS';

export const EDIT_NEWS_SUCCESS = 'EDIT_NEWS_SUCCESS';

export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';

export const ADD_NEWS_SUCCESS = 'ADD_NEWS_SUCCESS';

export const deleteNews = (guid) => ({ type: DELETE_NEWS_SUCCESS, payload: guid });

export const getNews = (news) => ({
  type: 'GET_NEWS_SUCCESS',
  payload: news,
});
export const editNews = (news) => ({
  type: 'EDIT_NEWS_SUCCESS',
  payload: news,
});
export const addNews = (news) => {
  return {
    type: 'ADD_NEWS_SUCCESS',
    payload: { ...news, photo: '', guid: generationGuid() },
  };
};
