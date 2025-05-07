import { z } from "zod";
import { eq } from "drizzle-orm";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { users } from "@/server/db/schema";

export const userRouter = createTRPCRouter({
  getProfile: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.db.query.users.findFirst({
        where: eq(users.id, input.userId),
      });

      return user;
    }),

  getMyProfile: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.query.users.findFirst({
      where: eq(users.id, ctx.session.user.id),
    });

    return user;
  }),

  updateProfileImage: protectedProcedure
    .input(z.object({ url: z.string().url() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .update(users)
        .set({ profileImage: input.url })
        .where(eq(users.id, ctx.session.user.id));
      
      return { success: true };
    }),

  updateBio: protectedProcedure
    .input(z.object({ bio: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .update(users)
        .set({ bio: input.bio })
        .where(eq(users.id, ctx.session.user.id));
      
      return { success: true };
    }),

  updateTags: protectedProcedure
    .input(z.object({ tags: z.array(z.string()) }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .update(users)
        .set({ tags: input.tags })
        .where(eq(users.id, ctx.session.user.id));
      
      return { success: true };
    }),

  updateAttributes: protectedProcedure
    .input(z.object({ 
      attributes: z.record(z.string(), z.union([z.string(), z.number(), z.boolean()])) 
    }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .update(users)
        .set({ attributes: input.attributes })
        .where(eq(users.id, ctx.session.user.id));
      
      return { success: true };
    }),
});