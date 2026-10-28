import { getStore } from "@netlify/blobs";

export default async (req, context) => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    });
  }

  const store = getStore("dapi-stars");

  if (req.method === "POST") {
    try {
      const data = await req.json();
      let existing = {};
      try {
        existing = (await store.get("student_stars", { type: "json" })) || {};
      } catch (e) {}

      const stars = {
        yu: data.yu !== undefined ? Math.max(0, parseInt(data.yu, 10) || 0) : (existing.yu || 0),
        he: data.he !== undefined ? Math.max(0, parseInt(data.he, 10) || 0) : (existing.he || 0),
        jia: data.jia !== undefined ? Math.max(0, parseInt(data.jia, 10) || 0) : (existing.jia || 0),
        jun: data.jun !== undefined ? Math.max(0, parseInt(data.jun, 10) || 0) : (existing.jun || 0),
        completedCourses: data.completedCourses !== undefined ? (typeof data.completedCourses === "object" ? data.completedCourses : {}) : (existing.completedCourses || {}),
        updatedAt: Date.now()
      };
      await store.setJSON("student_stars", stars);
      return new Response(JSON.stringify(stars), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "no-store, no-cache, must-revalidate"
        }
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }
  }

  // GET
  try {
    let stars = await store.get("student_stars", { type: "json" });
    if (!stars || typeof stars !== "object") {
      stars = { yu: 0, he: 0, jia: 0, jun: 0, completedCourses: {}, updatedAt: Date.now() };
    }
    if (!stars.completedCourses || typeof stars.completedCourses !== "object") {
      stars.completedCourses = {};
    }
    return new Response(JSON.stringify(stars), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-store, no-cache, must-revalidate"
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ yu: 0, he: 0, jia: 0, jun: 0, completedCourses: {}, error: err.message }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
};

export const config = {
  path: "/api/stars"
};
