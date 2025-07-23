import { Outlet } from 'react-router-dom';
import ParticlesBackground from './ParticlesBackground';
import './App.css';

export default function App() {
  return (
    <>
      <ParticlesBackground />
      <main>
        <Outlet />
      </main>
    </>
  );
}