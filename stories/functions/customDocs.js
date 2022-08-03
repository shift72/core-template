import React from "react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  Story,
  CURRENT_SELECTION,
} from '@storybook/addon-docs';
export const customDocs = (content = `lorem ipsum`) => {
 return ()=>{

    return React.createElement(React.Fragment, null,
        // React.createElement(Title, null),

        // React.createElement(Subtitle, null),
        React.createElement("p", { className: "none", dangerouslySetInnerHTML: {
            __html: content,
          }}),
        // React.createElement(Description, null),

        // React.createElement(Story,{
        //     id: 1
        //   }),

        // React.createElement(ArgsTable, {
        //   story: CURRENT_SELECTION
        // }),
    //   React.createElement(Stories, null)
      )
 }
  }