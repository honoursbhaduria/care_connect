import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import RequestCard, { RequestData } from '@/components/Navbar';RequestCard';
import { useAuth } from '../../context/AuthContext';
import { getMockRequests } from '../../services/mockData';

const Dashboard = () => {
  const { user } = useAuth();
  const [requests, setRequests] = useState<RequestData[]>([]);
  const [stats, setStats] = useState({
    total: 0,
    open: 0,
    inProgress: 0,
    completed: 0,
  });

  useEffect(() => {
    // Fetch requests (mock data for this demo)
    const fetchedRequests = getMockRequests().filter(
      (req) => req.requester?.id === user?.id
    );
    setRequests(fetchedRequests);

    // Calculate stats
    setStats({
      total: fetchedRequests.length,
      open: fetchedRequests.filter((req) => req.status === 'open').length,
      inProgress: fetchedRequests.filter((req) => req.status === 'in-progress').length,
      completed: fetchedRequests.filter((req) => req.status === 'completed').length,
    });
  }, [user?.id]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <Link
          to="/requests/new"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Request
        </Link>
      </div>

      {/* Stats overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Total Requests</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">{stats.total}</dd>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Open Requests</dt>
            <dd className="mt-1 text-3xl font-semibold text-blue-600">{stats.open}</dd>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">In Progress</dt>
            <dd className="mt-1 text-3xl font-semibold text-yellow-500">{stats.inProgress}</dd>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Completed</dt>
            <dd className="mt-1 text-3xl font-semibold text-green-600">{stats.completed}</dd>
          </div>
        </div>
      </div>

      <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Requests</h2>

      {requests.length === 0 ? (
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <p className="text-gray-500 mb-4">You haven't created any help requests yet.</p>
          <Link
            to="/requests/new"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Your First Request
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {requests.slice(0, 4).map((request) => (
            <RequestCard 
              key={request.id} 
              request={request} 
              role="needful"
            />
          ))}
        </div>
      )}

      {requests.length > 0 && (
        <div className="mt-6 text-center">
          <Link
            to="/requests"
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            View All Requests
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dashboard;