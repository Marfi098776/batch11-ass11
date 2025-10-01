export const myApplyPromise = (email, accessToken) => {
    return fetch(`https://marathon-server-ebon.vercel.app/applications?email=${email}`, {
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    })
    .then(res => res.json())
}