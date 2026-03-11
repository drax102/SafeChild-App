import { useEffect, useState } from 'react';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { Activity, Clock, AlertTriangle, MonitorSmartphone, ChevronRight, Zap } from 'lucide-react';

const Dashboard = () => {
    const { user } = useAuth();
    const [devices, setDevices] = useState([]);
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const devRes = await api.get('/device');
                setDevices(devRes.data.data);

                if (devRes.data.data.length > 0) {
                    const logRes = await api.get(`/activity/${devRes.data.data[0]._id}`);
                    setLogs(logRes.data.data);
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const chartData = [
        { name: 'Mon', time: 120 },
        { name: 'Tue', time: 150 },
        { name: 'Wed', time: 180 },
        { name: 'Thu', time: 90 },
        { name: 'Fri', time: 240 },
        { name: 'Sat', time: 300 },
        { name: 'Sun', time: 210 },
    ];

    if (loading) return (
        <div className="flex justify-center items-center min-h-[60vh]">
            <div className="relative">
                <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
                <div className="w-16 h-16 border-4 border-teal-500/20 border-b-teal-500 rounded-full animate-spin absolute top-0 left-0" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            </div>
        </div>
    );

    return (
        <div className="space-y-8 animate-fade-in-up">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#1e293b]/50 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 shadow-2xl relative overflow-hidden glass-panel">
                <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse-slow"></div>
                <div className="absolute left-0 bottom-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                <div className="relative z-10">
                    <h2 className="text-4xl font-extrabold tracking-tight text-white mb-2">Parent Dashboard</h2>
                    <p className="text-gray-400 font-medium text-lg mt-2">Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">{user.name}</span>. Here's a live overview of your children's digital footprint.</p>
                </div>
                <button className="relative z-10 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-6 py-3 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all font-semibold flex items-center gap-2 transform hover:-translate-y-0.5 border border-blue-400/30">
                    <MonitorSmartphone size={18} /> Add Device
                    <ChevronRight size={16} className="opacity-70" />
                </button>
            </div>

            {devices.length === 0 ? (
                <div className="bg-[#1e293b]/40 border border-gray-700/50 rounded-2xl p-16 text-center glass-panel flex flex-col items-center justify-center">
                    <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 shadow-inner mb-6 relative">
                        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse-slow"></div>
                        <MonitorSmartphone className="h-10 w-10 text-gray-400 relative z-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">No Devices Monitored</h3>
                    <p className="text-gray-400 max-w-sm mx-auto text-lg">Your dashboard is empty. Link a child's phone or computer to start receiving live insights.</p>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-[#1e293b]/60 border border-gray-700/50 rounded-3xl p-6 glass-panel glass-panel-hover relative overflow-hidden group hover:border-blue-500/50 transition-colors">
                            <div className="absolute -right-6 -top-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-all duration-500"></div>
                            <div className="flex items-center gap-5 relative z-10">
                                <div className="p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl border border-blue-500/20 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-300">
                                    <MonitorSmartphone className="h-7 w-7" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Active Devices</p>
                                    <p className="text-4xl font-extrabold text-white tracking-tight">{devices.length}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#1e293b]/60 border border-gray-700/50 rounded-3xl p-6 glass-panel glass-panel-hover relative overflow-hidden group hover:border-teal-500/50 transition-colors">
                            <div className="absolute -right-6 -top-6 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl group-hover:bg-teal-500/30 transition-all duration-500"></div>
                            <div className="flex items-center gap-5 relative z-10">
                                <div className="p-4 bg-gradient-to-br from-teal-500/20 to-teal-600/10 rounded-2xl border border-teal-500/20 text-teal-400 shadow-[0_0_15px_rgba(20,184,166,0.15)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] transition-all duration-300">
                                    <Clock className="h-7 w-7" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Avg Screen Time</p>
                                    <p className="text-4xl font-extrabold text-white tracking-tight">3h 45m</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#1e293b]/60 border border-gray-700/50 rounded-3xl p-6 glass-panel glass-panel-hover relative overflow-hidden group hover:border-rose-500/50 transition-colors">
                            <div className="absolute -right-6 -top-6 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl group-hover:bg-rose-500/30 transition-all duration-500"></div>
                            <div className="flex items-center gap-5 relative z-10">
                                <div className="p-4 bg-gradient-to-br from-rose-500/20 to-rose-600/10 rounded-2xl border border-rose-500/20 text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.15)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(244,63,94,0.4)] transition-all duration-300">
                                    <AlertTriangle className="h-7 w-7" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Recent Alerts</p>
                                    <div className="flex items-center gap-3">
                                        <p className="text-4xl font-extrabold text-white tracking-tight">2</p>
                                        <span className="text-xs font-bold text-rose-400 bg-rose-500/10 px-2 py-1 rounded-md border border-rose-500/30 flex items-center gap-1 shadow-sm animate-pulse">
                                            <Zap size={12} /> Action Req
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 bg-[#1e293b]/40 border border-gray-800 shadow-2xl rounded-2xl p-6 lg:p-8 glass-panel flex flex-col items-center text-center justify-center min-h-[350px]">
                            <svg className="w-16 h-16 text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <h3 className="text-xl font-bold text-white mb-2">Awaiting Analytics</h3>
                            <p className="text-gray-400 text-sm max-w-sm">Connect a device to start tracking screen time and visualizing the usage data here.</p>
                        </div>

                        <div className="bg-[#1e293b]/40 border border-gray-800 shadow-2xl rounded-2xl p-6 glass-panel flex flex-col">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/20">
                                        <Clock size={20} className="text-teal-400" />
                                    </div>
                                    Live Feed
                                </h3>
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
                                </span>
                            </div>

                            <div className="space-y-4 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                                {logs.slice(0, 6).map((log, i) => (
                                    <div key={log._id} className="group flex justify-between items-start p-3 hover:bg-gray-800/50 rounded-xl transition-colors border border-transparent hover:border-gray-700/50">
                                        <div className="flex gap-3 items-start">
                                            <div className="mt-1 w-2 h-2 rounded-full bg-gray-600 group-hover:bg-blue-400 transition-colors"></div>
                                            <div>
                                                <p className="text-gray-200 font-semibold text-sm line-clamp-1">{log.content}</p>
                                                <p className="text-gray-500 text-xs mt-1 capitalize font-medium">{log.activityType.replace('_', ' ')}</p>
                                            </div>
                                        </div>
                                        <span className="text-xs text-gray-500 font-semibold group-hover:text-blue-400 transition-colors whitespace-nowrap ml-2">
                                            {new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                ))}
                                {logs.length === 0 && (
                                    <div className="h-full flex flex-col items-center justify-center text-center opacity-60 min-h-[250px]">
                                        <Activity className="h-10 w-10 text-gray-500 mb-2" />
                                        <p className="text-gray-400 text-sm font-medium">Listening for events...</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Dashboard;
