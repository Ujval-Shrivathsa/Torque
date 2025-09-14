// pages/api/instagram-feed.js

export default async function handler(req, res) {
  const INSTAGRAM_ACCESS_TOKEN = 'EAAPHZBijhj30BPYVfYa9Smdjrx39WMuEN5dRZB3invhxZCgItZBt4aZAO4ZC6TwhEwFFvxtEJk1x5HwMgIOAzBe8Q5bUsEFFRTfDAMGjZBlmdJzxg4X9LM9zVoo1n624X7ctdZCPnJ7k39227TZCCHkO7v1Fteyx1haV3Jq2biL8ZCFlBWJfsp4FwgbFgl782g0mxX4xutCkVLPEltg6ur';
  const INSTAGRAM_USER_ID = '17841470271684652';

  try {
    const response = await fetch(
      `https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,like_count,comments_count&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=12`
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
