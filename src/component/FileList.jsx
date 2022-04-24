import React from "react";

export default function FileList(props) {
  return <div className="list-drag-drop-component">
    <table cellPadding="10">
      <tbody>
        {props.fileList.map((file, indx) => {
          return <tr key={indx}>
            <td>{file.name}</td>
            <td
              className="list-drag-drop-component-element"
              onClick={() => {
                let fileList = props.fileList;
                fileList.splice(indx, 1);
                props.updateList(fileList);
              }}
              style={{ marginLeft: "5px" }}
            >{"X"}</td>
            <td
              className="list-drag-drop-component-element"
            >{"✓"}</td>
          </tr>
        })}
      </tbody>
    </table>
  </div>;
}