import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  /* useEffect(() => {
    console.log(searchParams.get("name"));
  }, [searchParams]); */

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error...</p>;

  const handleChange = (e) => {
    let filter = e.target.value;

    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }

    console.log(e.target.value);
    console.log("changing");
  };

  return (
    <>
      <h1>Inicio</h1>
      <input
        type="text"
        name=""
        onChange={handleChange}
        className="form-control"
        value={searchParams.get("filter") || ""}
      />
      <ul className="list-group mt-3">
        {data
          .filter((item) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = item.title.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((item) => (
            <Link
              to={`/blog/${item.id}`}
              key={item.id}
              className="list-group-item"
            >
              {item.title}
            </Link>
          ))}
      </ul>
    </>
  );
};

export default Blog;
