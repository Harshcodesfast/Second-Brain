import { useParams } from "react-router-dom";
import { Card } from "../components/card";
import { useSrcontent } from "../hooks/useSrcontent";
import { useEffect } from "react";

export function Share() {
  const { id } = useParams();
  const { contents, refresh } = useSrcontent(id);
  useEffect(() => {
    refresh();
  }, []);
  return (
    <div className="p-6 bg-gray-100 h-screen max-h w-screen ">
      <div className="flex p-4 gap-4 flex-wrap ">
        {contents.map(({ title, link, type }) => (
          <Card title={title} type={type} link={link} dis={true} />
        ))}
      </div>
    </div>
  );
}
