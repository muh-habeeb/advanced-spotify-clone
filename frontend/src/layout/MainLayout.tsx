import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
    const isMobile = false;
    return (
        <div className="h-screen bg-black text-white flex flex-col">
            <ResizablePanelGroup direction="horizontal" className=" flex-1  h-full overflow-hidden p-2">
                {/* left side bar  */}
                <ResizablePanel defaultSize={20} minSize={isMobile ? 0 : 10} maxSize={30} >
                    left sidebar
                </ResizablePanel>

                <ResizableHandle className="w-2 bg-black rounded-lg transition-colors" />

                {/* main section */}
                <ResizablePanel defaultSize={isMobile ? 80 : 60}   >
                    {/* main */}
                    <Outlet />
                </ResizablePanel>

                <ResizableHandle className="w-2 bg-black rounded-lg transition-colors" />


                <ResizablePanel minSize={0} defaultSize={20}>
                    {/* right sidebar */}
                    friends activity
                </ResizablePanel>


            </ResizablePanelGroup>
        </div>
    )
}

export default MainLayout
