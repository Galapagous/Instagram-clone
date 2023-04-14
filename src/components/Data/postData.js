const Post = {
  "id": "1",
  "userId": "user1",
  "type": "image",
  "mediaUrl": "https://example.com/image1.jpg",
  "caption": "This is a sample caption",
  "tags": ["tag1", "tag2"],
  "location": {
    "name": "Central Park",
    "latitude": 40.785091,
    "longitude": -73.968285
  },
  "createdAt": "2023-04-13T10:30:00.000Z",
  "updatedAt": "2023-04-13T10:30:00.000Z",
  "likes": ["user2", "user3"],
  "comments": [
    {
      "id": "comment1",
      "userId": "user2",
      "text": "Nice pic!",
      "createdAt": "2023-04-13T10:31:00.000Z",
      "updatedAt": "2023-04-13T10:31:00.000Z",
      "likes": ["user3"]
    },
    {
      "id": "comment2",
      "userId": "user3",
      "text": "Wow, amazing!",
      "createdAt": "2023-04-13T10:32:00.000Z",
      "updatedAt": "2023-04-13T10:32:00.000Z",
      "likes": ["user2"]
    }
  ],
  "shares": ["user4"],
  "isShared": false,
  "isBookmark": false,
  "visibility": "public"
}
