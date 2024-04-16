import Header from "../components/Header";
import SideBar from "../components/SideBar";


export default function DashboardLayout({
    children, // will be a page or nested layout
}) {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-muted/40 md:block">
                <SideBar />
            </div>
            <div className="flex flex-col">

                <Header />

                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}


