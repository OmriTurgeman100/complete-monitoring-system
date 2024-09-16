import { useParams, useNavigate, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

type node_structure = {
  _id: string;
  title: string;
  description: string;
  status: string;
};

type api_response = {
  data: node_structure[];
};

export const SelectedNode = () => {
  const [nodes, setNodes] = useState<node_structure[]>([]);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const get_specific_node = async () => {
    const response = await fetch(`http://localhost/api/nodes/${id}`);

    const data: api_response = await response.json();

    if (response.ok) {
      console.log("response is ok");
      setNodes(data.data);
    }

    if (!response.ok) {
      console.log("response is  not ok");
      setError(true);
    }
  };

  useEffect(() => {
    console.log("hey from page");
    get_specific_node();
  }, [id]);

  if (error === true) {
    return <Navigate to="/unexpected_error" />;
  }

  const handle_button = () => {
    console.log("button clicked");
    console.log(id);
    navigate(`/post_reports/${id}`); // Use navigate function
  };

  return (
    <div>
      <div className="grid-root-nodes-container">
        {nodes.map((item) => (
          <Link to={`/${item._id}`} key={item._id}>
            <div className="single-root-node">
              <h2>{item.title}</h2>
              <p>{item.status}</p>
            </div>
          </Link>
        ))}
      </div>
      <button className="add-reports" onClick={handle_button}>
        +
      </button>
    </div>
  );
};
