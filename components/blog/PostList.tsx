"use client";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useBlogStore } from "../../stores/blogStore";
import { useEffect } from "react";

function PostList() {
   const { posts, nextPage, PrevPage, totalCount, fetchPosts } = useBlogStore();

   useEffect(() => {
      fetchPosts();
   }, [fetchPosts]);

   return (
      <div>
         <div>
            <nav className="flex items-center text-white p-5">
               <span className="text-xl font-bold mx-auto"> Our Blog </span>
            </nav>
         </div>
         <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-3">
               {posts.map((post) => (
                  <Card key={post.id}>
                     <CardHeader>
                        <img
                           src="https://cdn-dondc.nitrocdn.com/CAGyVVGlYXwRenmZFCOuSTkTBBMhjeFU/assets/images/optimized/rev-f5b0cd9/www.etudemy.com/wp-content/uploads/2022/01/Computer-Courses-in-Perinthalmanna-python-Copy.jpg"
                           alt=""
                        />
                        <CardTitle className="mt-5">{post.title}</CardTitle>
                     </CardHeader>
                     <CardContent>
                        <p>
                           {new Date(post.publish_date).toLocaleDateString()}
                        </p>
                        <div>
                           <span>❤️ {post.likes_count}</span>
                           <span className="ml-2">
                              💬 {post.total_comments}
                           </span>
                        </div>
                     </CardContent>
                     <CardFooter>
                        <Link href={`/blog/${post.id}`} className="underline">
                           Read More
                        </Link>
                     </CardFooter>
                  </Card>
               ))}
            </div>
            <div className="mt-5 flex justify-between">
               <Button
                  onClick={() => PrevPage && fetchPosts(PrevPage)}
                  disabled={!PrevPage}
               >
                  Previous
               </Button>
               <Button
                  onClick={() => nextPage && fetchPosts(nextPage)}
                  disabled={!nextPage}
               >
                  Next
               </Button>
            </div>
         </div>
      </div>
   );
}

export default PostList;
