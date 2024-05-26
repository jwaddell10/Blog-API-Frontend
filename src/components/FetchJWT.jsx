import { useState, useEffect } from "react"

function FetchJWT() {
    // async function getPosts() {
    //     try {
    //         const response = await fetch("http://localhost:3000/post");
    //         const posts = await response.json();
    //         setBlogPosts(posts);
    //     } catch (err) {
    //         console.log(err, "this is err");
    //     }
    // }

    const [jwt, setJWT] = useState('')
    useEffect(() => {
        async function getJWT() {
            try {
                const response = await fetch("http://localhost:3000/login");
                console.log(response, 'this is response')
                const JWT = await response.json();
                console.log(JWT, 'this is jwt?')
                setJWT(JWT);
            } catch (err) {
                console.loog(err, 'this is err')
            }
        } getJWT();
    }, [])
    return jwt;
}

export default FetchJWT;