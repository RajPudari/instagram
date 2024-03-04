import React from "react";
import "../../styles/header.css"
import SavedStatus from "./SavedStatus";
const Header = ({myinfo}) => {
  return (
    <div style={{display:"flex",flexDirection:"column",marginTop:"10vh",width:"100%"}}>
        <div style={{display:'flex',justifyContent:"flex-start", gap:"10vh", marginLeft:"10vh"}}>
        <img style={{width:'25vh', height:"25vh",borderRadius:"50%", objectFit:"cover" }}src={`${myinfo.profilePic}`}/>
        <div>
                <div style={{height:"80px",display:'flex', gap:"20px", alignItems:"center"}}>
                    <span style={{fontSize:'20px'}}>{myinfo.username}</span>
                    <span class="profile_header_button">Edit Profile</span>
                    <span class="profile_header_button">View Archive</span>
                    
                </div>
                <div style={{display:'flex', justifyContent:'space-around', marginTop:"20px"}}>
                <span>{myinfo.post} posts</span>
                <span>{myinfo.followers} followers</span>
                <span>{myinfo.following} following</span>

                </div>
                
                    <div style={{marginTop:"20px", marginLeft:"20px"}}>
                        {myinfo.name}
                    </div>
                    <p style={{marginLeft:"20px"}}>
                        {myinfo.Bio}
                    </p>
                
        </div>
        </div>
        <SavedStatus savedStatus={myinfo.savedStatus}/>
    </div>
  );
}



export default Header;
