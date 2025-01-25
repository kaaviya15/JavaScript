

const BlogPlatform = () => {

    const blog=[
        {
            id:1,
            title:"HomeFun",
            content:"I love to be in my home because of my parents",
            author:"Kaaviya"
        },
        {
            id:2,
            title:"ClassFun",
            content:"Eating,learning,Making Fun,Creating Memories",
            author:"Kaaviya"
        },
        {
            id:3,
            title:"Travelling",
            content:"Life is All about Adventure,Just go",
            author:"Kaaviya"
        }
    ]
  return (
    <div className="container">
        <h1>Blog Post</h1>
        {
            blog.map((item)=><div key={item.id}>
                <h3>{item.title}</h3>
                <h4>{item.content}</h4>
                <h6>{item.author}</h6>
            </div>)
        }
         
    </div>
  )
}

export default BlogPlatform
