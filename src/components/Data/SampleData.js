import User1 from "../Assets/musa1.jpg"
import User2 from "../Assets/musa2.jpg"
import User3 from "../Assets/dodge.jpg"
import Post1 from "../Assets/food.jpg"
import Post2 from "../Assets/food22.jpg"
import Post3 from "../Assets/post-1.jpg"
import Post4 from "../Assets/post-2.jpg"
import Post5 from "../Assets/bike1.jpg"
import Post6 from "../Assets/bike2.jpg"
import Post7 from "../Assets/couple.jpg"

const users = [
    {
        "id": "user-123",
        "name": "Muhammed Musa",
        "username": "galapagous",
        "email": "johnsmith@example.com",
        "password": "password123",
        "avatar": User1,
        "bio": "Hello, I'm musa",
        "website": "https://example.com/johnsmith",
        "isPrivate": false,
        "followers": ["user-456", "user-789"],
        "following": ["user-789"],
        "conversation":["conversation-110", "conversation-111"],
        "savedPost":["post-110", "post-111"]
      },
    {
        "id": "user-456",
        "name": "John Smith",
        "username": "johnsmith",
        "email": "johnsmith@example.com",
        "password": "password123",
        "avatar": User2,
        "bio": "Hello, I'm John!",
        "website": "https://example.com/johnsmith",
        "isPrivate": true,
        "followers": ["user-012", "user-789"],
        "following": ["user-789"],
        "conversation":["conversation-112", "conversation-113"],
        "savedPost":["post-110", "post-111"]
      },
    {
        "id": "user-789",
        "name": "John Smith",
        "username": "johnsmith",
        "email": "johnsmith@example.com",
        "password": "password123",
        "avatar": User3,
        "bio": "Hello, I'm John!",
        "website": "https://example.com/johnsmith",
        "isPrivate": false,
        "followers": ["user-456", "user-123"],
        "following": ["user-012"],
        "conversation":["conversation-115", "conversation-116"],
        "savedPost":["post-111"]
      },
    {
        "id": "user-012",
        "name": "John Smith",
        "username": "johnsmith",
        "email": "johnsmith@example.com",
        "password": "password123",
        "avatar": "",
        "bio": "Hello, I'm John!",
        "website": "https://example.com/johnsmith",
        "isPrivate": true,
        "followers": ["user-456", "user-789"],
        "following": ["user-456"],
        "conversation":["conversation-117"],
        "savedPost":[]
      },
]

const Post = [
    {
        "id": "post-110",
        "title": "A lesson about walking your own path",
        "owner": "user-123",
        "desc": "A man memory is like a map, it can capture the shadow of reality at a point in time, but it can't give you reality it self, if you live according to this, you will only live according to the man's memory, if you want the truth, there can be no intermediary.",
        "media": [Post1,Post2],
        "tags": ["user-456", "user-789"],
        "likes": ["user-789", "user-012"]
      },
    {
        "id": "post-111",
        "title": "A lesson from jordan peterson",
        "owner": "user-123",
        "description":"federich neitche once said aimlessness isn't nothing aimlessness is bad, the world is so full of dissapointment that we turn to quick fix mechanism to help us forget the pain. The solution i guess is to find something worth doing that the fact that your going to pass through pain acquiring those skils is justified",
        "media": [Post3, Post4],
        "tags": ["user-456", "user-789"],
        "likes": ["user-789", "user-012"]
      },
    {
        "id": "post-046",
        "title": "The free man",
        "owner": "user-789",
        "description":"During japanese war, some soldiers took over a village, and all the villages left except for a monk, so the general got curious of who this master is, because he want the monk to submit to his will, he drew his sword and said, 'fool, dont you see i am the type of man who will put a sword through you without blinking an eye' of which the monk replied calmly, 'dont you see i am the type of man who will have a sword put through him without blinking an eye'",
        "media": [Post5, Post6],
        "tags": ["user-123"],
        "likes": ["user-123", "user-012"]
      },
    {
        "id": "post-952",
        "title": "The myth of working hard",
        "owner": "user-012",
        "description":"Since my childhood, society taught me to work hard, now as a grown man, i realize society dont actually reward hard work, but effectiveness. if apple spend 4 yrs developing a product and its ineffective, i wont pay a dime for it, but if they spend 3week on aproduct and it work, i will pay them in full",
        "media": [Post7],
        "tags": ["user-456", "user-789"],
        "likes": ["user-789", "user-012"]
      },
]

const comment = [
    {
        "id": "comment-100",
        "user": "user-456",
        "post": "post-110",
        "content": "Great post, Musa! Keep it up!"
    },      
    {
        "id": "comment-101",
        "user": "user-012",
        "post": "post-046",
        "content": "wow fearlessness is truely a breaker of chain!"
    },      
    {
        "id": "comment-102",
        "user": "user-456",
        "post": "post-046",
        "content": "Great work man"
    },      
    {
        "id": "comment-103",
        "user": "user-456",
        "post": "post-952",
        "content": "keep it up"
    },      
]

const conversation = [
    {
        "id": "conversation-012",
        "title": "Project discussion",
        "participants": ["user-123", "user-456"],
        "messages": ["message-345", "message-678"]
      },
    {
        "id": "conversation-013",
        "title": "Project discussion",
        "participants": ["user-789", "user-012"],
        "messages": ["message-900", "message-901"]
      }
]

const message = [
    {
        "id": "message-345",
        "test": "Hey John, did you get the latest update?",
        "author": "user-456",
        "conversation": "conversation-012"
      },
      {
        "id": "message-678",
        "test": "Yes, I did. Let's discuss it in our next meeting.",
        "author": "user-123",
        "conversation": "conversation-012"
      },
      {
        "id": "message-900",
        "test": "Hey John, did you get the latest update?",
        "author": "user-789",
        "conversation": "conversation-013"
      },
      {
        "id": "message-901",
        "test": "Yes, I did. Let's discuss it in our next meeting.",
        "author": "user-012",
        "conversation": "conversation-013"
      }
]

export {users, post, comment, conversation}


