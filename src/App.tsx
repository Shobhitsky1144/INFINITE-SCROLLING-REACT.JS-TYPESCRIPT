import { FC, useEffect, useState } from "react";
import './styles.css'
import Card from "./components/Card";
import { ListType } from "./datatypes";


const App: FC = () => {
const [cards, setCards] = useState<ListType[]>([])
const [page, setPage] = useState<number>(1)


useEffect(() => {
  const fetchData=async()=>{
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`);
    const data=await res.json();
 
 setCards((prev)=>[...prev,...data])
   }
fetchData()
  
}, [page])

const handleScroll=()=>{
  // document.documentElement.scrollHeight --->> total height of the entire document
  // window.innerHeight-----> height of the current browser window
// document.documentElement.scrollTop --->>> specifically how much the user has scrolled vertically.
if(window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight){
      setPage((prev)=>prev+1)
}
}

useEffect(() => {
  
 window.addEventListener("scroll",handleScroll)
 return()=>window.removeEventListener("scroll",handleScroll)
 // --> avoid any potential memory leaks,This is especially crucial in applications
  // where components are frequently mounted and unmounted
    
  }, [])



  return (
     <>
<Card list={cards}/>
 
  </>);
};

export default App;
