import { create } from "zustand";

interface Comment {
   id: number;
   user_id: number;
   post_id: number;
   content: string;
   publish_date: string;
}

interface Post {
   id: number;
   title: string;
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
   prevPage: string | null;
   totalCount: number;
   selectedPost: Post | null;
   fetchPosts: (url?: string) => Promise<void>;
   fetchPostById: (id: number) => Promise<void>;
}

export const useBlogStore = create<BlogState>((set) => ({
   posts: [],
   nextPage: null,
   prevPage: null,
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
            prevPage: data.previous,
            totalCount: data.count,
         });
      } catch (error) {
         console.log(error);
      }
   },

   fetchPostById: async (id:number) => {
      try {
         const response = await fetch(`/api/blog/${id}`);
         const data = await response.json();
         console.log(data)
         set({
            selectedPost: data,
         });
      } catch (error) {
         console.log(error);
      }
   },
}));
