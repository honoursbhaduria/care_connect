import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search } from 'lucide-react';
import RequestCard, { RequestData } from '../../components/shared/RequestCard';

const MyRequests = () => {
  const [requests, setRequests] = useState<RequestData[]>([]);
  const [filteredRequests, setFilteredRequests] = useState<RequestData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await fetch('/api/help/me', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (!res.ok) throw new Error('Failed to fetch requests');

        const data = await res.json();
        setRequests(data);
        setFilteredRequests(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRequests();
  }, []);

  useEffect(() => {
    let result = requests;

    if (searchTerm) {
      result = result.filter(
        (req) =>
          req.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          req.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== 'all') {
      result = result.filter((req) => req.status === statusFilter);
    }

    setFilteredRequests(result);
  }, [searchTerm, statusFilter, requests]);

  const handleDelete = async (requestId: string) => {
    try {
      const res = await fetch(`/api/help/${requestId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!res.ok) throw new Error('Delete failed');

      const updatedRequests = requests.filter((req) => req._id !== requestId);
      setRequests(updatedRequests);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAction = (action: string, requestId: string) => {
    if (action === 'delete') {
      if (window.confirm('Are you sure you want to delete this request?')) {
        handleDelete(requestId);
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Help Requests</h1>
        <Link
          to="/requests/new"
          className="inline-flex items-center px-4 py-2 text-white bg-blue-600 rounded-md"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Request
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 shadow rounded-lg mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search requests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="md:w-48">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 border-gray-300 rounded-md"
            >
              <option value="all">All Statuses</option>
              <option value="open">Open</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </div>

      {/* Request List */}
      {filteredRequests.length === 0 ? (
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <p className="text-gray-500 mb-4">
            {requests.length === 0
              ? "You haven't created any help requests yet."
              : "No requests match your search criteria."}
          </p>
          {requests.length === 0 && (
            <Link
              to="/requests/new"
              className="inline-flex items-center px-4 py-2 text-white bg-blue-600 rounded-md"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create Your First Request
            </Link>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredRequests.map((request) => (
            <RequestCard
              key={request._id}
              request={request}
              role="needful"
              onAction={handleAction}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyRequests;
