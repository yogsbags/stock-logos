import { serve } from "https://deno.land/std@0.210.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.210.0/http/file_server.ts";

const port = 8000;

serve(async (req: Request) => {
  const headers = new Headers({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
    "Cache-Control": "public, max-age=31536000",
  });

  try {
    return await serveDir(req, {
      fsRoot: "assets",
      urlRoot: "assets",
      showDirListing: false,
      headers,
    });
  } catch (error) {
    console.error('Error serving files:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}, { port });

console.log(`Server running at http://localhost:${port}`); 