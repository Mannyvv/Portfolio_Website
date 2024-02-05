




export const discordWebHook =  () => {
    fetch("https://discord.com/api/webhooks/1204060881521086474/0pWMHuhTW_0oVW-R8dgODCYSUYl8YHTr6QT3acob-Tuf1K-JwFFZsJo_HbasuV4xVbZe", {
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