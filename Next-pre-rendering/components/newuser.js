function newuser({ users }) {
  return (
    <>
      <p>{users.name}</p>
      <p>{users.email}</p>
    </>
  );
}

export default newuser;
