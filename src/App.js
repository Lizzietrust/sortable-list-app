import { useState } from "react";
import Skills from "./components/Skills";
import Suggested from "./components/Suggested";

function App() {
  const [skillList, setSkillList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleDelete = (item) => {

    const updatedList = skillList.filter((i) => (i.id !== item.id));
    setSkillList(updatedList);

    console.log('NEWLIST:', updatedList);
  }

  const handleAdd = (item) => {
    const newSkillList = [...skillList, item];
    setSkillList(newSkillList);
    setInputValue("");
  }

  const data = [
    {id: 1, name: "JavaScript"},
    {id: 2, name: "ReactJs"},
    {id: 3, name: "NextJs"},
    {id: 4, name: "Tailwind"},
    {id: 5, name: "React Native"},
    {id: 6, name: "Python"},
    {id: 7, name: "Ruby"},
    {id: 8, name: "PHP"},
    {id: 9, name: "Spring Boot"},
    {id: 10, name: "JQuery"},
    {id: 11, name: "Django"},
    {id: 12, name: "Ruby on Rails"},
    {id: 13, name: "Laravel"},
    {id: 14, name: "Java"},
    {id: 15, name: "C#"},
    {id: 16, name: "React Redux"},
    {id: 17, name: "Go"},
    {id: 18, name: "Swift"},
    {id: 19, name: "Rust"},
    {id: 20, name: "ExpressJs"},
  ]

  const sugData = [
    {id: 21, name: "HTML"},
    {id: 22, name: "CSS"},
    {id: 23, name: "Bootstrap"},
    {id: 24, name: "TypeScript"},
    {id: 25, name: "VueJs"},
    {id: 26, name: "Angular"},
    {id: 27, name: "NodeJs"},
  ]

  return (
    <div className='h-screen w-full flex flex-col bg-slate-300 items-center justify-center'>
      <h1 className='text-blue-950 font-bold text-3xl max-[768px]:text-2xl mb-4'>Select your top 5 tech skills</h1>
      <div className='bg-white w-[500px] max-[768px]:w-[90%] rounded-xl max-[768px]:rounded-md shadow-3xl
       shadow-slate-300 p-8 max-[768px]:p-4 flex max-[768px]:flex-col gap-12'>
        <Skills
          skillList={skillList} 
          onDelete={handleDelete} 
          inputValue={inputValue} 
          setInputValue={setInputValue}
          data={data}
          onAdd={handleAdd}
          setSkillList={setSkillList}
        />
        <Suggested data={sugData} onAdd={handleAdd}  />
      </div>
    </div>
  );
}

export default App;
