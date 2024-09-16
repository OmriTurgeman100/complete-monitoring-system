import { useParams } from "react-router-dom";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const PostReports = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    console.log("testing ");
  }, []);

  const handle_submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch("http://localhost/api/nodes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        description: description,
        parent: id,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      // * redirect user to the main page after he posted the data.
      navigate(-1);
    }

    console.log(data);
  };

  return (
    <form onSubmit={handle_submit} className="post-reports-form">
      <label> title </label>
      <input onChange={(e) => setTitle(e.target.value)} value={title} />
      <label> description </label>
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button type="submit">submit</button>
    </form>
  );
};
