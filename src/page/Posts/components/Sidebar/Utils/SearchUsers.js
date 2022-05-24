export const filterUsers = (suggestedUsers, searchText) => {
  return suggestedUsers?.filter(
    (user) =>
      user.username.toLowerCase().includes(searchText.trim()) ||
      user.firstname.toLowerCase().includes(searchText.toLowerCase().trim()) ||
      user.lastname.toLowerCase().includes(searchText.toLowerCase().trim())
  );
};
