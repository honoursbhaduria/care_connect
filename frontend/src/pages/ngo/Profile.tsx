import { useState } from 'react';
import { Building2, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface NGOProfile {
  name: string;
  skills: string[];
  availability: string;
  location: string;
}

const Profile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  
  // Mock profile data
  const [profile, setProfile] = useState<NGOProfile>({
    name: user?.name || 'Organization Name',
    skills: ['Food Distribution', 'Medical Aid', 'Education'],
    availability: 'Weekdays 9am-5pm',
    location: 'Downtown Area',
  });

  const [editedProfile, setEditedProfile] = useState<NGOProfile>({ ...profile });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newSkills = [...editedProfile.skills];
    newSkills[index] = e.target.value;
    setEditedProfile((prev) => ({ ...prev, skills: newSkills }));
  };

  const addSkill = () => {
    setEditedProfile((prev) => ({
      ...prev,
      skills: [...prev.skills, ''],
    }));
  };

  const removeSkill = (index: number) => {
    const newSkills = [...editedProfile.skills];
    newSkills.splice(index, 1);
    setEditedProfile((prev) => ({ ...prev, skills: newSkills }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    // In a real app, this would make an API call
    setTimeout(() => {
      setProfile(editedProfile);
      setIsEditing(false);
      setSaving(false);
    }, 1000);
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">NGO Profile</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your organization's profile information.
        </p>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        {!isEditing ? (
          // View mode
          <>
            <div className="px-4 py-5 sm:px-6 flex justify-between">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Organization Information
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Details about your organization and its capabilities.
                </p>
              </div>
              <button
                onClick={() => setIsEditing(true)}
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Edit Profile
              </button>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <Building2 className="h-5 w-5 mr-2 text-gray-400" />
                    Organization Name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {profile.name}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-gray-400" />
                    Services Provided
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                      {profile.skills.map((skill, index) => (
                        <li key={index} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-gray-400" />
                    Availability
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {profile.availability}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                    Service Area
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {profile.location}
                  </dd>
                </div>
              </dl>
            </div>
          </>
        ) : (
          // Edit mode
          <form onSubmit={handleSubmit}>
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Edit Organization Profile
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Update your organization's information.
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={editedProfile.name}
                    onChange={handleChange}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
                    Services Provided
                  </label>
                  {editedProfile.skills.map((skill, index) => (
                    <div key={index} className="flex mt-1">
                      <input
                        type="text"
                        value={skill}
                        onChange={(e) => handleSkillChange(e, index)}
                        className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <button
                        type="button"
                        onClick={() => removeSkill(index)}
                        className="ml-2 inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addSkill}
                    className="mt-2 inline-flex items-center px-2 py-1 border border-gray-300 shadow-sm text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Add Service
                  </button>
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label htmlFor="availability" className="block text-sm font-medium text-gray-700">
                    Availability
                  </label>
                  <input
                    type="text"
                    name="availability"
                    id="availability"
                    value={editedProfile.availability}
                    onChange={handleChange}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder="e.g., Weekdays 9am-5pm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                    Service Area
                  </label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    value={editedProfile.location}
                    onChange={handleChange}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder="e.g., Downtown Area"
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {saving ? 'Saving...' : 'Save'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;