"use client"
import Image from "next/image";
import { useState } from "react";
const Card = ({name, followers, following, isFollow, srcPic}) => {
    const [follow, setFollow] = useState(isFollow);
    return(
        <div>
            <div className="w-48 h-40 overflow-hidden">
               <Image src={srcPic} alt="Profile" height={500} width={500}></Image>
            </div>
            <p className="mt-1 text-lg font-semibold">{name}</p>
            <div className="mt-1 flex" style={{color:'#8c8581'}}>
                <span className="p-1">{followers} Followers</span>
                <li className="p-1">{following} Following</li>
            </div>
            <button className="mt-1 rounded-sm w-24 h-8 text-white font-bold" onClick={()=>setFollow((follow)?false:true)} style={{backgroundColor:'#6c6763'}}>{(follow)?"Following":"Follow"}</button>
        </div>
    )
}

export default Card;