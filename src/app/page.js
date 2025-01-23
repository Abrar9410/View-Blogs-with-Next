import Link from "next/link";


const Home = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return (
    <div className="w-11/12 mx-auto text-center">
      <h1 className="text-center text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold my-8">Check Out All Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {
            data?.map(post => 
              <Link key={post.id} href={`/blog/${post.id}`} className="text-blue-500 hover:scale-105">
                {post.title}
              </Link>
            )
          }
      </div>
    </div>
  );
}

export default Home
