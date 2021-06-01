import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './UserInfo.css'
import {
	Card, CardText, CardBody, CardLink,
	CardTitle, CardSubtitle
  } from 'reactstrap';
const UserInfo = ({username}) =>{
	const [userDetails,setUserDetails] = useState({});
	
	const fetchUser = async(CancelToken)=>{
		axios.get(`https://api.github.com/users/${username}`,{
				cancelToken:CancelToken.token
		 })
		.then(res=>{
			setUserDetails(res.data)  
		})
		.catch(err=>{
		  setUserDetails(null)
		  console.log(err.message)
		})
  
	}
  
	useEffect(()=>{
		const CancelToken=axios.CancelToken.source()
		fetchUser(CancelToken)
		return ()=>{
		  CancelToken.cancel(`Previous Request Cancelled @${username}`)
		}
	  },[username])
	
	return(
		<Card className="mx-2 bg-light" >
		 {
			 userDetails?
			 	(
				<>
				<CardBody>
          			<CardTitle tag="h3" className="mx-1">{userDetails.name}</CardTitle>
          			<CardSubtitle tag="h6" className="mx-2 text-muted">Type :{userDetails.type}</CardSubtitle>
        		</CardBody>
       		    <img className="img-thumbnail mx-1" 
					width="200px" 
					height="50%" 
					src={userDetails.avatar_url} 
					alt="avatar" />
        	    <CardBody className="mx-1">
          			<CardText>{userDetails.bio}</CardText>
					<CardText> Hireable :{userDetails.hireable?" YES":" NO"}</CardText>
					<CardText>Location : {userDetails.location}</CardText>
          			<CardLink href={userDetails.repos_url}>Repos URL</CardLink>
        		</CardBody>
				</>
				):
			 	(
				<CardBody>
        	 	 	<CardTitle tag="h5" className="text-danger">Not Found</CardTitle>
          	 	 	<CardSubtitle tag="h6">(Searched User)</CardSubtitle>
        		</CardBody>
				)
		 }   
        	
        	
      	</Card>
	)
}

export default UserInfo;