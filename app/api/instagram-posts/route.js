// app/api/instagram-posts/route.js

export async function GET() {
  const INSTAGRAM_ACCESS_TOKEN = 'EAAPHZBijhj30BO92QhEaFeXrInJwD28VJ3iJnmyP3pF1KBxVAaZAQS1uQFeesnDgWqp95ikv9cSaCfHdZBkmVpgbcfjSYrVYSZC0ZAyfPLppXc7rO7TBTJYKmPUD9asByUtgY48HDaqXkTha4TXneLZCXr9OHapi8GdaofRpUiL2mJkUZAsx2pNZBzWqfcMBYZCeNQEQXsNgVHK4vhF9MVZCJZBWXJVVjlLQwVGtMjgY2bYO5oMRIRTa1Jw';
  const INSTAGRAM_USER_ID = '17841470271684652';

  try {
    const response = await fetch(
      `https://graph.facebook.com/v18.0/17841470271684652/media?fields=id,caption,media_type,media_url,permalink,timestamp,like_count,comments_count&access_token=EAAPHZBijhj30BO9eh808vQYzFpdyZBUXzbGviQ9RZBnXgrhkXi6B47KZBEzBMdLwUUc5WysXyERltDQZARRGGZB4XGkXVN7ZBa0Gohe2MsrsovwREwXCeLuklP67uS8K4oCkYkDyZCaPAWVIQH3bVgdd48dSzbrMABZBaG2oM27neijFtHh5R5Gg2j7nxBrLeLnMOVeZCVpBdmuCgxuBtK`
    );

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`);
    }

    const data = await response.json();

    // Check for Instagram API errors
    if (data.error) {
      throw new Error(`Instagram API error: ${data.error.message}`);
    }

    // Return the data using Next.js 13+ Response API
    return Response.json(data);

  } catch (error) {
    console.error('Instagram API Error:', error);
    
    // Return error response
    return Response.json(
      { error: error.message || 'Failed to fetch Instagram posts' },
      { status: 500 }
    );
  }
}

// Handle CORS if needed
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}