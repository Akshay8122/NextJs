import styles from "../pages/styles.module.css";
import Newuser from "../components/newuser";

function UserList({ users }) {
  return (
    <div className={styles.container}>
      <h1>User data fetching in Next-js</h1>
      {users.map((users) => {
        return (
          <div key={users.id}>
            {/* using components */}
            <Newuser users={users} />

            {/* using page */}
            {/* <p> {users.name} </p>
            <p>{users.email}</p> */}
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}
export default UserList;
