import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/ChatBox";
import MyChats from "../components/Mychats";
import UserSideDrawer from "../components/miscellaneous/UserSideDrawer";
import { ChatState } from "../Context/ChatProvider";
import React, { useEffect} from "react";
import { useHistory } from "react-router-dom";

const UserChatpage = () => {
    const history = useHistory();
    const { setUser,user } = ChatState();
    useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!userInfo) history.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);
  const [fetchAgain, setFetchAgain] = useState(false);


  return (
    <div style={{ width: "100%" }}>
      {user && <UserSideDrawer />}
      <Box display={"flex"} justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default UserChatpage;