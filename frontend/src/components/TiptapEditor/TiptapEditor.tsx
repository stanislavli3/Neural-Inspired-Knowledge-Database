import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

// Define your extensions
const extensions = [StarterKit];

const content = `
<p>Hello World!</p>
<p>This is a <strong>bold</strong> example of <em>TipTap</em>.</p>
<p>Feel free to play around with it!</p>
`;

const Tiptap = () => {
  // Initialize the editor
  const editor = useEditor({
    extensions,
    content,
  });

  return (
    <div>
      {/* TipTap Editor */}
      <EditorContent editor={editor} />

      {/* Floating Menu Example */}
      <FloatingMenu editor={editor}>
        <div style={{ background: 'white', border: '1px solid black', padding: '4px' }}>
          Floating Menu
        </div>
      </FloatingMenu>

      {/* Bubble Menu Example */}
      <BubbleMenu editor={editor}>
        <div style={{ background: 'white', border: '1px solid black', padding: '4px' }}>
          Bubble Menu
        </div>
      </BubbleMenu>
    </div>
  );
};

export default Tiptap;
