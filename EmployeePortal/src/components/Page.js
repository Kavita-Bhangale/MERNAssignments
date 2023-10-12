import React from "react";
import { PageContent } from "./PageContent";

const Page = (props) => <PageContent onClick = {props.onClick}/>

export const MemoizedPage = React.memo(Page);