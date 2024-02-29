import { useAppDispatch } from "@/app/hooks/hooks";
import { getAllNews } from "@/redux/news/newsOperation";


export default function NewsList() {

 

  return <div>
    <button onClick={useAppDispatch(getAllNews())} type="button">click me</button>
  </div>;
}
