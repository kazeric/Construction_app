export const isSameSenderMargin = (messages, m, i, userId) => {
  // console.log(i === messages.length - 1);

  if (
    i < messages.length - 1 &&
    messages[i + 1].sender._id === m.sender._id &&
    messages[i].sender._id !== userId
  )
    return 33;
  else if (
    (i < messages.length - 1 &&
      messages[i + 1].sender._id !== m.sender._id &&
      messages[i].sender._id !== userId) ||
    (i === messages.length - 1 && messages[i].sender._id !== userId)
  )
    return 0;
  else return "auto";
};

export const isSameSender = (messages, m, i, userId) => {
  return (
    i < messages.length - 1 &&
    (messages[i + 1].sender._id !== m.sender._id ||
      messages[i + 1].sender._id === undefined) &&
    messages[i].sender._id !== userId
  );
};

export const isLastMessage = (messages, i, userId) => {
  return (
    i === messages.length - 1 &&
    messages[messages.length - 1].sender._id !== userId &&
    messages[messages.length - 1].sender._id
  );
};

export const isSameUser = (messages, m, i) => {
  return i > 0 && messages[i - 1].sender._id === m.sender._id;
};

export const getSender = (loggedUser, users) => {
  // Debug logs to help identify issues
  console.log("getSender called with:", { loggedUser, users });
  
  if (!loggedUser) {
    console.warn("getSender: loggedUser is null or undefined");
    return "Unknown User";
  }
  
  if (!users || !Array.isArray(users)) {
    console.warn("getSender: users is not a valid array", users);
    return "Unknown User";
  }
  
  if (users.length < 2) {
    console.warn("getSender: users array has less than 2 users", users);
    return "Unknown User";
  }
  
  // Find the other user (not the logged user)
  const otherUser = users.find(user => user._id !== loggedUser._id);
  
  if (!otherUser) {
    console.warn("getSender: Could not find other user", { loggedUser: loggedUser._id, users });
    return "Unknown User";
  }
  
  return otherUser.name || "Unnamed User";
};

export const getSenderFull = (loggedUser, users) => {
  return users[0]._id === loggedUser._id ? users[1] : users[0];
};