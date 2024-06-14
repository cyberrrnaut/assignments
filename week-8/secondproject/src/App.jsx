import { CardGrid } from './components/CardGrid';
import { Sidebar } from './components/Sidebar';

export default function App() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {/* Sidebar */}
      <div className="col-span-1">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="col-span-2">
        <CardGrid />
      </div>
    </div>
  );
}
