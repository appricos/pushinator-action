# Pushinator GitHub Action

A GitHub Action to **send a push notification to your devices** via Pushinator API.

## Example Workflow

```yaml
name: Deploy

on: pull

jobs:
  send-notification:
    runs-on: ubuntu-latest

    steps:

      # your deployment steps
      
      - uses: appricos/pushinator-action@v1
        with:
          apiToken: ${{ secrets.PUSHINATOR_API_TOKEN }}
          channelId: ${{ secrets.PUSHINATOR_CHANNEL_ID }}
          notification: "🚀 Application deployed!"
```

## Steps to Get Started

1. Create a [Pushinator](https://pushinator.com) account
2. Set up a notification channel and save the Channel ID and API token
3. Download the app from the [App Store](https://apps.apple.com/us/app/pushinator/id6477758210) or [Google Play](https://play.google.com/store/apps/details?id=com.apprikos.pushinator) to all devices you want to get notifications on
4. Use the QR code in the dashboard to subscribe your devices to the channel
5. Use the example workflow provided to set up and trigger notifications






