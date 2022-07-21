import React from "react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
export const customDocs = (content = `lorem ipsum`) => {
 return ()=>{
    return React.createElement(React.Fragment, null,
        // React.createElement(Title, null),

        React.createElement(Subtitle, null),
        React.createElement("div", { className: "alert alert-primary", dangerouslySetInnerHTML: {
            __html: content,
          }}),
        React.createElement(Description, null),
        React.createElement(Primary, null),

        React.createElement(ArgsTable, {
        story: PRIMARY_STORY
      }),
    //   React.createElement(Stories, null)
      )
 }
  }