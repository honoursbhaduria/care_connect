
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { MessageSquare, Users, BookOpen, Calendar } from 'lucide-react';

const CommunityPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-careconnect-light-purple/30 py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge variant="outline" className="bg-white px-3 py-1 text-careconnect-purple border-careconnect-purple mb-4">
                Community
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Connect with Our Community</h1>
              <p className="text-lg md:text-xl text-gray-700 mt-4">
                Join discussions, share experiences, and connect with others in your local community who are passionate about care and support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button size="lg" className="bg-careconnect-purple hover:bg-careconnect-dark-purple">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Join Discussion
                </Button>
                <Button variant="outline" size="lg" className="border-careconnect-purple text-careconnect-purple hover:bg-careconnect-light-purple">
                  <Calendar className="mr-2 h-4 w-4" />
                  Upcoming Events
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Forums Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare size={24} className="text-careconnect-purple" />
              <h2 className="text-3xl font-semibold">Community Forums</h2>
            </div>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Engage in conversations, ask questions, and share your experiences with others in the Care Connect community.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {forums.map((forum, index) => (
                <Card key={index} className="card-hover border-careconnect-light-purple/30 overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="bg-white/80 text-careconnect-purple border-careconnect-purple/30">
                        {forum.category}
                      </Badge>
                      <div className="text-sm text-gray-500 flex items-center">
                        <Users size={14} className="mr-1" />
                        {forum.members}
                      </div>
                    </div>
                    <CardTitle className="mt-2">{forum.title}</CardTitle>
                    <CardDescription>{forum.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <MessageSquare size={14} />
                      <span>{forum.posts} posts</span>
                      <span className="mx-2">•</span>
                      <span>Last post {forum.lastPost}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full border-careconnect-purple/50 text-careconnect-purple hover:bg-careconnect-light-purple">
                      View Discussion
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button className="bg-careconnect-purple hover:bg-careconnect-dark-purple">
                View All Forums
              </Button>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-16 bg-careconnect-light-purple/20">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-8">
              <Calendar size={24} className="text-careconnect-purple" />
              <h2 className="text-3xl font-semibold">Upcoming Events</h2>
            </div>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Join local events, workshops, and meetups organized by Care Connect and our community partners.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event, index) => (
                <Card key={index} className="card-hover border-careconnect-light-purple/30 overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-careconnect-purple/10 p-6 flex flex-col justify-center items-center text-center">
                      <p className="text-careconnect-purple font-bold text-3xl">{event.day}</p>
                      <p className="text-gray-600 font-medium">{event.month}</p>
                      <Badge className="mt-2 bg-careconnect-purple">{event.time}</Badge>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <Users size={14} className="mr-1" />
                        <span>{event.attendees} attendees</span>
                        <span className="mx-2">•</span>
                        <span>{event.location}</span>
                      </div>
                      <Button className="w-full bg-careconnect-purple hover:bg-careconnect-dark-purple">
                        Register
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button variant="outline" className="border-careconnect-purple text-careconnect-purple hover:bg-careconnect-light-purple">
                View All Events
              </Button>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen size={24} className="text-careconnect-purple" />
              <h2 className="text-3xl font-semibold">Success Stories</h2>
            </div>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Read inspiring stories from members of our community who have made a difference or received support when they needed it most.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stories.map((story, index) => (
                <Card key={index} className="card-hover border-careconnect-light-purple/30 overflow-hidden h-full flex flex-col">
                  <CardHeader>
                    <div className="text-sm text-gray-500 mb-2">{story.date}</div>
                    <CardTitle>{story.title}</CardTitle>
                    <CardDescription className="flex items-center mt-2">
                      <div className="h-8 w-8 rounded-full bg-careconnect-light-purple flex items-center justify-center text-careconnect-purple font-medium text-sm mr-2">
                        {story.author.split(' ').map(name => name[0]).join('')}
                      </div>
                      {story.author}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600">{story.excerpt}</p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="ghost" className="text-careconnect-purple hover:bg-careconnect-light-purple hover:text-careconnect-dark-purple -ml-2">
                      Read full story →
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button variant="outline" className="border-careconnect-purple text-careconnect-purple hover:bg-careconnect-light-purple">
                Share Your Story
              </Button>
            </div>
          </div>
        </section>

        {/* Join CTA Section */}
        <section className="py-16 bg-gradient-to-br from-careconnect-purple/90 to-careconnect-dark-purple text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Join Our Growing Community</h2>
              <p className="text-lg md:text-xl opacity-90">
                Whether you're looking for support or want to help others, there's a place for you in our community. 
                Together, we can make a difference in people's lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="bg-white text-careconnect-purple hover:bg-careconnect-light-purple">
                  <Users className="mr-2 h-4 w-4" />
                  Become a Member
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Mock data for the community page
const forums = [
  {
    title: "Healthcare Resources",
    description: "Discuss and share information about local healthcare resources and services.",
    category: "Healthcare",
    members: 324,
    posts: 56,
    lastPost: "2 hours ago"
  },
  {
    title: "Caregiver Support",
    description: "A place for caregivers to find emotional support and practical advice.",
    category: "Support",
    members: 187,
    posts: 42,
    lastPost: "5 hours ago"
  },
  {
    title: "Medical Questions",
    description: "Ask questions about symptoms, medications, and general health concerns.",
    category: "Medical",
    members: 432,
    posts: 128,
    lastPost: "1 day ago"
  },
  {
    title: "Volunteer Opportunities",
    description: "Find ways to contribute and make a difference in your community.",
    category: "Volunteering",
    members: 156,
    posts: 34,
    lastPost: "3 days ago"
  },
  {
    title: "Mental Health Support",
    description: "Share experiences and find resources for mental health support.",
    category: "Mental Health",
    members: 213,
    posts: 67,
    lastPost: "1 day ago"
  },
  {
    title: "Equipment Exchange",
    description: "Buy, sell, or donate medical equipment and assistive devices.",
    category: "Resources",
    members: 98,
    posts: 27,
    lastPost: "1 week ago"
  }
];

const events = [
  {
    title: "Community Health Fair",
    description: "Free health screenings, wellness information, and family-friendly activities.",
    day: "15",
    month: "May",
    time: "9AM - 3PM",
    attendees: 124,
    location: "Central Park"
  },
  {
    title: "Caregiver Workshop",
    description: "Learn essential caregiving skills and self-care strategies from experts.",
    day: "22",
    month: "May",
    time: "6PM - 8PM",
    attendees: 48,
    location: "Community Center"
  },
  {
    title: "Senior Wellness Walk",
    description: "Join us for a gentle morning walk followed by a healthy breakfast.",
    day: "5",
    month: "Jun",
    time: "8AM - 10AM",
    attendees: 37,
    location: "Riverside Park"
  },
  {
    title: "Mental Health Awareness Seminar",
    description: "Expert panel discussion on mental health resources and support strategies.",
    day: "12",
    month: "Jun",
    time: "5PM - 7PM",
    attendees: 85,
    location: "Public Library"
  }
];

const stories = [
  {
    title: "Finding Support When I Needed It Most",
    author: "Sarah Johnson",
    date: "April 18, 2025",
    excerpt: "After my stroke, I didn't know where to turn. Care Connect connected me with volunteers who helped me recover and regain my independence."
  },
  {
    title: "How Volunteering Changed My Perspective",
    author: "Michael Chen",
    date: "April 5, 2025",
    excerpt: "I started volunteering to help others, but I've gained so much more. The connections I've made through Care Connect have enriched my life in ways I never expected."
  },
  {
    title: "Caring for Mom from Miles Away",
    author: "Elena Rodriguez",
    date: "March 27, 2025",
    excerpt: "Living in another state, I worried constantly about my elderly mother. Care Connect's local volunteers check in on her regularly, giving us both peace of mind."
  }
];

export default CommunityPage;
