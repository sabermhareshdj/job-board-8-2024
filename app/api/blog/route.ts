// http://localhost:8003/posts/

// external api - server componenent : token : backend

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
   try {
      const response = await fetch("http://localhost:8003/api/posts/");
      const data = await response.json();
      return NextResponse.json(data);
   } catch (error) {
      console.log("error getting data from API", error);
      return NextResponse.json({ status: 500 });
   }
}
