import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Shield, Home, Activity, Bell, Settings, LogOut, LogIn, UserPlus } from 'lucide-react';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const navItemClass = (path) => {
        let base = "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out font-medium text-sm ";
        return base + (location.pathname === path ? "bg-blue-500/10 text-blue-400 shadow-[inset_0_-2px_0_theme(colors.blue.500)]" : "text-gray-400 hover:bg-gray-800/80 hover:text-gray-200");
    };

    return (
        <nav className="bg-[#0b0f19]/80 border-b border-gray-800/60 backdrop-blur-xl sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-3 group relative">
                            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            <div className="p-2.5 bg-gradient-to-br from-blue-500/20 to-teal-400/20 rounded-2xl group-hover:from-blue-500/30 group-hover:to-teal-400/30 transition-all duration-300 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] group-hover:scale-105 relative z-10 glass-panel">
                                <Shield className="h-6 w-6 text-blue-400 group-hover:text-blue-300 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-colors" />
                            </div>
                            <span className="font-extrabold text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-400 drop-shadow-sm group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-teal-300 group-hover:to-cyan-400 transition-all duration-500">
                                SafeChild
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-2">
                            {user ? (
                                <>
                                    <Link to="/dashboard" className={navItemClass('/dashboard')}>
                                        <Home size={16} /> Dashboard
                                    </Link>
                                    <Link to="/activity" className={navItemClass('/activity')}>
                                        <Activity size={16} /> Activity
                                    </Link>
                                    <Link to="/alerts" className={navItemClass('/alerts')}>
                                        <Bell size={16} /> Alerts
                                    </Link>
                                    <Link to="/settings" className={navItemClass('/settings')}>
                                        <Settings size={16} /> Settings
                                    </Link>

                                    <div className="ml-6 pl-6 border-l border-gray-800 flex items-center gap-4">
                                        <div className="flex flex-col items-end hidden lg:flex">
                                            <span className="text-sm font-semibold text-gray-200">{user.name}</span>
                                            <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Parent Account</span>
                                        </div>
                                        <div className="group relative">
                                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-teal-400 rounded-full blur group-hover:blur-md opacity-50 group-hover:opacity-80 transition-all duration-300"></div>
                                            <div className="relative h-11 w-11 rounded-full bg-gradient-to-tr from-blue-600 to-teal-400 flex items-center justify-center font-extrabold text-white shadow-lg border-2 border-[#0b0f19] ring-2 ring-blue-500/30 uppercase group-hover:scale-105 transition-transform duration-300 z-10 text-lg">
                                                {user.name.charAt(0)}
                                            </div>
                                        </div>
                                        <button
                                            onClick={handleLogout}
                                            className="flex items-center gap-2 text-red-400/80 hover:text-red-400 hover:bg-red-400/10 p-2 rounded-lg transition-colors"
                                            title="Logout"
                                        >
                                            <LogOut size={18} />
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <div className="flex items-center gap-4">
                                    <Link
                                        to="/login"
                                        className="flex items-center gap-2 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors font-medium text-sm"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all transform hover:-translate-y-0.5 font-semibold text-sm border border-blue-400/30"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
