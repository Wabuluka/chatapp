import React from "react";
import { useAuthStore } from "../store/useAuthStore";

function ChatPage() {
  const { logout } = useAuthStore();

  return (
    <div className="text-white">
      <button onSubmit={logout} className="btn">
        Sign Out
      </button>
    </div>
  );
}

export default ChatPage;
