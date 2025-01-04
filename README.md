# Pushinator GitHub Action

This custom GitHub Action sends a push notification to a specified channel using the Pushinator API.

## Example Workflow

```yaml
name: Deploy

on: pull

jobs:
  send-notification:
    runs-on: ubuntu-latest

    steps:

      # your deployment steps
      
      - uses: appricos/pushinator-action@v1.1
        with:
          apiToken: ${{ secrets.PUSHINATOR_API_TOKEN }}
          channelId: ${{ secrets.PUSHINATOR_CHANNEL_ID }}
          notification: "🚀 Application deployed!"
```

## Steps to Get Started

- Visit [Pushinator's website](https://pushinator.com) and create an account.
- Log in to your account and create a new notification channel.
- Note down the Channel ID and the Pushinator API token by clicking the `Channel API (for developers)` button.
- Download and install the Pushinator app on your devices from the [App Store](https://apps.apple.com/us/app/pushinator/id6477758210) or [Google Play](https://play.google.com/store/apps/details?id=com.apprikos.pushinator).
- Use the QR code provided in the Pushinator dashboard to subscribe your devices to the newly created channel.
- Use the example workflow above to configure and trigger notifications using this GitHub Action.
