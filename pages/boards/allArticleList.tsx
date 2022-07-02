import React, { useCallback, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { NextPage } from 'next'
import { ArticleState, fetchBoards, fetchBoardSuccess } from '@/modules/boards'
import { useDispatch, useSelector } from 'react-redux'
import { wrapper } from '@/modules/store'
import AllArticleList from '@/components/boards/AllArticleList'
export interface fetchBoardData {
    articleId?: number,
    title? : string,
    writtenDate?: null,
    open?: null,
    content?: string,
    picture?: null
    height?: string,
    weight?: string,
}
const AllArticleListPage: NextPage = () => {
  // 무한 loop 생성 https://typeofnan.dev/fix-the-maximum-update-depth-exceeded-error-in-react/
  return (
    <><AllArticleList/></>
  )
}
AllArticleListPage.getInitialProps = () => ({})
export default AllArticleListPage