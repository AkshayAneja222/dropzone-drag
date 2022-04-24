import React, { Component } from "react";
import FileList from "./component/FileList";

export default class DragAndDropZone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFileList: []
    };
  }

  handleDragged = (draggedFileEvent) => {
    draggedFileEvent.preventDefault();
    let { selectedFileList } = this.state;

    let files = draggedFileEvent.dataTransfer.files;
    selectedFileList.push(...files);

    this.setState({ selectedFileList });
  }

  selectedFile = (selectedFileEvent) => {
    selectedFileEvent.preventDefault();
    let { selectedFileList } = this.state;

    let files = selectedFileEvent.target.files;
    selectedFileList.push(...files);

    this.setState({ selectedFileList });
  }

  updateFileList = (files) => {
    this.setState({ selectedFileList: files });
  }

  render() {
    let { selectedFileList } = this.state;

    return <div className={"select-drag-drop-container"}>
      <div
        className={"select-drag-drop-component"}
        onClick={() => {
          document.getElementById("input-drag-drop-component").click();
        }}
        onDrop={this.handleDragged}
        onDragOver={(e) => { e.preventDefault() }}
      >
        <div>Drag &amp; Drop to Upload File</div>
        <div>&#128193;</div>
        <div >Browse File</div>
      </div>
      <input
        id="input-drag-drop-component"
        type="file"
        multiple
        onChange={this.selectedFile}
        hidden
      />
      {selectedFileList && selectedFileList.length > 0 && <FileList
        fileList={selectedFileList}
        updateList={this.updateFileList}
      />}
    </div>;
  }
}