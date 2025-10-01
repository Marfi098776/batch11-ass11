export const marathonsCreatedPromise = (email, accessToken) => {
    return fetch(`https://marathon-server-ebon.vercel.app/marathons/applications?email=${email}`, {
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    }).then(res=> res.json())
}