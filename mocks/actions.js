// Users
// our reducers implement these changes
// 

{
  type: AUTH_USER,
  uid
}

{
  type: UNAUTH_USER,
}

{
  type: FETCHING_USER
}

{
  type: FETCHING_USER_FAILURE,
  error: 'Error fetching user'
}

{
  type: FETCHING_USER_SUCCESS,
  uid,
  user,
  timestamep
}

// DUCKS
{
  type: FETCHING_DUCK
}

{
  type: FETCHING_DUCK_ERROR,
  error: 'Error fetching duck'
}

{
  type: FETCHING_DUCK_SUCCESS,
  duck,
}

{
  type: REMOVE_FETCHING
}

{
  type: ADD_DUCK,
  duck
}

{
  type: ADD_MULTIPLE_DUCKS,
  ducks
}

// form-control-feedback
{
  type: SETTING_FEED_LISTENER
}

{
  type: SETTING_FEED_LISTENER_ERROR,
  error: 'Error fetching feeds'
}

{
  type: SETTING_FEED_LISTENER_SUCCESS,
  duckIds
}

{
  type: ADD_NEW_DUCK_ID_TO_FEED,
  duckId,
}

{
  type: RESET_NEW_DUCKS_AVAIALBLE,
}

// LISTENERS
{
  type: ADD_LISTENER,
  listenerId,
}

// MODAL
{
  type: OPEN_MODAL
}

{
  type: CLOSE_MODAL
}

{
  UPDATE_DUCK_TEXT,
  newDuckText,
}


//REPLIES
{
  type: FETCHING_REPLIS,
}

{
  type: FETCHING_REPLIS_ERROR,
  error: 'Error fetching replies'
}

{
  type: FETCHING_REPLIES_SUCCESS,
  replies,
  duckId,
  lastUpdated: Date.now()
}

{
  type: ADD_REPLY,
  duckId,
  reply,
}

{
  type: ADD_REPLY_ERROR
  error: 'Error adding a reply'
}

{
  type: REMOVE_REPLY,
  replyId
}

// LIKE COUNT

{
  type: FETCHING_COUNT
}

{
  type: FETCHING_COUNT_ERROR,
  error: 'Error fethcing duck\'s like count',
}

{
  type: FETCHING_COUNT_SUCCESS,
  duckId,
  count,
}

// USERS DUCKS

{
  type: FETCHING_USERS_DUCKS,
  uid
}

{
  type: FETCHING_USERS_DUCKS_ERROR,
  error: 'Error fetching Users Duck Ids'
}

{
  type: FETCHING_USERS_DUCKS_SUCCESS,
  uid,
  duckIds,
  lastUpdated
}


// check if we have all ducks, they will be cached
{
  type: ADD_SINGLE_USERS_DUCK,
  uid,
  duckIds,
  lastUpdated
}


// usersLikes
{
  type: FETCHING_LIKES
}

{
  type: FETCHING_LIKES_ERROR,
  error: 'Error fetching likes',
}

{
  type: FETCHING_LIKES_SUCCESS,
  likes,
}

{
  type: ADD_LIKE,
  duckId
}

{
  type: REMOVE_LIKE,
  duckId
}
