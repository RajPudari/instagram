import React from "react";
import SideBar from "../common/SideBar";
import Header from "./Header";
import { myinfo } from "../../data/myinfo";
import MyPost from "./MyPost";
const Profile = () => {
  return (
    <div style={{display:'flex',gap:'15vw'}}>
     <SideBar/>
     <div>
            <Header myinfo={myinfo}/> 
            <MyPost post={myinfo.posts}/>
     </div>
    </div>
  );
}



export default Profile;
