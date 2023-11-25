import React,{useCallback} from 'react'
import {useForm} from 'react-hook-form'
import {Button, Input, Select, RTE} from '../index'
import appwriteService from "../../appwrite/config"
import {Navigate, useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

function PostFrom({post}) {
    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues:{
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active',
        }
    })

    const navigate = useNavigate();
    const userData = useSelector(state => state.user.userData);

    // conditional checking for post 
    const submit = async (data)=>{

        // if user data has 
        if (post) {
            // upload file
           const file = data.image[0] ? appwriteService.uploadFile(data.image[0]): null

        //    delete file
           if (file) {
            appwriteService.deleteFile(post.featuredImage)
            
           }
           const userPreviousDbPost = await appwriteService.updatePost(post.$id, {
            ...data,
            featuredImage: file? file.$id : undefined
           })

           if(userPreviousDbPost){
            navigate(`/post/${userPreviousPost.$id}`)
           }

        }
        // if user data not has then 
        else{
           const file =  data.image[0] ? await appwriteService.uploadFile(data.image[0]): null;
           
           if(file){
            const fileId= file.$id
            data.featuredImage = fileId;

            const userDbPost = await appwriteService.createPost({
                ...data,
                userId: userData.$id
            })
            if(userDbPost){
                navigate(`/post/${userDbPost.$id}`)
            }
           }
        }
    }

const slugTransfrom = useCallback( (value)=> {
    if (value && typeof value === 'string') {
        return value.trim().toLocaleLowerCase().replace(/^[a-zA-z/d/s]+/g, '-')
        .replace(/\s/g, '-')
    }
    return ''
}, [])

React.useEffect( ()=>{
    const subscription = watch( (value, {name}) =>{
        if (name==='title') {
            setValue('slug', slugTransfrom(value.title, {shouldValidate: true}))
        }
    })
    return ()=> {
        subscription.unsubscribe()
    }
}, [watch,slugTransfrom, setValue])
  return (
    <div>PostFrom</div>
  )
}

export default PostFrom