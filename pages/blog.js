import React from "react";
import fs from "fs";
import path from "path";
import { SimpleGrid, Heading } from "@chakra-ui/react";
import BlogCard from "../components/blogcard";
import matter from "gray-matter";

const Blog = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <Heading
        as="h1"
        size="xl"
        fontWeight="bold"
        color="primary.800"
        textAlign={["center", "center", "left", "left"]}
        mb={16}
      >
        Latest Posts
      </Heading>
      <SimpleGrid
        maxW="1280px"
        columns={[1, 2, 3, 4]}
        spacing={16}
        mb={16}
        justifyContent="center"
        p={4}
      >
        {/* Get the posts */}
        {posts.map((post, index) => (
          <BlogCard
            key={index}
            image={post.frontmatter.cover_image}
            badges={post.frontmatter.badges}
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            desc={post.frontmatter.excerpt}
            href={`/blog/${post.slug}`}
          />
        ))}
      </SimpleGrid>
      <div>Blog</div>
    </>
  );
};

export default Blog;

// Get the blog posts
export async function getStaticProps() {
  // Get fies from posts dir
  const files = fs.readdirSync(path.join("posts"));
  //Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    //Create sllug
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });
  console.log(posts);
  return {
    props: {
      posts: posts,
    },
  };
}
