import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RequestCard, { RequestData } from '../../components/shared/RequestCard';

const NGODashboard = () => {
  const [acceptedRequests, setAcceptedRequests] = useState<RequestData[]>([]);
  const [openRequests, setOpenRequests] = useState<RequestData[]>([]);
  const [stats, setStats] = useState({
    totalAccepted: 0,
    inProgress: 0,
    completed: 0,
    available: 0,
  });

  // Fetching open and accepted requests from the API
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        // Fetch accepted requests for the NGO
        const acceptedResponse = await fetch('/api/help/accepted');
        const accepted = await acceptedResponse.json();

        // Fetch open requests for the NGO
        const openResponse = await fetch('/api/help/open');
        const open = await openResponse.json();

        setAcceptedRequests(accepted);
        setOpenRequests(open);

        // Calculate stats
        setStats({
          totalAccepted: accepted.length,
          inProgress: accepted.filter((req) => req.status === 'in-progress').length,
          completed: accepted.filter((req) => req.status === 'completed').length,
          available: open.length,
        });
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests();
  }, []);

  const handleAction = async (action, requestId) => {
    try {
      let response;

      if (action === 'accept') {
        response = await fetch(`/api/help/accept/${requestId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } else if (action === 'complete') {
        response = await fetch(`/api/help/complete/${requestId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } else if (action === 'cancel') {
        response = await fetch(`/api/help/cancel/${requestId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }

      if (response.ok) {
        const updatedRequest = await response.json();
        setAcceptedRequests((prev) =>
          prev.map((req) => (req.id === requestId ? updatedRequest : req))
        );
      } else {
        alert('Failed to perform the action');
      }
    } catch (error) {
      console.error('Error performing action:', error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">NGO Dashboard</h1>

      {/* Stats overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Accepted Requests</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">{stats.totalAccepted}</dd>
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
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Available Requests</dt>
            <dd className="mt-1 text-3xl font-semibold text-blue-600">{stats.available}</dd>
          </div>
        </div>
      </div>

      {/* Accepted Requests */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-900">My Accepted Requests</h2>
          <Link
            to="/ngo/accepted-requests"
            className="text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            View All
          </Link>
        </div>

        {acceptedRequests.length === 0 ? (
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <p className="text-gray-500 mb-4">You haven't accepted any help requests yet.</p>
            <Link
              to="/ngo/open-requests"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
                onAction={handleAction}
              />
            ))}
          </div>
        )}
      </div>

      {/* Open Requests */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-900">Open Requests</h2>
          <Link
            to="/ngo/open-requests"
            className="text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            View All
          </Link>
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
                onAction={handleAction}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NGODashboard;
