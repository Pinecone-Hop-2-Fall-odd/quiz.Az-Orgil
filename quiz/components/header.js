import Link from "next/link";
import { useRouter } from "next/navigation"

export const Header =()=>{
    const router = useRouter();
    const handleLogout= ()=>{
        try{
            localStorage.removeItem("token")
            router.push('/')
        }catch(err){
            console.log(err);
        }
    }
    return(
        <div className="fixed top-0 right-0">
            <Link href="/">Home</Link>
            
        </div>
    )
}