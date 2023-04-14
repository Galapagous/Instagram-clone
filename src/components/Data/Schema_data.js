type Conversation {
  id: ID!
  title: String!
  messages: [Message!]!
  participants: [User!]!
  createdAt: String!
  updatedAt: String!
}

type Message {
  id: ID!
  text: String!
  author: User!
  conversation: Conversation!
  createdAt: String!
  updatedAt: String!
}

type User {
  id: ID!
  username: String!
  email: String!
  password: String!
  avatar: String
  bio: String
  website: String
  posts: [Post!]!
  following: [User!]!
  followers: [User!]!
  favorites: [Post!]!
  conversations: [Conversation!]!
  isPrivate: Boolean
  createdAt: String!
  updatedAt: String!
}

type Post {
  id: ID!
  user: User!
  text: String!
  media: [Media]
  tags: [Tag]
  location: Location
  createdAt: String!
  updatedAt: String!
  likes: [User]
  comments: [Comment]
}

type Comment {
  id: ID!
  user: User!
  post: Post!
  text: String!
  createdAt: String!
  updatedAt: String!
}