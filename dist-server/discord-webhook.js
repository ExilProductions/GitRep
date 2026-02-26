const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL || ''
function getWebhookUrl() {
  return DISCORD_WEBHOOK_URL || null
}
export async function sendDiscordWebhook(message) {
  const webhookUrl = getWebhookUrl()
  if (!webhookUrl) {
    console.log('[Discord Webhook] No webhook URL configured, skipping')
    return false
  }
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    })
    if (!response.ok) {
      console.error('[Discord Webhook] Failed to send:', response.status, await response.text())
      return false
    }
    return true
  } catch (error) {
    console.error('[Discord Webhook] Error sending webhook:', error)
    return false
  }
}
export async function notifyRepGiven(owner, repo, username, userAvatar, repType, repCount) {
  const embed = {
    title: `New Rep ${repType === 'positive' ? '+1' : '-1'}`,
    description: `**${username}** gave ${repType} rep to **${owner}/${repo}**`,
    color: repType === 'positive' ? 3066993 : 15158332,
    fields: [
      {
        name: 'Repository',
        value: `[${owner}/${repo}](https://github.com/${owner}/${repo})`,
        inline: true,
      },
      {
        name: 'Rep Type',
        value: repType === 'positive' ? 'Positive' : 'Negative',
        inline: true,
      },
      {
        name: 'Total Rep',
        value: `${repCount}`,
        inline: true,
      },
    ],
    footer: {
      text: 'gitrep',
    },
    timestamp: new Date().toISOString(),
  }
  if (userAvatar) {
    embed.thumbnail = { url: userAvatar }
  }
  return sendDiscordWebhook({ embeds: [embed] })
}
export async function notifyComment(
  owner,
  repo,
  username,
  userAvatar,
  commentContent,
  commentCount
) {
  const embed = {
    title: 'New Comment',
    description: `**${username}** commented on **${owner}/${repo}**`,
    color: 1752220,
    fields: [
      {
        name: 'Repository',
        value: `[${owner}/${repo}](https://github.com/${owner}/${repo})`,
        inline: true,
      },
      {
        name: 'Comment',
        value: commentContent.length > 200 ? commentContent.slice(0, 197) + '...' : commentContent,
        inline: false,
      },
      {
        name: 'Total Comments',
        value: `${commentCount}`,
        inline: true,
      },
    ],
    footer: {
      text: 'gitrep',
    },
    timestamp: new Date().toISOString(),
  }
  if (userAvatar) {
    embed.thumbnail = { url: userAvatar }
  }
  return sendDiscordWebhook({ embeds: [embed] })
}
