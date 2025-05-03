import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin, Edit, Trash2, Loader2 } from 'lucide-react';

interface RequestData {
  _id: string;
  id?: string; // For frontend compatibility
  title: string;
  description: string;
  location: string;
  time: string;
  status: 'open' | 'in-progress' | 'completed';
  requester?: {
    _id: string;
    id?: string;
    name: string;
  };
  ngo?: {
    _id: string;
    id?: string;
    name: string;
  };
}

const RequestDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [request, setRequest] = useState<RequestData | null>(null);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionLoading, setActionLoading] = useState({
    accept: false,
    complete: false,
    cancel: false,
    delete: false
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const [reqRes, userRes] = await Promise.all([
          fetch(`/api/help/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch('/api/user/me', {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        if (!reqRes.ok || !userRes.ok) throw new Error('Failed to fetch');

        let requestData = await reqRes.json();
        const userData = await userRes.json();

        // Normalize _id to id for frontend consistency
        requestData = {
          ...requestData,
          id: requestData._id,
          requester: requestData.requester ? {
            ...requestData.requester,
            id: requestData.requester._id
          } : undefined,
          ngo: requestData.ngo ? {
            ...requestData.ngo,
            id: requestData.ngo._id
          } : undefined
        };

        setRequest(requestData);
        setUser(userData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error loading request');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleNgoAction = async (action: 'accept' | 'complete' | 'cancel') => {
    try {
      setError('');
      setActionLoading(prev => ({ ...prev, [action]: true }));

      const res = await fetch(`/api/ngo/help/${action}/${id}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || `${action} action failed`);
      }

      // Refresh request data
      const updatedRes = await fetch(`/api/help/${id}`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      let updatedData = await updatedRes.json();
      updatedData = {
        ...updatedData,
        id: updatedData._id,
        requester: updatedData.requester ? {
          ...updatedData.requester,
          id: updatedData.requester._id
        } : undefined,
        ngo: updatedData.ngo ? {
          ...updatedData.ngo,
          id: updatedData.ngo._id
        } : undefined
      };
      setRequest(updatedData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Action failed');
    } finally {
      setActionLoading(prev => ({ ...prev, [action]: false }));
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this request?')) return;

    try {
      setActionLoading(prev => ({ ...prev, delete: true }));
      const res = await fetch(`/api/help/${id}`, {
        method: 'DELETE',
        headers: { 
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!res.ok) throw new Error('Delete failed');
      navigate('/requests');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Delete failed');
    } finally {
      setActionLoading(prev => ({ ...prev, delete: false }));
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin h-12 w-12 text-blue-600" />
      </div>
    );
  }

  if (error || !request) {
    return (
      <div className="bg-white shadow rounded-lg p-6 text-center">
        <p className="text-red-500 mb-4">{error || 'Request not found'}</p>
        <Link
          to="/requests"
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Back to Requests
        </Link>
      </div>
    );
  }

  const isOwner = user && request.requester?.id === user.id;
  const isNgo = user?.role === 'ngo';
  const isAssignedNgo = isNgo && request.ngo?.id === user.id;
  const canEdit = isOwner && request.status === 'open';

  return (
    <div className="space-y-6">
      <div>
        <Link 
          to={isOwner ? "/requests" : "/ngo/help/open"} 
          className="inline-flex items-center text-blue-600 hover:text-blue-500 text-sm"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to {isOwner ? "My Requests" : "Open Requests"}
        </Link>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-medium text-gray-900">{request.title}</h2>
            <p className="mt-1 text-sm text-gray-500">Request ID: {request.id}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            request.status === 'open' ? 'bg-blue-100 text-blue-800' :
            request.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
            'bg-green-100 text-green-800'
          }`}>
            {request.status.replace('-', ' ')}
          </span>
        </div>

        <div className="border-t border-gray-200">
          <dl>
            {/* ... (keep all your existing dl/dt/dd elements) ... */}
          </dl>
        </div>

        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 flex justify-end space-x-3">
          {canEdit && (
            <>
              <Link
                to={`/requests/edit/${request.id}`}
                className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Link>
              <button
                onClick={handleDelete}
                disabled={actionLoading.delete}
                className="inline-flex items-center px-3 py-2 rounded-md text-white bg-red-600 hover:bg-red-700 disabled:bg-red-400"
              >
                {actionLoading.delete ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <Trash2 className="h-4 w-4 mr-2" />
                )}
                Delete
              </button>
            </>
          )}

          {isNgo && request.status === 'open' && (
            <button
              onClick={() => handleNgoAction('accept')}
              disabled={actionLoading.accept}
              className="inline-flex items-center px-3 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400"
            >
              {actionLoading.accept ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : null}
              Accept Request
            </button>
          )}

          {isAssignedNgo && request.status === 'in-progress' && (
            <div className="flex space-x-3">
              <button
                onClick={() => handleNgoAction('cancel')}
                disabled={actionLoading.cancel}
                className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
              >
                {actionLoading.cancel ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : null}
                Cancel
              </button>
              <button
                onClick={() => handleNgoAction('complete')}
                disabled={actionLoading.complete}
                className="inline-flex items-center px-3 py-2 rounded-md text-white bg-green-600 hover:bg-green-700 disabled:bg-green-400"
              >
                {actionLoading.complete ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : null}
                Mark as Complete
              </button>
            </div>
          )}
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border-l-4 border-red-400">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}
    </div>
  );
};

export default RequestDetails;