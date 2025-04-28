import { useState, useEffect } from 'react';
import { 
  User, 
  BookOpen, 
  Code, 
  Briefcase, 
  Linkedin, 
  CheckCircle, 
  ChevronDown, 
  ChevronRight,
  Lightbulb,
  Award,
  BarChart3,
  PlusCircle,
  Trash2
} from 'lucide-react';

export default function RoadmapTemplate() {
  // State management
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSection, setExpandedSection] = useState(null);
  const [progressItems, setProgressItems] = useState({
    'reviewResume': false,
    'updateLinkedIn': false,
    'completeSkillsAssessment': false,
    'startLearningPath': false,
    'networkWithPMs': false,
    'beginSideProject': false,
    'prepareInterviewStories': false,
    'createPortfolio': false,
    'applyToJobs': false,
  });
  
  // Animation effects
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Toggle functions
  const toggleProgress = (item) => {
    setProgressItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };
  
  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Tab icon mapping
  const tabIcons = {
    'overview': <BarChart3 className="w-5 h-5" />,
    'skills': <Award className="w-5 h-5" />,
    'learning': <BookOpen className="w-5 h-5" />,
    'projects': <Code className="w-5 h-5" />,
    'linkedin': <Linkedin className="w-5 h-5" />,
    'checklist': <CheckCircle className="w-5 h-5" />
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header with subtle animation */}
      <header className={`bg-white/70 backdrop-blur-md text-gray-900 p-6 shadow-lg rounded-b-3xl transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <div className="container mx-auto">
          <h1 className="text-4xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Career Roadmap</h1>
          <p className="text-lg text-gray-700">Your personalized path to professional success</p>
        </div>
      </header>

      {/* Mobile-Friendly Navigation Tabs */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
        <div className="container mx-auto overflow-x-auto flex justify-between px-2 py-1 no-scrollbar">
          {Object.keys(tabIcons).map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 mx-1 whitespace-nowrap
                ${activeTab === tab 
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md transform scale-105' 
                  : 'bg-white/50 hover:bg-white text-gray-700 hover:shadow-md'}`}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: mounted ? 'fadeInDown 0.5s ease forwards' : 'none'
              }}
            >
              <span className="hidden sm:inline">{tabIcons[tab]}</span>
              <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content with Animation */}
      <main className={`flex-grow container mx-auto p-4 sm:p-6 transition-all duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/50 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <BarChart3 className="text-blue-600 mr-3 h-6 w-6" />
              <h2 className="text-2xl font-bold text-gray-800">Career Journey Overview</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Current Position</h3>
                <p className="text-gray-700">Enter details about your current role, responsibilities, and the skills you've developed.</p>
                <div className="mt-4 bg-white/70 rounded-lg p-3 shadow-inner">
                  <p className="text-sm text-gray-500 italic">Add your current position details...</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-indigo-200">
                <h3 className="text-xl font-semibold text-indigo-800 mb-3">Target Role</h3>
                <p className="text-gray-700">Define the role you're aiming for, including title, responsibilities, and industry.</p>
                <div className="mt-4 bg-white/70 rounded-lg p-3 shadow-inner">
                  <p className="text-sm text-gray-500 italic">Add your target role details...</p>
                </div>
              </div>
              
              <div className="md:col-span-2 bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Journey Timeline</h3>
                <p className="text-gray-700">Create a timeline with key milestones to track your progress.</p>
                <div className="mt-6 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-300 rounded-full"></div>
                  
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="ml-6 mb-8 relative">
                      <div className="absolute -left-8 w-4 h-4 rounded-full bg-purple-500 border-4 border-purple-100"></div>
                      <div className="bg-white/70 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
                        <h4 className="text-lg font-medium text-purple-700">Milestone {step}</h4>
                        <p className="text-gray-600 text-sm mt-1">Add description, target date, and success metrics...</p>
                      </div>
                    </div>
                  ))}
                  
                  <button className="ml-6 flex items-center text-purple-600 hover:text-purple-800 transition-colors duration-200">
                    <PlusCircle className="w-4 h-4 mr-2" />
                    <span>Add milestone</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/50 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <Award className="text-blue-600 mr-3 h-6 w-6" />
              <h2 className="text-2xl font-bold text-gray-800">Skills Assessment</h2>
            </div>
            
            <div className="space-y-6">
              {['Technical Skills', 'Soft Skills', 'Domain Knowledge'].map((category) => (
                <div 
                  key={category}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  <button 
                    onClick={() => toggleSection(category)} 
                    className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                  >
                    <h3 className="text-xl font-semibold text-gray-800">{category}</h3>
                    {expandedSection === category ? 
                      <ChevronDown className="h-5 w-5 text-gray-600" /> : 
                      <ChevronRight className="h-5 w-5 text-gray-600" />
                    }
                  </button>
                  
                  {expandedSection === category && (
                    <div className="p-4 bg-white/50 animate-fadeIn">
                      <div className="mb-4">
                        <p className="text-gray-700 mb-3">Rate your proficiency and identify skills to develop for your target role.</p>
                        <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm transition-colors duration-200">
                          <PlusCircle className="w-4 h-4 mr-1" />
                          <span>Add skill</span>
                        </button>
                      </div>
                      
                      <div className="space-y-4">
                        {[1, 2, 3].map((skill) => (
                          <div key={skill} className="bg-white rounded-lg p-3 shadow-sm hover:shadow transition-shadow duration-200">
                            <div className="flex justify-between items-center">
                              <div>
                                <h4 className="font-medium text-gray-800">Skill Example {skill}</h4>
                                <div className="flex items-center mt-1">
                                  <div className="bg-gray-200 h-2 rounded-full w-48 overflow-hidden">
                                    <div className="bg-blue-600 h-2 rounded-full" style={{width: `${skill * 25}%`}}></div>
                                  </div>
                                  <span className="ml-2 text-sm text-gray-600">{skill * 25}%</span>
                                </div>
                              </div>
                              <button className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                            <div className="mt-2 text-sm text-gray-600">
                              <p>Notes on current level and improvement plans...</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Learning Tab */}
        {activeTab === 'learning' && (
          <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/50 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <BookOpen className="text-blue-600 mr-3 h-6 w-6" />
              <h2 className="text-2xl font-bold text-gray-800">Learning Resources</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {['Courses', 'Books', 'Podcasts', 'Communities'].map((type) => (
                <div 
                  key={type}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:transform hover:scale-[1.02] border border-blue-100"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{type}</h3>
                  <p className="text-gray-700 mb-4">Track your learning materials and progress.</p>
                  
                  <div className="space-y-3">
                    {[1, 2].map((item) => (
                      <div key={item} className="bg-white rounded-lg p-3 shadow-sm flex items-start">
                        <input 
                          type="checkbox" 
                          className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <div className="ml-3">
                          <h4 className="font-medium text-gray-800">Example {type.slice(0, -1)} {item}</h4>
                          <p className="text-sm text-gray-600 mt-1">Brief description and notes...</p>
                        </div>
                      </div>
                    ))}
                    
                    <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm transition-colors duration-200 mt-2">
                      <PlusCircle className="w-4 h-4 mr-1" />
                      <span>Add {type.toLowerCase().slice(0, -1)}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/50 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <Code className="text-blue-600 mr-3 h-6 w-6" />
              <h2 className="text-2xl font-bold text-gray-800">Portfolio Projects</h2>
            </div>
            <p className="text-gray-700 mb-6">Create projects that showcase the skills relevant to your target role.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((project) => (
                <div 
                  key={project}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-30 font-bold text-4xl">
                      PROJECT {project}
                    </div>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Project Title</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Skill 1</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Skill 2</span>
                      <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Skill 3</span>
                    </div>
                    <p className="text-gray-700">Brief description of the project and its relevance to your career goals...</p>
                    <div className="mt-4 flex justify-between items-center">
                      <div className="text-sm text-gray-500">Status: <span className="font-medium text-amber-600">In Progress</span></div>
                      <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-colors duration-200">
                        Edit Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="bg-white/50 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center p-8 hover:bg-white/70 transition-colors duration-300">
                <button className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition-colors duration-200">
                  <PlusCircle className="w-12 h-12 mb-2" />
                  <span className="font-medium">Add New Project</span>
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* LinkedIn Tab */}
        {activeTab === 'linkedin' && (
          <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/50 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <Linkedin className="text-blue-600 mr-3 h-6 w-6" />
              <h2 className="text-2xl font-bold text-gray-800">LinkedIn Strategy</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Profile Optimization</h3>
                <div className="space-y-4">
                  <div className="bg-white/70 rounded-lg p-4 shadow-inner">
                    <h4 className="font-medium text-gray-800 mb-2">Headline</h4>
                    <p className="text-gray-700 text-sm mb-2">Your headline should clearly communicate your career aspirations.</p>
                    <div className="bg-gray-100 rounded p-3 text-gray-600 text-sm">
                      Enter your optimized headline...
                    </div>
                  </div>
                  
                  <div className="bg-white/70 rounded-lg p-4 shadow-inner">
                    <h4 className="font-medium text-gray-800 mb-2">About Section</h4>
                    <p className="text-gray-700 text-sm mb-2">Tell your career story and highlight your transition journey.</p>
                    <div className="bg-gray-100 rounded p-3 text-gray-600 text-sm h-24">
                      Enter your about section content...
                    </div>
                  </div>
                  
                  <div className="bg-white/70 rounded-lg p-4 shadow-inner">
                    <h4 className="font-medium text-gray-800 mb-2">Featured Section</h4>
                    <p className="text-gray-700 text-sm mb-2">Showcase projects and content relevant to your target role.</p>
                    <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm transition-colors duration-200 mt-2">
                      <PlusCircle className="w-4 h-4 mr-1" />
                      <span>Add featured item</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-5 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg border border-indigo-200">
                <h3 className="text-xl font-semibold text-indigo-800 mb-3">Content Strategy</h3>
                <p className="text-gray-700 mb-4">Plan regular content posts to establish yourself in your target field.</p>
                
                <div className="space-y-3">
                  {['Share industry insights', 'Document learning journey', 'Create how-to content'].map((idea, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 shadow-sm flex items-start">
                      <Lightbulb className="text-amber-500 w-5 h-5 mt-0.5" />
                      <div className="ml-3">
                        <h4 className="font-medium text-gray-800">{idea}</h4>
                        <p className="text-sm text-gray-600 mt-1">Add specific post ideas and schedule...</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Networking Plan</h3>
                <p className="text-gray-700 mb-4">Identify and connect with professionals in your target field.</p>
                
                <div className="space-y-4">
                  <div className="bg-white/70 rounded-lg p-4 shadow-inner">
                    <h4 className="font-medium text-gray-800 mb-2">Target Connections</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                      {['Industry leaders', 'Hiring managers', 'Peers in target role'].map((target, index) => (
                        <div key={index} className="bg-white rounded-lg p-3 shadow-sm">
                          <p className="font-medium text-gray-700">{target}</p>
                          <p className="text-sm text-gray-600 mt-1">Add specific names and connection strategies...</p>
                        </div>
                      ))}
                      <button className="flex items-center justify-center text-purple-600 hover:text-purple-800 transition-colors duration-200 bg-white/50 rounded-lg p-3 shadow-sm">
                        <PlusCircle className="w-4 h-4 mr-1" />
                        <span className="text-sm">Add target group</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Checklist Tab */}
        {activeTab === 'checklist' && (
          <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/50 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <CheckCircle className="text-blue-600 mr-3 h-6 w-6" />
              <h2 className="text-2xl font-bold text-gray-800">Action Plan</h2>
            </div>
            
            <div className="space-y-6">
              {[
                { title: 'Preparation Phase', items: ['reviewResume', 'updateLinkedIn', 'completeSkillsAssessment'] },
                { title: 'Development Phase', items: ['startLearningPath', 'networkWithPMs', 'beginSideProject'] },
                { title: 'Application Phase', items: ['prepareInterviewStories', 'createPortfolio', 'applyToJobs'] }
              ].map((phase) => (
                <div 
                  key={phase.title}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-3">
                    <h3 className="text-lg font-semibold text-white">{phase.title}</h3>
                  </div>
                  
                  <div className="p-5 space-y-4">
                    {phase.items.map((item) => (
                      <div 
                        key={item} 
                        className={`flex items-center bg-white rounded-lg p-4 shadow-sm transition-all duration-300 ${progressItems[item] ? 'border-l-4 border-green-500' : 'hover:shadow-md'}`}
                      >
                        <button
                          onClick={() => toggleProgress(item)}
                          className={`h-6 w-6 mr-3 flex items-center justify-center rounded-full transition-all duration-300 ${
                            progressItems[item] 
                              ? 'bg-green-500 text-white' 
                              : 'border-2 border-gray-300 hover:border-blue-500'
                          }`}
                        >
                          {progressItems[item] && <CheckCircle className="h-4 w-4" />}
                        </button>
                        <div>
                          <h4 className="font-medium text-gray-800 capitalize">
                            {item.replace(/([A-Z])/g, ' $1').trim()}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">Add details, deadline, and notes...</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center">
                  <Lightbulb className="text-amber-500 w-5 h-5 mr-2" />
                  <h3 className="font-medium text-gray-800">Completion Progress</h3>
                </div>
                <div className="mt-3">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-700" 
                      style={{ 
                        width: `${Object.values(progressItems).filter(Boolean).length / Object.values(progressItems).length * 100}%` 
                      }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-600 text-right">
                    {Object.values(progressItems).filter(Boolean).length} of {Object.values(progressItems).length} tasks complete
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className="bg-white/70 backdrop-blur-md text-gray-600 text-sm text-center py-6 mt-8 shadow-inner">
        <div className="container mx-auto">
          <p>Made with ❤️ for your career journey</p>
          <p className="mt-1 text-gray-500 text-xs">Last updated: April 2025</p>
        </div>
      </footer>
      
      {/* Global CSS for animations */}
      <style jsx global>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}