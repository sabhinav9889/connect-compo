"use client"

import Card from "./card";

const Connect = ()=>{
    let lis = [{
        name: "John",
        followers: 10,
        following: 10,
        isFollow: true,
        srcPic: "/1-intro-photo-final.jpg",
    },
    {
        name: "Mary",
        followers: 10,
        following: 10,
        isFollow: false,
        srcPic: "/wp-2021-01-linkedin-profile-picture-after.avif",
    },
    {
        name: "Peter",
        followers: 10,
        following: 10,
        isFollow: true,
        srcPic: "/1-intro-photo-final.jpg",
    },
    {
        name: "Jane",
        followers: 10,
        following: 10,
        isFollow: false,
        srcPic: "/images.jpeg",
    },
    {
        name: "John",
        followers: 10,
        following: 10,
        isFollow: true,
        srcPic: "/1-intro-photo-final.jpg",
    },
    {
        name: "Mary",
        followers: 10,
        following: 10,
        isFollow: false,
        srcPic: "/wp-2021-01-linkedin-profile-picture-after.avif",
    },
    {
        name: "Peter",
        followers: 10,
        following: 10,
        isFollow: true,
        srcPic: "/1-intro-photo-final.jpg",
    },
    {
        name: "Jane",
        followers: 10,
        following: 10,
        isFollow: false,
        srcPic: "/images.jpeg",
    },
    {
        name: "John",
        followers: 10,
        following: 10,
        isFollow: true,
        srcPic: "/1-intro-photo-final.jpg",
    },
    {
        name: "Mary",
        followers: 10,
        following: 10,
        isFollow: false,
        srcPic: "/wp-2021-01-linkedin-profile-picture-after.avif",
    },
    {
        name: "Peter",
        followers: 10,
        following: 10,
        isFollow: true,
        srcPic: "/1-intro-photo-final.jpg",
    },
    {
        name: "Jane",
        followers: 10,
        following: 10,
        isFollow: false,
        srcPic: "/images.jpeg",
    },
    {
        name: "John",
        followers: 10,
        following: 10,
        isFollow: true,
        srcPic: "/1-intro-photo-final.jpg",
    },
    {
        name: "Mary",
        followers: 10,
        following: 10,
        isFollow: false,
        srcPic: "/wp-2021-01-linkedin-profile-picture-after.avif",
    },
    {
        name: "Peter",
        followers: 10,
        following: 10,
        isFollow: true,
        srcPic: "/1-intro-photo-final.jpg",
    }
    ]
    return(
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-2">  
          {lis.map((item, index) => (
            <Card key={index} name={item.name} followers={item.followers} following={item.following} isFollow={item.isFollow} srcPic={item.srcPic} />
          ))}
        </div>
    )
}

export default Connect;