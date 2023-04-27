/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      Name
      userId
      username
      gender
      phone
      posts {
        items {
          id
          title
          description
          media
          createdAt
          updatedAt
          userPostsId
          userSavedPostId
        }
        nextToken
      }
      avatar
      bio
      website
      following {
        items {
          id
          Name
          userId
          username
          gender
          phone
          avatar
          bio
          website
          isPrivate
          createdAt
          updatedAt
          userFollowingId
          userFollowersId
          postTagsId
          postLikesId
          conversationParticipantsId
        }
        nextToken
      }
      followers {
        items {
          id
          Name
          userId
          username
          gender
          phone
          avatar
          bio
          website
          isPrivate
          createdAt
          updatedAt
          userFollowingId
          userFollowersId
          postTagsId
          postLikesId
          conversationParticipantsId
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          userCommentsId
          postCommentsId
        }
        nextToken
      }
      savedPost {
        items {
          id
          title
          description
          media
          createdAt
          updatedAt
          userPostsId
          userSavedPostId
        }
        nextToken
      }
      conversation {
        items {
          id
          title
          createdAt
          updatedAt
          userConversationId
        }
        nextToken
      }
      isPrivate
      createdAt
      updatedAt
      userFollowingId
      userFollowersId
      postTagsId
      postLikesId
      conversationParticipantsId
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        userId
        username
        gender
        phone
        posts {
          nextToken
        }
        avatar
        bio
        website
        following {
          nextToken
        }
        followers {
          nextToken
        }
        comments {
          nextToken
        }
        savedPost {
          nextToken
        }
        conversation {
          nextToken
        }
        isPrivate
        createdAt
        updatedAt
        userFollowingId
        userFollowersId
        postTagsId
        postLikesId
        conversationParticipantsId
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      description
      owner {
        id
        Name
        userId
        username
        gender
        phone
        posts {
          nextToken
        }
        avatar
        bio
        website
        following {
          nextToken
        }
        followers {
          nextToken
        }
        comments {
          nextToken
        }
        savedPost {
          nextToken
        }
        conversation {
          nextToken
        }
        isPrivate
        createdAt
        updatedAt
        userFollowingId
        userFollowersId
        postTagsId
        postLikesId
        conversationParticipantsId
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          userCommentsId
          postCommentsId
        }
        nextToken
      }
      media
      tags {
        items {
          id
          Name
          userId
          username
          gender
          phone
          avatar
          bio
          website
          isPrivate
          createdAt
          updatedAt
          userFollowingId
          userFollowersId
          postTagsId
          postLikesId
          conversationParticipantsId
        }
        nextToken
      }
      likes {
        items {
          id
          Name
          userId
          username
          gender
          phone
          avatar
          bio
          website
          isPrivate
          createdAt
          updatedAt
          userFollowingId
          userFollowersId
          postTagsId
          postLikesId
          conversationParticipantsId
        }
        nextToken
      }
      createdAt
      updatedAt
      userPostsId
      userSavedPostId
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        owner {
          id
          Name
          userId
          username
          gender
          phone
          avatar
          bio
          website
          isPrivate
          createdAt
          updatedAt
          userFollowingId
          userFollowersId
          postTagsId
          postLikesId
          conversationParticipantsId
        }
        comments {
          nextToken
        }
        media
        tags {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
        userSavedPostId
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      user {
        id
        Name
        userId
        username
        gender
        phone
        posts {
          nextToken
        }
        avatar
        bio
        website
        following {
          nextToken
        }
        followers {
          nextToken
        }
        comments {
          nextToken
        }
        savedPost {
          nextToken
        }
        conversation {
          nextToken
        }
        isPrivate
        createdAt
        updatedAt
        userFollowingId
        userFollowersId
        postTagsId
        postLikesId
        conversationParticipantsId
      }
      post {
        id
        title
        description
        owner {
          id
          Name
          userId
          username
          gender
          phone
          avatar
          bio
          website
          isPrivate
          createdAt
          updatedAt
          userFollowingId
          userFollowersId
          postTagsId
          postLikesId
          conversationParticipantsId
        }
        comments {
          nextToken
        }
        media
        tags {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
        userSavedPostId
      }
      content
      createdAt
      updatedAt
      userCommentsId
      postCommentsId
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          Name
          userId
          username
          gender
          phone
          avatar
          bio
          website
          isPrivate
          createdAt
          updatedAt
          userFollowingId
          userFollowersId
          postTagsId
          postLikesId
          conversationParticipantsId
        }
        post {
          id
          title
          description
          media
          createdAt
          updatedAt
          userPostsId
          userSavedPostId
        }
        content
        createdAt
        updatedAt
        userCommentsId
        postCommentsId
      }
      nextToken
    }
  }
`;
export const getConversation = /* GraphQL */ `
  query GetConversation($id: ID!) {
    getConversation(id: $id) {
      id
      title
      messages {
        items {
          id
          text
          createdAt
          updatedAt
          conversationMessagesId
        }
        nextToken
      }
      participants {
        items {
          id
          Name
          userId
          username
          gender
          phone
          avatar
          bio
          website
          isPrivate
          createdAt
          updatedAt
          userFollowingId
          userFollowersId
          postTagsId
          postLikesId
          conversationParticipantsId
        }
        nextToken
      }
      createdAt
      updatedAt
      userConversationId
    }
  }
`;
export const listConversations = /* GraphQL */ `
  query ListConversations(
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        messages {
          nextToken
        }
        participants {
          nextToken
        }
        createdAt
        updatedAt
        userConversationId
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      text
      author {
        id
        Name
        userId
        username
        gender
        phone
        posts {
          nextToken
        }
        avatar
        bio
        website
        following {
          nextToken
        }
        followers {
          nextToken
        }
        comments {
          nextToken
        }
        savedPost {
          nextToken
        }
        conversation {
          nextToken
        }
        isPrivate
        createdAt
        updatedAt
        userFollowingId
        userFollowersId
        postTagsId
        postLikesId
        conversationParticipantsId
      }
      conversation {
        id
        title
        messages {
          nextToken
        }
        participants {
          nextToken
        }
        createdAt
        updatedAt
        userConversationId
      }
      createdAt
      updatedAt
      conversationMessagesId
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        author {
          id
          Name
          userId
          username
          gender
          phone
          avatar
          bio
          website
          isPrivate
          createdAt
          updatedAt
          userFollowingId
          userFollowersId
          postTagsId
          postLikesId
          conversationParticipantsId
        }
        conversation {
          id
          title
          createdAt
          updatedAt
          userConversationId
        }
        createdAt
        updatedAt
        conversationMessagesId
      }
      nextToken
    }
  }
`;
