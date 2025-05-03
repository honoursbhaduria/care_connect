import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, User } from 'lucide-react';
import StatusBadge from './StatusBadge';

export interface RequestData {
  id: string;
  title: string;
  description: string;
  location: string;
  time: string;
  status: 'open' | 'in-progress' | 'completed' | 'cancelled';
  requester?: {
    id: string;
    name: string;
  };
  ngo?: {
    id: string;
    name: string;
  } | null;
}

interface RequestCardProps {
  request: RequestData;
  role: 'needful' | 'ngo' | 'admin';
  showActions?: boolean;
  onAction?: (action: string, requestId: string) => void;
}

const RequestCard: FC<RequestCardProps> = ({
  request,
  role,
  showActions = true,
  onAction,
}) => {
  const handleAction = (action: string) => {
    if (onAction) {
      onAction(action, request.id);
    }
  };

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200 transition-all hover:shadow-md">
      <div className="px-4 py-5 sm:px-6">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-medium text-gray-900 truncate">{request.title}</h3>
          <StatusBadge status={request.status} />
        </div>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{request.description}</p>
      </div>
      <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
            <span>{request.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
            <span>{new Date(request.time).toLocaleDateString()}</span>
          </div>
          {request.requester && (
            <div className="flex items-center text-sm text-gray-500">
              <User className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
              <span>{request.requester.name}</span>
            </div>
          )}
        </div>
      </div>
      {showActions && (
        <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-between items-center">
          <Link
            to={`/requests/${request.id}`}
            className="text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            View Details
          </Link>
          {role === 'needful' && request.status === 'open' && (
            <div className="flex space-x-2">
              <Link
                to={`/requests/edit/${request.id}`}
                className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Edit
              </Link>
              <button
                onClick={() => handleAction('delete')}
                className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Delete
              </button>
            </div>
          )}
          {role === 'ngo' && request.status === 'open' && (
            <button
              onClick={() => handleAction('accept')}
              className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Accept Request
            </button>
          )}
          {role === 'ngo' && request.status === 'in-progress' && (
            <div className="flex space-x-2">
              <button
                onClick={() => handleAction('complete')}
                className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Complete
              </button>
              <button
                onClick={() => handleAction('cancel')}
                className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RequestCard;