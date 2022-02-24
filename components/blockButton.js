import { Button } from "./comp.js";
import { Editor, Transforms, createEditor } from "slate";
import { Editable, withReact, useSlate, Slate } from "slate-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Home.module.css";

const BlockButton = ({ format, icon }) => {
  const editor = useSlate();

  return (
    <Button
      active={isBlockActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      <div>
        <FontAwesomeIcon className={styles.navicon} icon={icon} />
      </div>
    </Button>
  );
};
const LIST_TYPES = ["numbered-list", "bulleted-list"];

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) => LIST_TYPES.includes(n.type),
    split: true,
  });

  Transforms.setNodes(editor, {
    type: isActive ? "paragraph" : isList ? "list-item" : format,
  });

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => n.type === format,
  });

  return !!match;
};

export default BlockButton;
