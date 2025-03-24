function sendWebhook() {
    const webhookURL = "YOUR_WEBHOOK_URL_HERE";

    const payload = {
        "embeds": [{
            "title": "Webhook Triggered!",
            "description": "This message was sent from the button click.",
            "color": 5814783
        }]
    };

    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            alert("Webhook sent successfully!");
        } else {
            alert("Failed to send webhook.");
        }
    })
    .catch(error => console.error("Error:", error));
}
