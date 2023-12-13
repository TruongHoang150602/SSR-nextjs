import { useRouter } from "next/router";
import styles from "./page.module.css";

export default function Page({ user: _user }) {
  const user = _user || {};
  const router = useRouter();
  return (
    <main className={styles.main}>
      <div>
        <h1>User Details</h1>
        {router.isFallback ? "Loading..." : ""}
        <ul>
          <li key={user.id}>
            <p>Name: {user.name}</p>
            <p>Address: {user.address}</p>
            <p>Phone: {user.phone}</p>
          </li>
        </ul>
      </div>
    </main>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: { userId: "1" },
      },
      {
        params: { userId: "2" },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  // Lấy dữ liệu từ API
  const response = await fetch(
    `https://653b1ca02e42fd0d54d4b3b0.mockapi.io/users/${params.userId}`
  );

  const user = await response.json();
  return {
    props: {
      user,
    },
    // revalidate: 1,
  };
};
