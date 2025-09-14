// pages/api/instagram-feed.js

export default async function handler(req, res) {
  const INSTAGRAM_ACCESS_TOKEN = 'EAAPHZBijhj30BPdtKmTJTI2qXkLohHkRbKtZAIYOcXHtYKypcmyZBcigoytv0ZBGQZCsVesTfY0zOZCtFS70AZA8HY2z3l2f6oa2ZAxZBqJdgTZCZAZCOBtxDugEfrtZCIHqjEV0W3puZAiVdqr1dgIHPgYaOBhbLTGFOzonl5BZA8wZBkZBqyCeusDOVC8UunaIeqBSKjJKSoG1QmY1Vi4ZBvfoZBm';
  const INSTAGRAM_USER_ID = '17841470271684652';

  try {
    const response = await fetch(
      `https://graph.facebook.com/v23.0/17841470271684652/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,like_count,comments_count&access_token=EAAPHZBijhj30BPYVfYa9Smdjrx39WMuEN5dRZB3invhxZCgItZBt4aZAO4ZC6TwhEwFFvxtEJk1x5HwMgIOAzBe8Q5bUsEFFRTfDAMGjZBlmdJzxg4X9LM9zVoo1n624X7ctdZCPnJ7k39227TZCCHkO7v1Fteyx1haV3Jq2biL8ZCFlBWJfsp4FwgbFgl782g0mxX4xutCkVLPEltg6ur&limit=12`
    );

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({ error: errorData });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Server error fetching Instagram posts' });
  }
}
