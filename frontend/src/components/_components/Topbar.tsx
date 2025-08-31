import { SignedIn, SignedOut, SignOutButton } from '@clerk/clerk-react'
import { LayoutDashboard } from 'lucide-react'
import { Link } from 'react-router-dom'
import SignInOAuthButtons from './SignInOAuthButtons'
import { Button } from '../ui/button'

const Topbar = () => {
    const isAdmin = false
    return (
        <div className='flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md z-10'>
            <div className="flex gap-2 item-center">
                {"Spotify"}
                {/* logo name  */}

            </div>
            <div className="flex item-center gap4">
                {
                    isAdmin && (
                        <Link to={"/admin"}>
                            <LayoutDashboard className='size-4 mr-2' />
                            Admin Dashboard
                        </Link>
                    )
                }  

                <SignedIn>
                    <SignOutButton >
                        <Button>Sign Out</Button>
                    </SignOutButton>
                </SignedIn>

                <SignedOut>
                    <SignInOAuthButtons />
                </SignedOut>
            </div>

        </div>
    )
}

export default Topbar
