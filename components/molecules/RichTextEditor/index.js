/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';
import Editor from 'draft-js-plugins-editor';
import { EditorState } from 'draft-js';
import createInlineToolbarPlugin, { Separator } from 'draft-js-inline-toolbar-plugin';
import { stateToHTML } from 'draft-js-export-html';
import { stateFromHTML } from 'draft-js-import-html';

import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
} from 'draft-js-buttons';
import HeadlinesButton from './HeadlinesButton';
import { useEditorStyles } from './style';
// import { EditorContainer } from './style';

const inlineToolbarPlugin = createInlineToolbarPlugin();

const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin];

const RichTextEditor = ({ value, onChange }) => {
  let editor = React.useRef(null);
  const editorStyles = useEditorStyles();

  const [editorState, setEditorState] = React.useState(EditorState.createEmpty());
  React.useEffect(() => {
    // if (value && !editorState.getCurrentContent().hasText()) {
    if (value && stateToHTML(editorState.getCurrentContent()) !== value) {
      const newContentState = stateFromHTML(value);
      const newEditorState = EditorState.createWithContent(newContentState);
      setEditorState(newEditorState);
    }
  }, [value]);

  const onChangeHandler = (newEditorState) => {
    setEditorState(newEditorState);
    onChange(stateToHTML(newEditorState.getCurrentContent()));
  };

  const focus = () => {
    editor.focus();
  };

  //   console.log('EditorState', editorState);

  return (
    <div className={editorStyles.EditorContainer} onClick={focus}>
      <Editor
        editorState={editorState}
        onChange={onChangeHandler}
        plugins={plugins}
        ref={(element) => {
          editor = element;
        }}
      />
      <InlineToolbar>
        {(externalProps) => (
          <>
            <BoldButton {...externalProps} />
            <ItalicButton {...externalProps} />
            <UnderlineButton {...externalProps} />
            <CodeButton {...externalProps} />
            <Separator {...externalProps} />
            <HeadlinesButton {...externalProps} />
            <UnorderedListButton {...externalProps} />
            <OrderedListButton {...externalProps} />
            <BlockquoteButton {...externalProps} />
            <CodeBlockButton {...externalProps} />
          </>
        )}
      </InlineToolbar>
    </div>
  );
};

RichTextEditor.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
RichTextEditor.defaultProps = {
  value: '',
  onChange: () => {},
};

export default RichTextEditor;
