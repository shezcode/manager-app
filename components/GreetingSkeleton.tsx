import Card from "./Card";

const GreetingSkeleton = () => {
  return (
    <Card className="w-full py-14">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-gray-300 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-gray-300 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4"></div>
          </div>
        </div>
      </div>
    </Card>
  )
}
