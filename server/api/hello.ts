export default defineEventHandler((event) => {
  console.log(event);
  console.log("Hello from routes folder");
  return {
    api: "works",
  };
});
