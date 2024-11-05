


interface Post {
    id: number;
    title: string;
    body: string;
  }
  
  type Params = {
    id: string;
  };
  
  export default async function IdShow({ params }: { params: Promise<Params> }) {
    
    const resolvedParams = await params;
    const postId = resolvedParams.id; 
    console.log(postId);
  
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      next: {
        revalidate: 120,
      },
    });
  
    const post: Post = await data.json(); // تغيير إلى Post بدلاً من Post[]

    return (
      <>
        {/** commponent */}

        <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
      }}>

      <div className="bg-gray-800" style={{
      width:"85%",
      padding:"10px",
      borderRadius:"10px",
      color:"white",
      margin:"20px",

    }} key={post.id}>
                
        <h1> {post.title}</h1>
        <p>{post.body}</p>
    </div>
    </div>




 

      </>
    );
  }
  