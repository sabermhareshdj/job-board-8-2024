import { create } from "zustand";

interface Comment {
   id: number;
   title: string;
   user_id: number;
   post_id: number;
   content: string;
   publish_date: string;
}

interface Post {
   id: number;
   author_id: number;
   content: string;
   publish_date: string;
   likes_count: number;
   total_comments: number;
   post_comment: Comment[];
}

interface BlogState {
   posts: Post[];
   nextPage: string | null;
   PrevPage: string | null;
   totalCount: number;
   selectedPost: Post | null;
}

export const useBlogStore = create<BlogState>((set) => ({
   posts: [],
   nextPage: null,
   PrevPage: null,
   totalCount: 0,
   selectedPost: null,

   fetchPosts: async (url = "/api/blog") => {
      try {
         const response = await fetch(url);
         const data = await response.json();

         // change state with coming data
         set({
            posts: data.results,
            nextPage: data.next,
            PrevPage: data.previous,
            totalCount: data.count,
         });
      } catch (error) {
         console.log(error);
      }
   },

   fetchPostById: async (id) => {
      try {
         const response = fetch(`/api/blog/${id}`);
         const data = await response.json();
         set({
            selectedPost: data,
         });
      } catch (error) {
         console.log(error);
      }
   },
}));
