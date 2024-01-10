import { useState } from "react";
import "./App.css";
import Blog from "./components/Blog";
// import Welcome from "./components/Welcome";
// import Clock from "./components/Clock";
// import Form from "./components/Form";
import LoginControl from "./components/LoginControl";
import Search from "./components/Search";
import List from "./components/List";
import WelcomeDialogue from "./components/WelcomeDialogue";

function App() {
  const [flag, setFlag] = useState(false);
  const [searchTerm, setSearchTerm] = useState();
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const userInfo = {
    firstName: "Omer",
    lastName: "Landau",
  };

  const posts = [
    {
      id: 1,
      title: "Hello World",
      content: "Welcome to learning React!",
    },
    {
      id: 2,
      title: "Installation",
      content: "You can install React from npm",
    },
    {
      id: 3,
      title: "Run App",
      content: "You can run React app with npm start command",
    },
  ];

  const filterList = posts.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm);
  });

  return (
    <>
      {/* <button onClick={() => setFlag(!flag)}>Toggle Clock Component</button> */}
      {/* {flag ? <Clock /> : "No Clock component"} */}
      {/* <Welcome user="Omer" />
      <Welcome user="John" />
      <Welcome user="Adam" /> */}
      {/* <LoginControl /> */}
      {/* <Blog posts={posts} /> */}
      {/* <Form /> */}
      {/* <Search searchTerm={searchTerm} handleSearch={handleSearch}/> */}
      <List list={filterList} />
      <WelcomeDialogue />
    </>
  );
}

export default App;
