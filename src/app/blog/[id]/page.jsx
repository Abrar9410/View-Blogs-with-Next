

const page = async ({params}) => {
    const {id} = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    const {title, userId, body} = data; 
    return (
        <div className="w-11/12 mx-auto flex flex-col items-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl text-center my-8">{title}</h2>
            <h3 className="sm:text-lg md:text-xl xl:text-2xl text-center mb-12">(User ID: {userId})</h3>
            <p>{body}</p>
        </div>
    );
};

export default page;