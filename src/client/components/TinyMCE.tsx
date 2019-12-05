// import React from 'react';
// import { Editor } from '@tinymce/tinymce-react';

// export interface TinyMCEProps<content: string> {}

// class TinyMCE extends React.Component {
//     handleEditorChange = (e: any) => {
//         console.log('Content was updated:', e.target.getContent());
//     }

//     render() {
//         return (
//             <Editor
//                 apiKey='6zjx9k2kve59xrax5s11zbhzutae2s757qh81ow46whorwtr'
//                 initialValue="<p>Type here</p>"
//                 init={{
//                     height: 500,
//                     menubar: false,
//                     //   plugins: [
//                     //     'advlist autolink lists link image charmap print preview anchor',
//                     //     'searchreplace visualblocks code fullscreen',
//                     //     'insertdatetime media table paste code help wordcount'
//                     //   ],
//                     toolbar:
//                         'undo redo | formatselect | bold italic backcolor | \
//             alignleft aligncenter alignright alignjustify | \
//             bullist numlist outdent indent | removeformat | help'
//                 }}
//                 onChange={this.handleEditorChange}
//                 value={content}
//             />
//         );
//     }
// }

// export default TinyMCE;
