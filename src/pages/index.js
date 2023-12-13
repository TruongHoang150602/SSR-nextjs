import styles from "./page.module.css";

export default function Page({ users }) {
  return (
    <main className={styles.main}>
      <div>
        <h1>User List</h1>
        <ul>
          {users.map((user, index) => (
            <li key={user.id}>
              <p>{index + 1}</p>
              <p>Name: {user.name}</p>
              <p>Address: {user.address}</p>
              <p>Phone: {user.phone}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export const getServerSideProps = async () => {
  // Lấy dữ liệu từ API
  const response = await fetch(
    "https://653b1ca02e42fd0d54d4b3b0.mockapi.io/users"
  );
  const users = await response.json();

  // Trả về dữ liệu trong props
  return {
    props: {
      users,
    },
    // revalidate: 1,
  };
};

// getStaticProps
// getServerSideProps
