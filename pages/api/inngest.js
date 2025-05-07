import { serve } from "inngest/next";
import { inngest, syncUserCreation, syncUserUpdation, syncUserDeletion } from "@/config/inngest";

const handler = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion
  ],
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
