import { Sidebar } from "@/components/sidebar";
import Prepare from "@/components/prepare";
import { ActivityCard } from "@/components/activity-card";
import { activities } from "@/data";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FDFBD4]">
      <div>
        <Sidebar />
        <div className="mt-3 mb-3 mr-3 ml-[calc(1/6*100%+10px)] flex-grow flex justify-center items-center bg-white rounded-2xl">
          <div>
            <div className="fixed left-1/6 inset-0 border-10 border-[#FDFBD4] pointer-events-none z-50 p-6"></div>
            <div className="w-auto p-4 grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
              {activities.map((activity, index) => (
                <ActivityCard key={index} {...activity} />
              ))}
            </div>
            <Prepare />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
