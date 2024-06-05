import { useEffect, useState } from "react";
import * as Vsc from "react-icons/vsc";

function App() {

  const [showBtn, setShowBtn] = useState(false);

 useEffect(() => {
  document.querySelector('.App').addEventListener('scroll',(e)=>{
    if(e.target.scrollTop > (window.innerHeight / 2)){
      setShowBtn(true)
    }else{
      setShowBtn(false)
    }
  })
 }, []);

 const ScrollTop=()=>{
    document.querySelector('.App').scroll({top:0,behavior:"smooth"})
 }

  return (
    <div className="App vh-100 text-white position-relative overflow-y-auto">
      <section className="section-1 vh-100 bg-dark d-flex align-items-center justify-content-center">
        <h5 className="text-center">Section 1</h5>
      </section>
      <section className="section-2 vh-100 bg-success d-flex align-items-center justify-content-center">
        <h5 className="text-center">Section 2</h5>
      </section>
      <section className="section-3 vh-100 bg-primary d-flex align-items-center justify-content-center">
        <h5 className="text-center">Section 3</h5>
      </section>
      <section className="section-4 vh-100 bg-danger d-flex align-items-center justify-content-center">
        <h5 className="text-center">Section 4</h5>
      </section>

      <button className={`btn btn-go-top border border-1 border-dark-subtle position-fixed ${showBtn?'active':''}`} onClick={ScrollTop}>
        <Vsc.VscChevronUp size={22} />
      </button>

      <div className="footer text-center py-3 text-dark">
        <small> طراحی شده توسط <a href="https://hamidkamyab.ir/" target="_blank" className="text-muted">حمید کامیاب</a></small>
      </div>
    </div>
  );
}

export default App;
