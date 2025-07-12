import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import BlogPost from '../../components/pages-comp/BlogPost';

export default function BlogPostPage() {
  return (
    <Layout>
      <BlogPost />
    </Layout>
  );
}