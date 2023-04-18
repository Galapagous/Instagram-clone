/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      Name
      username
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
      email
      password
      avatar
      bio
      website
      following {
        items {
          id
          Name
          username
          email
          password
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
          username
          email
          password
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      Name
      username
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
      email
      password
      avatar
      bio
      website
      following {
        items {
          id
          Name
          username
          email
          password
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
          username
          email
          password
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      Name
      username
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
      email
      password
      avatar
      bio
      website
      following {
        items {
          id
          Name
          username
          email
          password
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
          username
          email
          password
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      title
      description
      owner {
        id
        Name
        username
        posts {
          nextToken
        }
        email
        password
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
          username
          email
          password
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
          username
          email
          password
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      description
      owner {
        id
        Name
        username
        posts {
          nextToken
        }
        email
        password
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
          username
          email
          password
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
          username
          email
          password
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      description
      owner {
        id
        Name
        username
        posts {
          nextToken
        }
        email
        password
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
          username
          email
          password
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
          username
          email
          password
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      user {
        id
        Name
        username
        posts {
          nextToken
        }
        email
        password
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
          username
          email
          password
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      user {
        id
        Name
        username
        posts {
          nextToken
        }
        email
        password
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
          username
          email
          password
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      user {
        id
        Name
        username
        posts {
          nextToken
        }
        email
        password
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
          username
          email
          password
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
export const createConversation = /* GraphQL */ `
  mutation CreateConversation(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConversation(input: $input, condition: $condition) {
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
          username
          email
          password
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
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation(
    $input: UpdateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    updateConversation(input: $input, condition: $condition) {
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
          username
          email
          password
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
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation(
    $input: DeleteConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    deleteConversation(input: $input, condition: $condition) {
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
          username
          email
          password
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      text
      author {
        id
        Name
        username
        posts {
          nextToken
        }
        email
        password
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      text
      author {
        id
        Name
        username
        posts {
          nextToken
        }
        email
        password
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      text
      author {
        id
        Name
        username
        posts {
          nextToken
        }
        email
        password
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
