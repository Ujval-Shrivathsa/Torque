// pages/api/instagram-feed.js

export default async function handler(req, res) {
  const INSTAGRAM_ACCESS_TOKEN = 'EAAPHZBijhj30BO92QhEaFeXrInJwD28VJ3iJnmyP3pF1KBxVAaZAQS1uQFeesnDgWqp95ikv9cSaCfHdZBkmVpgbcfjSYrVYSZC0ZAyfPLppXc7rO7TBTJYKmPUD9asByUtgY48HDaqXkTha4TXneLZCXr9OHapi8GdaofRpUiL2mJkUZAsx2pNZBzWqfcMBYZCeNQEQXsNgVHK4vhF9MVZCJZBWXJVVjlLQwVGtMjgY2bYO5oMRIRTa1Jw';
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
