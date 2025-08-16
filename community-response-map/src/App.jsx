import MapView from './components/MapView';

export default function App() {
  return (
    <div className="h-screen w-screen">
      <h1 className="text-center text-xl font-bold p-4 bg-gray-100">
        Community Disaster Response Map
      </h1>
      <div className="h-[calc(100vh-64px)]">
        <MapView />
      </div>
    </div>
  );
}
