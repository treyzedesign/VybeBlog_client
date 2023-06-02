import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SharedLayout from './Components/SharedLayout';
import Home from './Pages/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import axios from 'axios'
import Blog from './Pages/Blog';
function App() {
  const [TopNews, setTopnews] = useState([])
  const [headlines, setHeadlines] = useState('')
  const [blogItem, setBlogItem] = useState()
  const [pagesize, setPagesize] = useState(10)
  const [sortvalue, setSortValue] = useState()
  const [pageNum, setPageNum] = useState(1)
  const navigate = useNavigate()
  const allNewsUrl = '113b7818dddb4f6fb72b842c027813dc'
  const apiKey = "AIzaSyArZCkxHEfraw7luEW7DphD_KB1DN7rSis"
  const todayDate = new Date()
  // Before subtracting 1 day
  const currentdate = todayDate.toISOString().slice(0,10)
  // Subtract one day to the current date
  todayDate.setDate(todayDate.getDate() - 1)
  // After removing 1 day
  const prevDate = todayDate.toISOString().slice(0,10)
  console.log(currentdate);
  console.log(prevDate);
  const fetchAllNews = async()=>{
    await axios.get(`https://newsapi.org/v2/everything?q=*&from=${prevDate}&to=${currentdate}&sortBy=${sortvalue}&pageSize=${pagesize}&page=${pageNum}&apiKey=113b7818dddb4f6fb72b842c027813dc`).then((feedback)=>{
      console.log(feedback.data.articles);
      setTopnews(feedback.data.articles)
    }).catch((err)=>{
      console.log(err);
    })
  }
  const selectPageHandlerinc= (page)=>{
    setPageNum(page)
    // fetchAllNews()
    window.location.reload(); 

  }
  const selectPageHandlerdec= (page)=>{
    setPageNum(page)
    // fetchAllNews
    window.location.reload(); 
  }
  const sortHandler = (sort)=>{
    setSortValue(sort)
    window.location.reload(); 
  }
  const AccessBlog = (item)=>{
    window.location.replace(item.url)
  }
  useEffect(()=>{
    fetchAllNews()
    // return ()=>{}
  },[])
  return (
    <div className="App">
      <ChakraProvider>
        <Routes>
          <Route path='/' element={<SharedLayout></SharedLayout>}>
            <Route index element={<Home 
            Topnews={TopNews} 
            pageNum={pageNum} 
            selectPageHandlerinc={selectPageHandlerinc}
            selectPageHandlerdec={selectPageHandlerdec}
            sortHandler={sortHandler}
            AccessBlog={AccessBlog}
            />}/>
          <Route path='blog/:id/:title' element={<Blog blogItem={blogItem} headlines={headlines}/>}/>
          </Route>
        </Routes>
      </ChakraProvider>
    </div>
  );
}

export default App;
