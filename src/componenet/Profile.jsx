import { useSelector } from "react-redux"
import ProfileCard from "./ProfileCard"


const Profile = () => {
  const user = useSelector((store)=>store.user)
  console.log("user" ,user)
  return (
    <div ><ProfileCard user={user}/></div>
  )
}

export default Profile