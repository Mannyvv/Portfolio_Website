




export const discordWebHook =  () => {
    fetch(process.env.REACT_APP_DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: "Portfolio Site",
            avatar_url: "https://i.imgur.com/MBAQ3jr.png",
            content: "Someone visited your site!"
        })
    })
    .then((res) => res.status )
    .catch((error) => error.status)
}