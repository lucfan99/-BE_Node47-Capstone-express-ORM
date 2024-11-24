const getUsers = (req, res) => {
  res.status(200).json({ message: "Get list user Api" });
};

const createUser = (req, res) => {
  let body = req.body;
  res.send(body);
};
export { getUsers, createUser };
