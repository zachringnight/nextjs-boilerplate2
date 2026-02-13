"use client";

import { useState } from "react";

const CLIPS = [
  { id: "clip-1", label: "Clip 1", url: "https://iqmediacorp.com/ExternalIframeMedia?mediaID=0c851955-e04a-48cb-aabd-9bd803ba90de&isRM=false&rawMediaType=TV&end=true" },
  { id: "clip-2", label: "Clip 2", url: "https://iqmediacorp.com/ExternalIframeMedia?mediaID=41820d49-dcfe-422b-9a82-e08e246e8eca&isRM=false&rawMediaType=TV&end=true" },
  { id: "clip-3", label: "Clip 3", url: "https://iqmediacorp.com/ExternalIframeMedia?mediaID=45739d48-11bf-47b8-a18e-0f3849a6c06c&isRM=false&rawMediaType=TV&end=true" },
  { id: "clip-4", label: "Clip 4", url: "https://iqmediacorp.com/ExternalIframeMedia?mediaID=1ecbc356-4c24-4ed8-8f1d-d9d0cb08841c&isRM=false&rawMediaType=TV&end=true" },
  { id: "clip-5", label: "Clip 5", url: "https://iqmediacorp.com/ExternalIframeMedia?mediaID=de0362e6-6e0c-4aa7-978d-bc918370190c&isRM=false&rawMediaType=TV&end=true" },
  { id: "clip-6", label: "Clip 6", url: "https://iqmediacorp.com/ExternalIframeMedia?mediaID=cf37449b-1474-467c-b839-b9a3edff9681&isRM=false&rawMediaType=TV&end=true" },
  { id: "clip-7", label: "Clip 7", url: "https://iqmediacorp.com/ExternalIframeMedia?mediaID=44e7993e-8d91-4fe0-a411-bae915482e6b&isRM=false&rawMediaType=TV&end=true" },
  { id: "clip-8", label: "Clip 8", url: "https://iqmediacorp.com/ExternalIframeMedia?mediaID=b32641b2-bb06-4dc0-8a36-450c88b06ba6&isRM=false&rawMediaType=TV&end=true" },
  { id: "clip-9", label: "Clip 9", url: "https://iqmediacorp.com/ExternalIframeMedia?mediaID=b32641b2-bb06-4dc0-8a36-450c88b06ba6&isRM=false&rawMediaType=TV&end=true" },
  { id: "clip-10", label: "Clip 10", url: "https://iqmediacorp.com/ExternalIframeMedia?mediaID=287dfd0a-5f1b-4682-ace7-96b83b97809c&isRM=false&rawMediaType=TV&end=true" },
  { id: "clip-11", label: "Clip 11", url: "https://iqmediacorp.com/ExternalIframeMedia?mediaID=53c442aa-bc3a-48fa-bd16-95c8b0446929&isRM=false&rawMediaType=TV&end=true" },
  { id: "clip-12", label: "Clip 12", url: "https://iqmediacorp.com/ExternalIframeMedia?mediaID=1e226e83-7df7-4c1f-a7e0-03630400b50a&isRM=false&rawMediaType=TV&end=true" },
  { id: "clip-13", label: "Clip 13", url: "https://iqmediacorp.com/ExternalIframeMedia?mediaID=0ca38296-6dfc-45ff-a28f-22dac9689389&isRM=false&rawMediaType=TV&end=true" },
  { id: "clip-14", label: "Clip 14", url: "https://iqmediacorp.com/ExternalIframeMedia?mediaID=9f051c63-37e3-4160-987a-32fee7e04447&isRM=false&rawMediaType=TV&end=true" },
];

type Clip = typeof CLIPS[number];

