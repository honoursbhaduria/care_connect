import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RequestForm, { RequestFormData } from '../../components/shared/RequestForm';

const CreateRequest = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (data: RequestFormData) => {
    try {
      setIsSubmitting(true);
      setError('');

      const res = await fetch('/api/help', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // You may need to include a token for protected routes
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to create request');
      }

      navigate('/requests');
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to create request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Create Help Request</h1>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <RequestForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
        </div>
      </div>
    </div>
  );
};

export default CreateRequest;
