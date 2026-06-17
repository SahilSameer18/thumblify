import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  colorSchemes,
  type AspectRatio,
  type IThumbnail,
  type ThumbnailStyle,
} from "../assests/assets";
import SoftBackdrop from "../components/SoftBackdrop";
import AspectRatioSelector from "../components/AspectRatioSelector";
import StyleSelector from "../components/StyleSelector";
import ColorSchemeSelector from "../components/ColorSchemeSelector";
import PreviewPanel from "../components/PreviewPanel";
import api from "../configs/api";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

const Generate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoggedIn, loading: authLoading } = useAuth();
  
  const [title, setTitle] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [thumbnail, setThumbnail] = useState<IThumbnail | null>(null);
  const [loading, setLoading] = useState(false);

  const [aspectRatio, setAspectRatio] = useState<AspectRatio>("16:9");
  const [colorSchemeId, setColorSchemeId] = useState<string>(
    colorSchemes[0].id,
  );
  const [style, setStyle] = useState<ThumbnailStyle>("Bold & Graphic");

  const [styleDropdownOpen, setStyleDropdownOpen] = useState(false);

  useEffect(() => {
    if (!authLoading && !isLoggedIn) {
      toast.error("Please login to generate thumbnails.");
      navigate("/login");
    }
  }, [authLoading, isLoggedIn, navigate]);

  const handleGenerate = async () => {
    if (!title.trim()) {
      toast.error("Please enter a title or topic.");
      return;
    }

    setLoading(true);
    setThumbnail(null);
    try {
      const { data } = await api.post("/api/thumbnail/generate", {
        title,
        prompt: additionalDetails,
        style,
        aspect_ratio: aspectRatio,
        color_scheme: colorSchemeId,
      });
      if (data.thumbnail) {
        setThumbnail(data.thumbnail);
        toast.success(data.message || "Thumbnail generated successfully!");
      } else {
        toast.error("Failed to generate thumbnail");
      }
    } catch (error: any) {
      console.error(error);
      const errMsg = error.response?.data?.message || "Error generating thumbnail";
      toast.error(errMsg);
      if (error.response?.status === 401) {
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchThumbnail = async () => {
    if (id) {
      setLoading(true);
      try {
        const { data } = await api.get(`/api/user/thumbnails/${id}`);
        if (data) {
          setThumbnail(data);
          setAdditionalDetails(data.prompt_used || data.user_prompt || "");
          setTitle(data.title || "");
          setColorSchemeId(data.color_scheme || colorSchemes[0].id);
          setAspectRatio(data.aspect_ratio || "16:9");
          setStyle(data.style || "Bold & Graphic");
        }
      } catch (error: any) {
        console.error(error);
        toast.error("Failed to load thumbnail details.");
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (id) {
      fetchThumbnail();
    }
  }, [id]);

  return (
    <>
      <SoftBackdrop />
      <div className="pt-24 min-h-screen">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-28 lg:pb-8">
          <div className="grid lg:grid-cols-[400px_1fr] gap-8">
            {/* Left Panel */}
            <div className={`space-y-6 ${id && "pointer-events-none"}`}>
              <div className="p-6 rounded-2xl bg-white/8 border border-white/12 shadow-xl space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-zinc-100 mb-1">
                    Create Your Thumbnail
                  </h2>
                  <p className="text-sm text-zinc-400">
                    Describe your vision and let AI bring it to life
                  </p>
                </div>

                <div className="space-y-5">
                  {/* Title Input */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      Title or Topic
                    </label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      maxLength={100}
                      placeholder="e.g, 10 Tips for  Better Sleep"
                      className="w-full px-4 py-3 rounded-lg border border-white/12 bg-black/20 text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                    <div className="flex justify-end">
                      <span className="text-xs text-zinc-400">
                        {title.length}/100
                      </span>
                    </div>
                  </div>

                  {/*  AspectRatioSelector*/}
                  <AspectRatioSelector
                    value={aspectRatio}
                    onChange={setAspectRatio}
                  />

                  {/* StyleSelector */}
                  <StyleSelector
                    value={style}
                    onChange={setStyle}
                    isOpen={styleDropdownOpen}
                    setIsOpen={setStyleDropdownOpen}
                  />

                  {/* ColorSchemeSelector */}
                  <ColorSchemeSelector
                    value={colorSchemeId}
                    onChange={setColorSchemeId}
                  />

                  {/* Details */}
                  <div className="space-y-2">
                    <label>
                      Additional Prompts{" "}
                      <span className="text-zinc-400 text-xs">(optional)</span>
                    </label>
                    <textarea
                      value={additionalDetails}
                      onChange={(e) => setAdditionalDetails(e.target.value)}
                      rows={4}
                      placeholder="Add any specific elements, mood or style preferences...."
                      className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/6 text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
                    />
                  </div>
                </div>

                {/* Button */}
                {!id && (
                  <button
                    onClick={handleGenerate}
                    className="text-[15px] w-full py-3.5 rounded-xl font-medium bg-linear-to-b from-pink-500 to-pink-600 hover:from-pink-700 disabled:cursor-not-allowed transition-colors"
                  >
                    {loading ? "Generating...." : "Generate Thumbnail"}
                  </button>
                )}
              </div>
            </div>

            {/* Right Panel */}
            <div>
              <div className="p-6 rounded-2xl bg-white/8 border border-white/10 shadow-xl">
                <h2 className="text-lg font-semibold text-zinc-100 mb-4">
                  Preview
                </h2>
                <PreviewPanel
                  thumbnail={thumbnail}
                  isLoading={loading}
                  aspectRatio={aspectRatio}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Generate;