export default function MediaRecap() {
  const [activeClip, setActiveClip] = useState<Clip | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const eventTitle = "Senior Bowl";
  const eventSubtitle = "Earned Media Recap";
  const eventDate = "February 1, 2026";
  const totalClips = CLIPS.length;

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "#f5f5f5", fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
      {/* Header */}
      <header style={{
        borderBottom: "1px solid #222",
        padding: "32px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "16px"
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "4px" }}>
            <span style={{
              background: "#0055BF",
              color: "#fff",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              padding: "4px 10px",
              borderRadius: "3px"
            }}>PANINI AMERICA</span>
            <span style={{ color: "#666", fontSize: "13px" }}>{eventDate}</span>
          </div>
          <h1 style={{ fontSize: "28px", fontWeight: 700, margin: "8px 0 0 0", letterSpacing: "-0.5px" }}>
            {eventTitle}
          </h1>
          <p style={{ fontSize: "15px", color: "#999", margin: "4px 0 0 0" }}>
            {eventSubtitle} · {totalClips} Segments
          </p>
        </div>

        <div style={{ display: "flex", gap: "8px" }}>
          <button
            onClick={() => setViewMode("grid")}
            style={{
              background: viewMode === "grid" ? "#222" : "transparent",
              color: viewMode === "grid" ? "#fff" : "#666",
              border: "1px solid #333",
              borderRadius: "6px",
              padding: "8px 16px",
              fontSize: "13px",
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.15s ease"
            }}
          >Grid</button>
          <button
            onClick={() => setViewMode("list")}
            style={{
              background: viewMode === "list" ? "#222" : "transparent",
              color: viewMode === "list" ? "#fff" : "#666",
              border: "1px solid #333",
              borderRadius: "6px",
              padding: "8px 16px",
              fontSize: "13px",
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.15s ease"
            }}
          >List</button>
        </div>
      </header>

      {/* Featured / Active Clip */}
      {activeClip && (
        <div style={{
          padding: "32px 40px 0",
          animation: "fadeIn 0.3s ease"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "16px"
          }}>
            <h2 style={{ fontSize: "16px", fontWeight: 600, margin: 0 }}>
              Now Viewing: {activeClip.label}
            </h2>
            <button
              onClick={() => setActiveClip(null)}
              style={{
                background: "transparent",
                color: "#999",
                border: "1px solid #333",
                borderRadius: "6px",
                padding: "6px 14px",
                fontSize: "12px",
                cursor: "pointer"
              }}
            >Close</button>
          </div>
          <div style={{
            position: "relative",
            width: "100%",
            maxWidth: "960px",
            paddingBottom: "min(540px, 50%)",
            background: "#111",
            borderRadius: "8px",
            overflow: "hidden",
            border: "1px solid #222"
          }}>
            <iframe
              src={activeClip.url}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none"
              }}
              allowFullScreen
              title={activeClip.label}
            />
          </div>
        </div>
      )}

      {/* Clip Grid / List */}
      <main style={{ padding: "32px 40px 60px" }}>
        {viewMode === "grid" ? (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "20px"
          }}>
            {CLIPS.map((clip, i) => (
              <div
                key={clip.id}
                style={{
                  background: "#111",
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: activeClip?.id === clip.id ? "1px solid #0055BF" : "1px solid #1a1a1a",
                  transition: "border-color 0.2s ease, transform 0.2s ease",
                  cursor: "pointer"
                }}
                onClick={() => setActiveClip(clip)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#333";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = activeClip?.id === clip.id ? "#0055BF" : "#1a1a1a";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "56.25%",
                  background: "#0a0a0a"
                }}>
                  <iframe
                    src={clip.url}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                      pointerEvents: activeClip?.id === clip.id ? "auto" : "none"
                    }}
                    allowFullScreen
                    title={clip.label}
                    loading="lazy"
                  />
                  {activeClip?.id !== clip.id && (
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(0,0,0,0.3)",
                      transition: "background 0.2s ease"
                    }}>
                      <div style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        background: "rgba(0, 85, 191, 0.9)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <div style={{
                  padding: "14px 16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}>
                  <div>
                    <p style={{ fontSize: "14px", fontWeight: 600, margin: 0 }}>{clip.label}</p>
                    <p style={{ fontSize: "12px", color: "#666", margin: "2px 0 0" }}>Segment {i + 1} of {totalClips}</p>
                  </div>
                  <span style={{
                    background: "#1a1a1a",
                    color: "#999",
                    fontSize: "11px",
                    fontWeight: 600,
                    padding: "4px 8px",
                    borderRadius: "4px",
                    letterSpacing: "0.5px"
                  }}>TV</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {CLIPS.map((clip, i) => (
              <div
                key={clip.id}
                onClick={() => setActiveClip(clip)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "14px 16px",
                  background: activeClip?.id === clip.id ? "#111" : "transparent",
                  borderRadius: "8px",
                  border: activeClip?.id === clip.id ? "1px solid #0055BF" : "1px solid transparent",
                  cursor: "pointer",
                  transition: "all 0.15s ease"
                }}
                onMouseEnter={(e) => {
                  if (activeClip?.id !== clip.id) e.currentTarget.style.background = "#111";
                }}
                onMouseLeave={(e) => {
                  if (activeClip?.id !== clip.id) e.currentTarget.style.background = "transparent";
                }}
              >
                <span style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#444",
                  minWidth: "28px",
                  textAlign: "right",
                  fontVariantNumeric: "tabular-nums"
                }}>{String(i + 1).padStart(2, "0")}</span>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: "14px", fontWeight: 600, margin: 0 }}>{clip.label}</p>
                </div>
                <span style={{
                  background: "#1a1a1a",
                  color: "#999",
                  fontSize: "11px",
                  fontWeight: 600,
                  padding: "4px 8px",
                  borderRadius: "4px"
                }}>TV</span>
                <span style={{ color: "#0055BF", fontSize: "13px", fontWeight: 500 }}>View →</span>
              </div>
            ))}
          </div>
        )}
      </main>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
