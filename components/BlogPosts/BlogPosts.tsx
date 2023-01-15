import { useState } from "react";
import Categories from "../Categories/Categories";
import BlogPost from "./BlogPost/BlogPost";
import styles from "./BlogPosts.module.scss";

const BlogPosts = () => {
  
  const posts = [
    {
      id: 1,
      cat_id: 1,
      name: 'Post 1',
      url: 'https://www.google.com',
      imgUrl: 'https://via.placeholder.com/500x500.png'
    },
    {
      id: 2,
      cat_id: 1,
      name: 'Post 2',
      url: 'https://www.google.com',
      imgUrl: 'https://via.placeholder.com/500x500.png'
    },
    {
      id: 3,
      cat_id: 2,
      name: 'Post 3',
      url: 'https://www.google.com',
      imgUrl: 'https://via.placeholder.com/500x500.png'
    },
    {
      id: 4,
      cat_id: 1,
      name: 'Post 4',
      url: 'https://www.google.com',
      imgUrl: 'https://via.placeholder.com/500x500.png'
    },
    // {
    //   id: 5,
    //   cat_id: 3,
    //   name: 'Post 5',
    //   url: 'https://www.google.com',
    //   imgUrl: 'https://via.placeholder.com/500x500.png'
    // },
    // {
    //   id: 6,
    //   cat_id: 2,
    //   name: 'Post 6',
    //   url: 'https://www.google.com',
    //   imgUrl: 'https://via.placeholder.com/500x500.png'
    // },
    // {
    //   id: 7,
    //   cat_id: 3,
    //   name: 'Post 7',
    //   url: 'https://www.google.com',
    //   imgUrl: 'https://via.placeholder.com/500x500.png'
    // },
    // {
    //   id: 8,
    //   cat_id: 3,
    //   name: 'Post 8',
    //   url: 'https://www.google.com',
    //   imgUrl: 'https://via.placeholder.com/500x500.png'
    // },
  ]
  
  const [filtered, setFiltered] = useState(posts);
  
  const filterPosts = (id: any) => {
    if(id === 0) {
      setFiltered(posts);
      return;
    }
    
    const filteredPosts = posts.filter(post => post.cat_id === id);
    setFiltered(filteredPosts);
  }
  
  return (
    <section className={styles.posts}>
      <div className={styles.headingContainer}>
        <div className={styles.heading}>
          <span className="badge">Blog Posts</span>
          <h2 className={styles.title}>Posts written by me</h2>
        </div>
        
        <Categories filterProjects={filterPosts} />
      </div>
      <div className={styles.itemsContainer}>
        {
          filtered.map((post, index) => <BlogPost key={index} post={post} />)
        }
      </div>
    </section>
  )
}

export default BlogPosts