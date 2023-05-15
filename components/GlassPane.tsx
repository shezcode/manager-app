import '@/styles/global.css'

const GlassPane = ({children}: any) => {
  return (
    <div className="glass rounded-2xl border-solid border-2 border-gray-200">
      {children}
    </div>
  )
}

export default GlassPane