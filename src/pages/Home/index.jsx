import Sidebar from '../../components/SIdebar';

const index = () => {
  return (
    <div className="flex align-center gap-2 min-h-screen py-2">
      <Sidebar />
      <main>
        <h1>Home</h1>
      </main>
    </div>
  );
};

export default index;
