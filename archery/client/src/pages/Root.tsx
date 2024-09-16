import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

type root_nodes_structure = {
  _id: string;
  title: string;
  description: string;
  status: string;
};

type api_response = {
  nodes: root_nodes_structure[];
};

export const Root = () => {
  const [nodes, setNodes] = useState<root_nodes_structure[]>([]);

  const fetch_root_nodes = async () => {
    const response = await fetch("http://localhost/api/nodes");

    const data: api_response = await response.json();

    if (response.ok) {
      setNodes(data.nodes);
    }
  };
  // * fetch nodes once when page is up
  useEffect(() => {
    console.log("test");
    fetch_root_nodes();
    console.log(nodes);
  }, []); //TODO make it fetch each couple of seconds, later we will use web sockets.

  return (
    <div className="grid-root-nodes-container">
      {nodes.map((item) => (
        <Link to={item._id} key={item._id}>
          <div className="single-root-node">
            <h2>{item.title}</h2>
            <p>{item.status}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
