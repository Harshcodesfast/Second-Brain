import { Button } from "../components/button";
import { PlusIcon } from "../icons/plusIcon";
import { ShareIcon } from "../icons/share";
import { Card } from "../components/card";
import { CreateContentModal } from "../components/contentModal";
import { useEffect, useState } from "react";
import { Sidebar } from "../components/sidebar";
import { useContent } from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URL, FRONTEND_URL } from "../config";

export function Dashboard() {
  const [modalOpen, setmodelOpen] = useState(false);
  const { contents, refresh } = useContent();

  useEffect(() => {
    refresh();
  }, [modalOpen]);

  return (
    <div className="">
      <Sidebar />
      <div className="ml-72 min-h-screen bg-gray-100 border">
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setmodelOpen(false);
          }}
        />
        <div className="flex justify-between gap-4 pt-4 pr-4 pb-4">
          <div className="pl-6 pt-2 font-bold text-lg">All Notes</div>
          <div className="flex gap-4 ">
            <Button
              onClick={async () => {
                const response = await axios.post(
                  `${BACKEND_URL}/api/v1/brain/share`,
                  {
                    share: true,
                  },
                  {
                    headers: {
                      Authorization: localStorage.getItem("token"),
                    },
                  }
                );
                const shareUrl = `${FRONTEND_URL}/share/${response.data.hash}`;
                navigator.clipboard.writeText(`${shareUrl}`);
              }}
              variant="primary"
              text="share Brain"
              startIcon={<ShareIcon />}
            />
            <Button
              onClick={() => {
                setmodelOpen(true);
              }}
              variant="secondary"
              text="Add content"
              startIcon={<PlusIcon />}
            />
          </div>
        </div>
        <div className="flex pl-2 gap-4 flex-wrap">
          {contents.map(({ title, link, type, _id }) => (
            <Card
              title={title}
              type={type}
              link={link}
              id={_id}
              refresh={refresh}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
