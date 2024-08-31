"use client"
import { useEffect , useState } from "react";
import { useBlogStore } from "../../stores/blogStore";
import { useParams } from "next/navigation";


function PostDetail() {

   // get id from url
   const params = useParams();
   const id = params.id as string
   const { selectedPost , fetchPostById } = useBlogStore();
    const [loading, setLoading] = useState(true);

   useEffect(() => {
      if (id){
         const fetchData = async () => {
            setLoading(true);
            await fetchPostById(id);
            setLoading(false);
         };
         fetchData();
      }
   }, [id, fetchPostById]);

   if (loading) {
      return <div className="container mx-auto p-6">Loading ...</div>
   }
   if (!setLoading) {
      return <div className="container mx-auto p-6">Post not found</div>
   }
 return (
    <div className="container mx-auto p-6">
       <div className="max-w-xl mx-auto text-center">
          <img
             src="https://cdn-dondc.nitrocdn.com/CAGyVVGlYXwRenmZFCOuSTkTBBMhjeFU/assets/images/optimized/rev-f5b0cd9/www.etudemy.com/wp-content/uploads/2022/01/Computer-Courses-in-Perinthalmanna-python-Copy.jpg"
             alt=""
          />
          <h2 className="text-3xl font-bold mb-4">{selectedPost?.title}</h2>
          <p className="text-gray-700">{selectedPost?.content}</p>
       </div>
    </div>
 );
}

export default PostDetail;
