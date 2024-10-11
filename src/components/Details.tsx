import { useEffect, useState } from "react";

interface DetailsProps {
  id: number;
}

interface IData {
  id: number;
  name: string;
  avatar: string;
  details: {
    city: string;
    company: string;
    position: string;
  };
}

function Details(props: DetailsProps) {
  const id = props.id;

  const [data, setData] = useState<IData | null>(null);

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    fetch(import.meta.env.VITE_URL_ID + id + ".json")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
    return setData(null);
  }, [id]);

  return (
    <div className="details">
      {loading && <p>Loading...</p>}
      {data && (
        <div>
          <img className="avatar" src={data.avatar} />
          {Object.keys(data.details).map((key) => (
            <div key={key} className="detail">
              <span className="key">{key}</span> : {data.details[key]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Details;
