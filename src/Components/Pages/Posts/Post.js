import { Link } from "react-router-dom";
const Post = ({ post }) => {
    
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
    <div className="card-header bg-dark text-white">
        <Link to={`/posts/${post.id}`}>{post.title.substr(0,10)}</Link>
    </div>
    <ul className="list-group list-group-flush bg-dark text-white">
        <li className="list-group-item bg-dark text-white">{ post.body.substr(0,20)}</li>
        
    </ul>
</div>
      );
}
 
export default Post;