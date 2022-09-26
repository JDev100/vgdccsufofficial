import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import {
  Button,
  Heading,
  Box,
  Image,
  Flex,
  Text,
  Wrap,
} from "@chakra-ui/react";
import BlogBox from "../../components/sections/blogbox";
const PostPage = ({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) => {
  return (
    <>
      <Flex justify="center" direction="column" align="center">
        <Box maxW="1100px" mx="auto" p={4}>
          <Link href="/blog">
            <Button mb={8}>Back</Button>
          </Link>
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color="primary.800"
            textAlign={["center", "center", "left", "left"]}
          >
            {title}
          </Heading>
          <Text as="h5" fontWeight="bold" mt={2} fontSize="md" mb={4}>
            Posted on {date}
          </Text>
          <Box w="100%" mb={16} mx="auto">
            <Image src={cover_image} size="100%" rounded="1rem" shadow="2xl" />
          </Box>
            <div className="blog">

          <div
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          ></div>
            </div>
        </Box>
      </Flex>
    </>
  );
};

export default PostPage;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
