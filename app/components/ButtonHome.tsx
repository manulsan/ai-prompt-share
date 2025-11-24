import React from "react";
import { useRouter } from "next/navigation";
import { Home } from "lucide-react";

const ButtonHome: React.FC = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/")} className="btn_v1">
      <Home className="w-4 h-4" />
      Back Home
    </button>
  );
};

export default ButtonHome;
