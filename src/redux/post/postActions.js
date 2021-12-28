import {
  POST_DETAILS_FAIL,
  POST_DETAILS_REQUEST,
  POST_DETAILS_SUCCESS,
  POST_LIST_FAIL,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
} from "./constants";

import { getDummyPosts, getPostById } from "../../data";

export const listPosts = () => async (dispatch, getState) => {
  try {
    dispatch({ type: POST_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const { posts } = await getDummyPosts(userInfo?.token);

    dispatch({ type: POST_LIST_SUCCESS, payload: posts });
  } catch (error) {
    dispatch({ type: POST_LIST_FAIL, payload: error.message });
  }
};

export const listPostDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: POST_DETAILS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const { post } = await getPostById(id, userInfo?.token);

    dispatch({ type: POST_DETAILS_SUCCESS, payload: post });
  } catch (error) {
    dispatch({ type: POST_DETAILS_FAIL, payload: error.message });
  }
};
