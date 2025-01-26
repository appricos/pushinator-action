import * as core from '@actions/core';

async function run() {
  try {
    const apiToken = core.getInput('apiToken', { required: true });
    const channelId = core.getInput('channelId', { required: true });
    const notification = core.getInput('notification', { required: true });

    const payload = {
      channel_id: channelId,
      content: notification,
    };

    const response = await fetch('https://api.pushinator.com/api/v2/notifications/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
        'User-Agent': 'pushinator-github-action/1.0',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Failed to send notification: ${response.statusText}`);
    }

    core.info(`Notification sent successfully: ${response.statusText}`);
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    } else {
      core.setFailed('An unknown error occurred.');
    }
  }
}

run();
