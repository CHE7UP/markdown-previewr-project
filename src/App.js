import {useState} from 'react'
import './App.scss';
import { marked } from 'marked';  



//a header (H1 size),
// a sub header (H2 size), 
//a link, 
//inline code, 
//a code block, 
//a list item, 
//a blockquote, 
//an image, 
//bolded text


function App() {
const[text,setText]=useState(`

# Welcome!
## This is a
[FCC Markdown Project](https://www.freecodecamp.org/)
\`<div>made with</div>\`
\`\`\`
marked.setOptions({
  breaks: true
})
\`\`\`
- in react
- with marked

> below logo is

![image](logo192.png)
 
**from React**`);


marked.setOptions({
  breaks: true
})



  return (
    <div className="App">
      <div class="main"> 
        <div class="left">
        <h2 class="headings">MarkDown Editor</h2>
        <textarea  rows="20" cols="50" id="editor" onChange={(event)=>{setText(event.target.value)}} value = {text} ></textarea>
      </div>
      <div class="right">
        <h2 class="headings">MarkDown Preview</h2>
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(text)}}  ></div>
      </div>
      </div>
    </div>
  );
}

export default App;