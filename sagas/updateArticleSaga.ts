import { fetchArticleAPI, writeArticleApi } from "@/apis/articleApi";
import { updateArticleApi } from "@/apis/updateArticleApi";
import { Article, UpdateArticleActions, updateRequest, updateArticleFailure, updateArticleSuccess, } from "@/modules/boards/updateArticle";
import { userActions } from "@/modules/users/join";
import { loginFailure, loginSuccess } from "@/modules/users/login";
import { AxiosResponse } from "axios";
import { Action } from "redux";
import { call, put, take, takeLatest, throttle } from "redux-saga/effects";

function* updateArticleSaga(action : {payload: Article}){
    const param = action.payload
    try{
        alert(`3. saga 내부 update 성공 + ${JSON.stringify(param)}`)
        yield call(updateArticleApi, param)
        yield put(updateArticleSuccess())
    } catch (error) {
        yield put(updateArticleFailure())
    }
}

function* fetchArticleSaga(){
    const {fetchArticleSuccess, fetchArticleFailure} = UpdateArticleActions

    try{
        const response: AxiosResponse = yield call(fetchArticleAPI)
        yield put(fetchArticleSuccess(response))
    } catch (error) {
        yield put(fetchArticleFailure(error))
    }
}

export function* watchUpdateArticle(){
    yield takeLatest(UpdateArticleActions.updateRequest,updateArticleSaga)
}
export function* watchFetchArticle(){
    yield takeLatest(UpdateArticleActions.fetchArticles,fetchArticleSaga)
}

