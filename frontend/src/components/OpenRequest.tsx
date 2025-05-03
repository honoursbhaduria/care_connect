





const OpenRequests = () => {
    const [requests, setRequests] = useState<RequestData[]>([]);
    const [filteredRequests, setFilteredRequests] = useState<RequestData[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [locationFilter, setLocationFilter] = useState('');
  
    useEffect(() => {
      // Fetch open requests (mock data for this demo)
      const openRequests = getMockRequests().filter(
        (req) => req.status === 'open' && !req.ngo
      );
      setRequests(openRequests);
      setFilteredRequests(openRequests);
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
  
      if (locationFilter) {
        result = result.filter(
          (req) => req.location.toLowerCase().includes(locationFilter.toLowerCase())
        );
      }
  
      setFilteredRequests(result);
    }, [searchTerm, locationFilter, requests]);
  
    const handleAccept = (requestId: string) => {
      // In a real app, this would make an API call
      alert(`Request ${requestId} accepted!`);
      
      // Update the list by removing the accepted request
      setRequests((prev) => prev.filter((req) => req.id !== requestId));
    };
  
    const handleAction = (action: string, requestId: string) => {
      if (action === 'accept') {
        handleAccept(requestId);
      }
    };
  
    const uniqueLocations = [...new Set(requests.map((req) => req.location))];
  
    return (
      <div>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Open Help Requests</h1>
          <p className="mt-1 text-sm text-gray-500">
            Browse and accept open requests that need your help.
          </p>
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
                placeholder="Search by title or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:w-48 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Filter className="h-4 w-4 mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>
  
          {showFilters && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <select
                  id="location"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option value="">All Locations</option>
                  {uniqueLocations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
  
        {/* Request List */}
        {filteredRequests.length === 0 ? (
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <p className="text-gray-500">
              {requests.length === 0
                ? "There are no open help requests at the moment."
                : "No requests match your search criteria."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredRequests.map((request) => (
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
    );
  };
  
  export default OpenRequests;