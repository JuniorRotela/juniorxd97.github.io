import Link from "next/link";
import Layout from "../components/Layout";

import { posts } from "../profile";

const PostCard = ({ post }) => (
    <div className="col-md-4">
      <div className="card">
        <div className="overflow">
          <img src={post.img} alt="" className="card-img-top " />
        </div>
        <div className="card-body">
          <h1>{post.titulo}</h1>
          <p>{post.contenido}</p>
          <Link href={post.URL}>
            <button  className="btn btn-light">Ver mas</button>
          </Link>
        </div>
      </div>
    </div>
  );
  
  const blog = () => {
    return (
      <Layout title="Mis Redes Sociales" className="py-2" footer={false} >
        <div className="row">
          {posts.map((post, i) => (
            <PostCard post={post} key={i} />
          ))}
        </div>
      </Layout>
    );
  };
  
  export default blog;
  