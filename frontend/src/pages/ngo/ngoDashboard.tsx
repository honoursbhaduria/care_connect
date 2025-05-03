import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import RequestCard, { RequestData } from '@/components/RequestCard';
import { Loader2 } from 'lucide-react';

const NGODashboard = () => {
  const [acceptedRequests, setAcceptedRequests] = useState<RequestData[]>([]);
  const [openRequests, setOpenRequests] = useState<RequestData[]>([]);
  const [stats, setStats] = useState({
    totalAccepted: 0,
    inProgress: 0,
    completed: 0,
    available: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        setLoading(true);
        setError('');
        const token = localStorage.getItem('token');

        // Fetch both accepted and open requests in parallel
        const [acceptedRes, openRes] = await Promise.all([
          fetch('/api/ngo/help/accepted', {
            headers: { 'Authorization': `Bearer ${token}` }
          }),
          fetch('/api/ngo/help/open', {
            headers: { 'Authorization': `Bearer ${token}` }
          })
        ]);

        if (!acceptedRes.ok || !openRes.ok) {
          throw new Error('Failed to fetch requests');
        }

        const acceptedData = await acceptedRes.json();
        const openData = await openRes.json();

        // Normalize _id to id for frontend consistency
        const normalizeRequest = (req: any) => ({
          ...req,
          id: req._id,
          requester: req.requester ? { ...req.requester, id: req.requester._id } : undefined,
          ngo: req.ngo ? { ...req.ngo, id: req.ngo._id } : undefined
        });

        const normalizedAccepted = acceptedData.map(normalizeRequest);
        const normalizedOpen = openData.map(normalizeRequest);

        setAcceptedRequests(normalizedAccepted);
        setOpenRequests(normalizedOpen);

        // Calculate stats
        setStats({
          totalAccepted: normalizedAccepted.length,
          inProgress: normalizedAccepted.filter(req => req.status === 'in-progress').length,
          completed: normalizedAccepted.filter(req => req.status === 'completed').length,
          available: normalizedOpen.length,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin h-12 w-12 text-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white shadow rounded-lg p-6 text-center">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">NGO Dashboard</h1>

      {/* Stats overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Accepted Requests', value: stats.totalAccepted, color: 'text-gray-900' },
          { label: 'In Progress', value: stats.inProgress, color: 'text-yellow-500' },
          { label: 'Completed', value: stats.completed, color: 'text-green-600' },
          { label: 'Available Requests', value: stats.available, color: 'text-blue-600' }
        ].map((stat, index) => (
          <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">{stat.label}</dt>
              <dd className={`mt-1 text-3xl font-semibold ${stat.color}`}>{stat.value}</dd>
            </div>
          </div>
        ))}
      </div>

      {/* Accepted Requests */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-900">My Accepted Requests</h2>
          {acceptedRequests.length > 0 && (
            <Link
              to="/ngo/accepted-requests"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              View All
            </Link>
          )}
        </div>

        {acceptedRequests.length === 0 ? (
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <p className="text-gray-500 mb-4">You haven't accepted any help requests yet.</p>
            <Link
              to="/ngo/open-requests"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Browse Open Requests
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {acceptedRequests.slice(0, 4).map((request) => (
              <RequestCard 
                key={request.id} 
                request={request} 
                role="ngo"
              />
            ))}
          </div>
        )}
      </div>

      {/* Open Requests */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-900">Open Requests</h2>
          {openRequests.length > 0 && (
            <Link
              to="/ngo/open-requests"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              View All
            </Link>
          )}
        </div>

        {openRequests.length === 0 ? (
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <p className="text-gray-500">There are no open help requests at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {openRequests.slice(0, 4).map((request) => (
              <RequestCard 
                key={request.id} 
                request={request} 
                role="ngo"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NGODashboard;