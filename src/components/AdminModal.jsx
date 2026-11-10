import React from "react";
import { X } from "lucide-react";

export default function AdminModal({
  isAdminOpen,
  setIsAdminOpen,
  handleAddPhoto,
  newPhoto,
  setNewPhoto,
}) {
  if (!isAdminOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md"
        onClick={() => setIsAdminOpen(false)}
      />
      <div className="relative bg-zinc-950 border border-zinc-800 rounded-xl max-w-2xl w-full p-6 z-10">
        <div className="flex justify-between items-center pb-4 border-b border-zinc-800">
          <h2 className="text-2xl font-black uppercase">
            ADMIN <span className="text-[#FF007F]">CMS PORTAL</span>
          </h2>
          <button onClick={() => setIsAdminOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-sm font-bold text-[#FF007F] uppercase mb-2">
              Upload New MTB Photograph
            </h3>
            <form onSubmit={handleAddPhoto} className="space-y-3">
              <input
                type="text"
                placeholder="Photo Title"
                value={newPhoto.title}
                onChange={(e) =>
                  setNewPhoto({ ...newPhoto, title: e.target.value })
                }
                className="w-full bg-zinc-900 border border-zinc-800 p-2 text-xs rounded text-white"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Rider Name"
                  value={newPhoto.rider}
                  onChange={(e) =>
                    setNewPhoto({ ...newPhoto, rider: e.target.value })
                  }
                  className="bg-zinc-900 border border-zinc-800 p-2 text-xs rounded text-white"
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={newPhoto.location}
                  onChange={(e) =>
                    setNewPhoto({ ...newPhoto, location: e.target.value })
                  }
                  className="bg-zinc-900 border border-zinc-800 p-2 text-xs rounded text-white"
                />
              </div>
              <input
                type="text"
                placeholder="Image Direct URL"
                value={newPhoto.imageUrl}
                onChange={(e) =>
                  setNewPhoto({ ...newPhoto, imageUrl: e.target.value })
                }
                className="w-full bg-zinc-900 border border-zinc-800 p-2 text-xs rounded text-white"
              />
              <button
                type="submit"
                className="w-full bg-[#FF007F] text-black font-black uppercase py-2 text-xs"
              >
                Publish Photo to Live Site
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
