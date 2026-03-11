import { useAuth } from '../context/AuthContext';
import { User, Shield, Bell, Smartphone, Server, FileText, Lock } from 'lucide-react';

const Settings = () => {
    const { user } = useAuth();

    return (
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
            {/* Header Section */}
            <div className="bg-[#1e293b]/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                    <div>
                        <h2 className="text-3xl font-extrabold text-white tracking-tight">Account Settings</h2>
                        <p className="text-gray-400 mt-2 text-lg">Manage your profile, preferences, and system configurations.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transform hover:-translate-y-0.5">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Sidebar Navigation */}
                <div className="md:col-span-1">
                    <div className="bg-[#1e293b]/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-4 sticky top-8 shadow-lg">
                        <nav className="space-y-1">
                            <a href="#" className="flex items-center gap-3 px-4 py-3 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-xl font-medium transition-all shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                                <User size={20} /> <span className="tracking-wide">Profile</span>
                            </a>
                            <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-[#0f172a]/60 hover:text-white rounded-xl font-medium transition-colors group">
                                <Bell size={20} className="group-hover:text-teal-400 transition-colors" /> <span className="tracking-wide">Notifications</span>
                            </a>
                            <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-[#0f172a]/60 hover:text-white rounded-xl font-medium transition-colors group">
                                <Shield size={20} className="group-hover:text-purple-400 transition-colors" /> <span className="tracking-wide">Security</span>
                            </a>
                            <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-[#0f172a]/60 hover:text-white rounded-xl font-medium transition-colors group">
                                <Smartphone size={20} className="group-hover:text-blue-400 transition-colors" /> <span className="tracking-wide">Linked Devices</span>
                            </a>
                            <div className="pt-4 mt-4 border-t border-gray-700/50">
                                <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-rose-500/10 hover:text-rose-400 rounded-xl font-medium transition-colors group">
                                    <Lock size={20} className="group-hover:text-rose-400 transition-colors" /> <span className="tracking-wide text-sm">Sign Out Everywhere</span>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="md:col-span-3 space-y-8">
                    {/* Profile Section */}
                    <div className="bg-[#1e293b]/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-teal-400 opacity-50"></div>

                        <div className="flex items-center gap-3 mb-6 border-b border-gray-700/50 pb-4">
                            <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                                <User size={24} className="text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white tracking-tight">Personal Information</h3>
                        </div>

                        <div className="space-y-6">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                <div className="h-20 w-20 bg-gradient-to-br from-blue-600 to-teal-500 border-2 border-gray-700 shadow-[0_0_20px_rgba(59,130,246,0.3)] rounded-2xl flex items-center justify-center text-3xl font-extrabold text-white shrink-0">
                                    {user?.name?.charAt(0) || 'P'}
                                </div>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-white font-semibold">Avatar Image</p>
                                        <p className="text-sm text-gray-400 mt-0.5">JPG, GIF or PNG. 1MB max.</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <button className="text-sm bg-[#0f172a]/80 hover:bg-[#0f172a] text-white px-4 py-2 rounded-xl border border-gray-600 hover:border-blue-400 transition-all shadow-sm">
                                            Upload New
                                        </button>
                                        <button className="text-sm bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 hover:text-rose-300 px-4 py-2 rounded-xl border border-rose-500/20 hover:border-rose-500/40 transition-colors">
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        defaultValue={user?.name}
                                        className="appearance-none block w-full px-4 py-3 bg-[#0f172a]/80 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-inner font-medium"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        defaultValue={user?.email}
                                        disabled
                                        className="appearance-none block w-full px-4 py-3 bg-[#0f172a]/40 border border-gray-800 rounded-xl text-gray-400 cursor-not-allowed shadow-inner font-medium opacity-70"
                                    />
                                    <p className="mt-1.5 text-xs text-gray-500 flex items-center gap-1">
                                        <Lock size={12} /> Email cannot be changed
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Prefernences Section */}
                    <div className="bg-[#1e293b]/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-blue-400 opacity-50"></div>

                        <div className="flex items-center gap-3 mb-6 border-b border-gray-700/50 pb-4">
                            <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
                                <Server size={24} className="text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white tracking-tight">System Preferences</h3>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center justify-between p-4 bg-[#0f172a]/50 rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 p-2 bg-teal-500/10 rounded-lg text-teal-400">
                                        <Bell size={20} />
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold text-lg">Push Notifications</p>
                                        <p className="text-sm text-gray-400 mt-1">Receive critical alerts on your mobile device instantly.</p>
                                    </div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer ml-4">
                                    <input type="checkbox" defaultChecked className="sr-only peer" />
                                    <div className="w-14 h-7 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-teal-500 shadow-inner border border-gray-600 peer-checked:border-teal-400"></div>
                                </label>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-[#0f172a]/50 rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 p-2 bg-blue-500/10 rounded-lg text-blue-400">
                                        <FileText size={20} />
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold text-lg">Weekly Reports</p>
                                        <p className="text-sm text-gray-400 mt-1">Send a summarized activity report to {user?.email} every Sunday.</p>
                                    </div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer ml-4">
                                    <input type="checkbox" defaultChecked className="sr-only peer" />
                                    <div className="w-14 h-7 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-500 shadow-inner border border-gray-600 peer-checked:border-blue-400"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
