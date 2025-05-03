import { FC } from 'react';

type StatusType = 'open' | 'in-progress' | 'completed' | 'cancelled';

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

const StatusBadge: FC<StatusBadgeProps> = ({ status, className = '' }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'open':
        return 'bg-blue-100 text-blue-800';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyles()} ${className}`}
    >
      {status.replace('-', ' ')}
    </span>
  );
};

export default StatusBadge;