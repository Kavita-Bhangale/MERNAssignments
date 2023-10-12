import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Address from "../Address";

export const Profile = () => {
    const [profileData, setProfileData] = useState();
    const {id} = useParams();

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users/"+id)
        .then((res) => {
            if(res){
                setProfileData(res.data);
            }
        })
    },[id])

    return(
        <div>
            <h2>Employee Profile : {id}</h2>

            {profileData ?
                <div><p>Username : {profileData.username}</p>
                <p>Name : {profileData.name}</p>
                <p>Address : <Address /> </p></div>
            : "Loading"}
            
        </div>
    )
}