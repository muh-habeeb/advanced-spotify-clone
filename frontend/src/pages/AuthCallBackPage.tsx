import { Card, CardContent } from '@/components/ui/card'
import { axiosInstance } from '@/lib/axios'
import { useUser } from '@clerk/clerk-react'
import { Loader } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthCallBackPage = () => {
  const { isLoaded, user } = useUser();
  const navigate = useNavigate()
  //prevent from sending data in dev mode twice
  const syncAttempted = useRef(false);
  useEffect(() => {
    const syncUser = async () => {
      try {
        if (!isLoaded || !user || syncAttempted.current) return;
        // register url of backend after /api
        syncAttempted.current = true
        await axiosInstance.post("/auth/register", {
          //send user data for saving to  the  database 
          id: user.id,
          email: user.primaryEmailAddress?.emailAddress || "",
          fullName: user.fullName,
          lastName: user.lastName,
          imageUrl: user.imageUrl
        })

      } catch (error: any) {
        console.log("Error in auth call back", error)
      } finally {
        navigate('/',)
      }
    }
    syncUser();
  }, [isLoaded, user, navigate])
  return (
    <div className="h-screen flex items-center justify-center w-full">

      <Card className="w-[90%] max-w-md bg-zinc-900 border-zinc-600">

        <CardContent className=' flex flex-col items-center gap-4 pt-6'>
          <Loader className='size-6 text-emerald-600 animate-spin' />
          {/* <TextLoader  /> */}
          <h3 className='text-zinc-400 text-xl font-bold'>Logging you in </h3>
          <p className='text-zinc-400 text-sm'>Redirecting...</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default AuthCallBackPage
