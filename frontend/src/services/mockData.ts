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
  
  export const getMockRequests = (): RequestData[] => [
    {
      id: '1',
      title: 'Food Distribution Needed',
      description: 'We need help distributing food packages to elderly residents in the downtown area.',
      location: 'Downtown',
      time: '2025-06-10T14:00:00Z',
      status: 'open',
      requester: {
        id: '1',
        name: 'John Doe',
      },
      ngo: null,
    },
    {
      id: '2',
      title: 'Medical Supply Delivery',
      description: 'Looking for assistance delivering essential medical supplies to a community clinic.',
      location: 'Westside',
      time: '2025-06-12T10:00:00Z',
      status: 'in-progress',
      requester: {
        id: '1',
        name: 'John Doe',
      },
      ngo: {
        id: '2',
        name: 'Care Organization',
      },
    },
    {
      id: '3',
      title: 'Volunteer Teachers Needed',
      description: 'Our community center needs volunteer teachers for an after-school program.',
      location: 'Eastside',
      time: '2025-06-15T15:30:00Z',
      status: 'open',
      requester: {
        id: '3',
        name: 'Jane Smith',
      },
      ngo: null,
    },
    {
      id: '4',
      title: 'Emergency Shelter Assistance',
      description: 'Need help setting up emergency shelters for families affected by recent flooding.',
      location: 'Riverside',
      time: '2025-06-08T09:00:00Z',
      status: 'completed',
      requester: {
        id: '1',
        name: 'John Doe',
      },
      ngo: {
        id: '2',
        name: 'Care Organization',
      },
    },
    {
      id: '5',
      title: 'Clothing Drive Support',
      description: 'Looking for organizations to help with sorting and distributing donated clothing.',
      location: 'Northside',
      time: '2025-06-18T13:00:00Z',
      status: 'open',
      requester: {
        id: '4',
        name: 'Alice Johnson',
      },
      ngo: null,
    },
    {
      id: '6',
      title: 'Mental Health Support Group',
      description: 'Need trained professionals to facilitate a community mental health support group.',
      location: 'Downtown',
      time: '2025-06-20T18:00:00Z',
      status: 'in-progress',
      requester: {
        id: '5',
        name: 'Robert Wilson',
      },
      ngo: {
        id: '2',
        name: 'Care Organization',
      },
    },
    {
      id: '7',
      title: 'Clean Water Distribution',
      description: 'Help needed to distribute clean water to areas affected by water main break.',
      location: 'Southside',
      time: '2025-06-09T11:00:00Z',
      status: 'open',
      requester: {
        id: '1',
        name: 'John Doe',
      },
      ngo: null,
    },
  ];