/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation(
    $filter: ModelSubscriptionConversationFilterInput
  ) {
    onCreateConversation(filter: $filter) {
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
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation(
    $filter: ModelSubscriptionConversationFilterInput
  ) {
    onUpdateConversation(filter: $filter) {
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
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation(
    $filter: ModelSubscriptionConversationFilterInput
  ) {
    onDeleteConversation(filter: $filter) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
