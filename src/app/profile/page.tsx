import { Suspense } from "react";
import Image from "next/image";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";
import { api } from "@/trpc/server";
import { UploadButton } from "@/components/ui/upload-button";
import { TagsEditor } from "@/components/user/TagsEditor";
import { AttributesEditor } from "@/components/user/AttributesEditor";
import { BioEditor } from "@/components/user/BioEditor";

export default async function ProfilePage() {
  const session = await auth();
  
  if (!session?.user) {
    redirect("/");
  }
  
  const user = await api.user.getMyProfile();

  return (
    <div className="min-h-screen bg-deep-blue-900 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
            My Profile
          </h1>
          
          <div className="glass-panel rounded-xl p-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Left column - Profile Image */}
              <div className="flex flex-col items-center space-y-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-blue-600/30">
                  {user?.profileImage ? (
                    <Image
                      src={user.profileImage}
                      alt="Profile"
                      fill
                      className="object-cover"
                    />
                  ) : user?.image ? (
                    <Image
                      src={user.image}
                      alt="Profile"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-blue-900/50 text-xl font-bold text-white">
                      {user?.name?.[0] ?? "U"}
                    </div>
                  )}
                </div>
                
                <div className="w-full">
                  <h2 className="mb-2 text-center text-xl font-semibold text-white">
                    {user?.name}
                  </h2>
                  <p className="mb-4 text-center text-sm text-blue-200/70">
                    {user?.email}
                  </p>

                  <Suspense fallback={<div>Loading upload button...</div>}>
                    <UploadButton />
                  </Suspense>
                </div>
              </div>

              {/* Right column - User information */}
              <div className="md:col-span-2 space-y-8">
                <section>
                  <h3 className="mb-4 text-xl font-semibold text-blue-200">Bio</h3>
                  <BioEditor initialBio={user?.bio} />
                </section>
                
                <section>
                  <h3 className="mb-4 text-xl font-semibold text-blue-200">Skills & Interests</h3>
                  <TagsEditor initialTags={user?.tags as string[] | undefined} />
                </section>
                
                <section>
                  <h3 className="mb-4 text-xl font-semibold text-blue-200">Custom Attributes</h3>
                  <AttributesEditor initialAttributes={user?.attributes as Record<string, unknown> | undefined} />
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}