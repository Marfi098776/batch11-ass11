export const marathonsCreatedPromise = (email, accessToken) => {
    return fetch(`http://localhost:3000/marathons?email=${email}`, {
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    }).then(res=> res.json())
}