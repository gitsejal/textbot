import React ,{ useState } from 'react'
import jsPDF from 'jspdf';


export default function Textform() {
  const [text, setText] = useState(``);
  // setText(`Hii i am best at dsa`)
  const handleUpClick = ()=>{
    let uptext=text.toUpperCase()
    setText(uptext)
  }
  const handledownClick = ()=>{
    let downtext = text.toLowerCase()
    setText(downtext)
  }
  const Clearbtn = ()=>{
    let cleartext = " ";
    setText(cleartext)
  }
  const handleOnChange =(event) => {
    setText(event.target.value);
    // Countletter()
    // localStorage.setItem('text', event.target.value);
  }
//   window.addEventListener("beforeunload", (ev) => {
//     localStorage.clear();
// });
  // const handlesearch =() => {
  //   var inputVal = document.getElementById("myInput").value;
  //   let res= text.match(/inputVal/i);
  //   console.log(res)
  // }
  // const Countletter = ()=>{
  //   let l = text.length 
  //   document.getElementById('Letters').innerHTML="Letter Count : "+ l
  //   // <p className='mx-1'>Letters Count : {text.length}</p>
  // }
  const handleDownload = () => {
    const Dtext = text;
    const data = new Blob([Dtext], { type: 'text/plain' });
    const file = new File([data], 'Your-Text.txt', { type: 'text/plain' });
    const fileURL = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = fileURL;
    link.download = 'Your-Text.txt';
    link.click();
}
const handlePdfDownload = () => {
  const pdf = new jsPDF();
  pdf.text(text, 10, 10);
  pdf.save('Your-Text.pdf');
}


  return (
    <>
    <div className="container mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter your text</label>
  <textarea className="form-control form-control-sm" onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
  <div className="btn-group" role="group" aria-label="Basic example">
  <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
  <button type="button" className="btn btn-primary mx-1" onClick={handledownClick}>Convert to Lowercase</button>
  <button type="button" className="btn btn-primary mx-1" onClick={handleDownload}>Download txt</button>
  <button type="button" className="btn btn-primary mx-1" onClick={handlePdfDownload}>Download Pdf</button>
  {/* <input type="text" placeholder="Type something..." id="myInput"></input>
  <button type="input" className="btn btn-primary mx-1" onClick={handlesearch}>Search a Word</button> */}
  {/* <button type="button" className="btn btn-primary mx-1" onClick={Countletter}>Count letters</button> */}
  {/* <button type="button" className="btn btn-primary mx-1" onClick={}>Calculate Reading Time</button> */}
</div>
    
</div>
<div className='container'>
<p className='letterC' id='Letters'></p> 
<p className='mx-1'>Word Count : {text.split(" ").length}</p>
<p className='mx-1'>Average Reading Time : {.008* text.split(" ").length}</p>

</div>


    <div className='container '>
    <div className="card w-95 mb-3">
  <div className="card-body">
    <h5 className="card-title">Preview</h5>
    <p className="card-text">{text}</p>
    <a href="#" className="btn btn-primary" onClick={Clearbtn} >Clear</a>
  </div>
</div>
</div>

    
    </>
  )
}
