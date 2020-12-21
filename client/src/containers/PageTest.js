import React from "react";
import styled from "styled-components";
import { AccountTag } from "../components/accountTag/index";
import { ManageUser } from "../components/manageUsernamePassword/index";


export const PageTest = () => {
    return(
      <>
          <AccountTag></AccountTag>
          <ManageUser></ManageUser>
      </>
    );
};
