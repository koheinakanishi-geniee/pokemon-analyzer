const isProd:Boolean = process.env.NODE_ENV === "production"
const config = {
        // Will be available on both server and client
        NEXT_PUBLIC_API_URL: isProd ? "https://backendapi-tehkyjjjba-an.a.run.app/": "http://backend:8080",
};
export {config}
