export const checkPermission = (requestUser, resourceUserId, res) => {
  if (requestUser.role === 'admin') {
    return;
  }

  if (requestUser._id.toString() === resourceUserId.toString()) {
    return;
  }

  res.status(401);
  throw new Error('Permission denied');
};
