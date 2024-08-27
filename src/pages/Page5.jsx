import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const HtmlEditorWithIntelliSense = () => {
  const [html, setHtml] = useState('');

  const handleEditorChange = (value) => {
    setHtml(value);
  };

  return (
    <div>
        <h1 style={{textAlign: 'center'}}>HTML Editor</h1>
        <div style={{ display: 'flex', padding: '10px', width: "90%", flexDirection: 'column', gap: '10px', alignItems: "center", margin: "0 auto", borderRadius: "20px" }}>
          <div style={{ border: '2px solid #000', width: "100%"}}>
              <Editor
                width={'98%'}
                height="300px"
                minHeight="100px"
        
                defaultLanguage="html"
                defaultValue="<!-- Write your HTML here -->"
                value={html}
                onChange={handleEditorChange}
                options={{
                  minimap: { enabled: false },
                  wordWrap: 'on',
                  automaticLayout: true,
                }}
              />
          </div>
          <div style={{ margin: "0 auto", width: "98%", border: '2px solid #000', padding: '10px' }}>
            <iframe
              title="html-output"
              style={{ width: '90%', height: '300px', border: 'none' }}
              srcDoc={html}
            />
          </div>
        </div>
   </div>
  );
};

export default HtmlEditorWithIntelliSense;
