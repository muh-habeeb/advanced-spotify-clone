import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const welcome = () => {
  toast.success("welcome to spotify", {
    position: "top-center",
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  })

  toast.promise(
    fetch("https://jsonplaceholder.typicode.com/users/6") // pick one user
      .then((res) => res.json()).then(data => data), {
    loading: "Fetching user...",
    success: (data) => `Welcome back, ${data.name}!`, // data is full object
    error: (err) => `Error: ${err.message}`,
  }
  );

}
const Home = () => {

  return (
    <div>
      home
      <Button onClick={welcome}>hi</Button>
    </div>
  )
}

export default Home
