import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

// Layouts and Pages
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ActivityLogs from './pages/ActivityLogs';
import Alerts from './pages/Alerts';
import Settings from './pages/Settings';

// --- Loading Component ---
const GlobalLoading = () => (
    <div className="flex justify-center items-center h-screen bg-[#0b0f19] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="relative text-center z-10">
            <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="absolute inset-0 border-t-2 border-teal-500 rounded-full animate-spin"></div>
                <div className="absolute inset-2 border-r-2 border-blue-500 rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>
                <div className="absolute inset-4 border-b-2 border-purple-500 rounded-full animate-spin"></div>
            </div>
            <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 tracking-wider animate-pulse">SafeChild</h2>
            <p className="text-gray-500 mt-2 font-bold tracking-widest text-xs uppercase shadow-sm">Secure Connection...</p>
        </div>
    </div>
);

// --- Layout Wrapper ---
const AppLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#0b0f19] font-sans selection:bg-teal-500/30 selection:text-teal-200">
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
                {/* Global Background Elements */}
                <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
                    <div className="absolute top-[5%] left-[-5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen animate-blob"></div>
                    <div className="absolute top-[40%] right-[-10%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-teal-500/10 rounded-full blur-[100px] mix-blend-screen animate-blob" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] bg-purple-500/10 rounded-full blur-[120px] mix-blend-screen animate-blob" style={{ animationDelay: '4s' }}></div>
                </div>
                {/* Content Container */}
                <div className="relative z-10 w-full animate-fade-in-up">
                    {children}
                </div>
            </main>
        </div>
    );
};

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) return <GlobalLoading />;
    if (!user) return <Navigate to="/login" />;

    return children;
};

function App() {
    return (
        <Router>
            <AppLayout>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="/dashboard" element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    } />
                    <Route path="/activity" element={
                        <ProtectedRoute>
                            <ActivityLogs />
                        </ProtectedRoute>
                    } />
                    <Route path="/alerts" element={
                        <ProtectedRoute>
                            <Alerts />
                        </ProtectedRoute>
                    } />
                    <Route path="/settings" element={
                        <ProtectedRoute>
                            <Settings />
                        </ProtectedRoute>
                    } />
                </Routes>
            </AppLayout>
        </Router>
    );
}

export default App;
