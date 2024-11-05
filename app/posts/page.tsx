import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function PostsPage() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 120,
    },
  });

  const posts: Post[] = await data.json();

  return (
    <>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}>
        {posts.map((post) => (
          <Link style={{
            width: "85%",

          }} href={`./posts/${post.id}`} key={post.id} passHref>
            <div className="bg-gray-800" style={{
              padding: "10px",
              borderRadius: "10px",
              color: "white",
              margin: "20px",
              textDecoration: "none", // لإزالة أي تزيين نصي من الرابط
            }}>
              <h1>{post.title}</h1>
              <br />
              <p>{post.body}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
