import { Card, CardContent } from '@/components/ui/card'
import TextLoader from '@/components/ui/Loaders/TextLoader'
import { Loader } from 'lucide-react'

const AuthCallBackPage = () => {
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
