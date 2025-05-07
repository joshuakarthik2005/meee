import { serve } from "inngest/next";
import { inngest, syncUserCreation, syncUserDeletion, syncUserUpdation } from "@/config/inngest";

// Create an API that serves zero functions
const handler = serve({
    client: inngest,
    functions: [syncUserCreation, syncUserUpdation, syncUserDeletion],
  });
  
  export const { GET, POST } = handler;
  export default handler.POST; // 👈 THIS IS REQUIRED
  
