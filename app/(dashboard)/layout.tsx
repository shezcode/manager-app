import '@/styles/global.css'
import GlassPane from "@/components/GlassPane";
import Sidebar from '@/components/Sidebar';

export default function DashboardRootLayout({children}: any) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane className="w-full h-full flex items-center justify-center ">
          <Sidebar />
          {children}
        </GlassPane>
      </body>
    </html>
  )
}
