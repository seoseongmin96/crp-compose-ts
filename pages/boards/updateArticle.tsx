import React , {useEffect, useState} from 'react'
import UpdateArticle from '@/components/boards/UpdateArticle'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { updateRequest } from "@/modules/boards/updateArticle";
import { connect, useSelector } from 'react-redux'
import { ParsedUrlQuery } from 'querystring'


export interface UpdateArticle {
    title: string,
    content: string
}

const updateArticlePage: NextPage = () => {

// eslint-disable-next-line react-hooks/rules-of-hooks
const router = useRouter()
const id = router.query

// eslint-disable-next-line react-hooks/rules-of-hooks
const [board, setBoard] = useState<UpdateArticle>({
title: '', content: ''})
// eslint-disable-next-line react-hooks/rules-of-hooks
const dispatch = useAppDispatch()
// eslint-disable-next-line react-hooks/rules-of-hooks


// eslint-disable-next-line react-hooks/rules-of-hooks


//const {article} = useSelector((state: { update: any }) => state.update);

// eslint-disable-next-line react-hooks/rules-of-hooks
//useEffect(() => {setBoard(article)}, [article])
// console.log("board : " + JSON.stringify(board))
// console.log("article : " + JSON.stringify(article))

const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const {name, value} = e.currentTarget
    setBoard({...board, [name]: value})
    console.log("board:"+JSON.stringify(board))
  }

const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
        alert('진행 1: 수정 버튼 클릭')
        console.log(`글 정보 : ${JSON.stringify(board)}`)
        dispatch(updateRequest(board))
        setBoard({title: '', content: ''})
        window.location.href = "../boards/allArticleList" 
}

return(
<UpdateArticle board={board} onChange={onChange} onSubmit={onSubmit} title={''} content={''} />
)
}
//const mapStateToProps = (state: { write: { isUpdated: any } }) => ({isUpdated: state.write.isUpdated})
const updateActions = {updateRequest}
export default updateArticlePage


