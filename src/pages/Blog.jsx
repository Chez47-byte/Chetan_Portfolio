import Container from "../components/common/Container";

const dummyPosts = [
  {
    title: "Understanding Rate Limiting in APIs",
    desc: "Learn how to protect your backend from abuse using rate limiting techniques.",
    author: "Chetan Lakade",
    date: "April 2026",
  },
  {
    title: "How JWT Authentication Works",
    desc: "A practical guide to implementing secure authentication using JWT.",
    author: "Chetan Lakade",
    date: "March 2026",
  },
];

const Blog = () => {
  return (
    <section className="py-20 bg-white text-black">
      <Container>

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Blog
            </h1>
            <p className="text-gray-500 max-w-lg">
              Backend concepts, system design insights, and real-world development learnings.
            </p>
          </div>

          {/* 🔥 CREATE BLOG CTA */}
          <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
            Write a Blog
          </button>
        </div>

        {/* BLOG LIST */}
        {dummyPosts.length === 0 ? (
          <div className="text-gray-500 text-sm">
            No posts yet. Be the first to write one.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {dummyPosts.map((post, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition cursor-pointer"
              >
                {/* TITLE */}
                <h2 className="text-xl font-semibold mb-2">
                  {post.title}
                </h2>

                {/* DESC */}
                <p className="text-gray-600 mb-4 text-sm">
                  {post.desc}
                </p>

                {/* META */}
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </Container>
    </section>
  );
};

export default Blog;