import { useState, useEffect } from 'react';
import api from '../services/api';
import { Search, Filter, MonitorSmartphone, Globe, Keyboard, Activity, ChevronDown, Clock } from 'lucide-react';

const ActivityLogs = () => {
    const [devices, setDevices] = useState([]);
    const [selectedDevice, setSelectedDevice] = useState('');
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchDevices = async () => {
            try {
                const res = await api.get('/device');
                setDevices(res.data.data);
                if (res.data.data.length > 0) {
                    setSelectedDevice(res.data.data[0]._id);
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchDevices();
    }, []);

    useEffect(() => {
        const fetchLogs = async () => {
            if (!selectedDevice) return;
            try {
                const res = await api.get(`/activity/${selectedDevice}`);
                setLogs(res.data.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchLogs();
    }, [selectedDevice]);

    const filteredLogs = logs.filter(log =>
        log.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.activityType.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getIcon = (type) => {
        switch (type) {
            case 'app_usage': return <MonitorSmartphone size={16} className="text-blue-400 group-hover:text-blue-300 transition-colors" />;
            case 'website_visit': return <Globe size={16} className="text-teal-400 group-hover:text-teal-300 transition-colors" />;
            case 'keyword': return <Keyboard size={16} className="text-purple-400 group-hover:text-purple-300 transition-colors" />;
            default: return <Activity size={16} className="text-gray-400" />;
        }
    };

    const getTypeColor = (type) => {
        switch (type) {
            case 'app_usage': return 'bg-blue-500/10 text-blue-400 border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.1)]';
            case 'website_visit': return 'bg-teal-500/10 text-teal-400 border-teal-500/20 shadow-[0_0_10px_rgba(20,184,166,0.1)]';
            case 'keyword': return 'bg-purple-500/10 text-purple-400 border-purple-500/20 shadow-[0_0_10px_rgba(168,85,247,0.1)]';
            default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
        }
    };

    if (loading) return (
        <div className="flex justify-center items-center min-h-[60vh]">
            <div className="relative">
                <div className="w-16 h-16 border-4 border-teal-500/20 border-t-teal-500 rounded-full animate-spin"></div>
                <div className="w-16 h-16 border-4 border-blue-500/20 border-b-blue-500 rounded-full animate-spin absolute top-0 left-0" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            </div>
        </div>
    );

    return (
        <div className="space-y-8 animate-fade-in-up">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-[#1e293b]/50 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 shadow-2xl relative overflow-hidden glass-panel">
                <div className="absolute right-0 top-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse-slow"></div>
                <div className="absolute left-0 bottom-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                <div className="relative z-10 w-full md:w-auto">
                    <h2 className="text-3xl font-extrabold tracking-tight text-white mb-2 flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/20 shadow-[0_0_15px_rgba(20,184,166,0.2)]">
                            <Activity className="h-7 w-7 text-teal-400" />
                        </div>
                        Activity Logs
                    </h2>
                    <p className="text-gray-400 font-medium">Detailed audit trail of all device interactions and content accessed.</p>
                </div>

                <div className="relative z-10 w-full md:w-64 group">
                    <label className="block text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Select Monitor</label>
                    <div className="relative">
                        <select
                            className="w-full bg-[#1e293b]/80 border border-gray-700 text-white text-sm rounded-xl focus:ring-teal-500 focus:border-teal-500 block p-3.5 appearance-none backdrop-blur-md transition-all shadow-inner hover:border-teal-500/50 font-medium outline-none"
                            value={selectedDevice}
                            onChange={(e) => setSelectedDevice(e.target.value)}
                        >
                            <option value="">Choose a device...</option>
                            {devices.map(d => (
                                <option key={d._id} value={d._id}>{d.name} ({d.deviceType})</option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-3.5 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none group-hover:text-teal-400 transition-colors" size={18} />
                    </div>
                </div>
            </div>

            <div className="bg-[#1e293b]/40 border border-gray-800 shadow-2xl rounded-2xl overflow-hidden glass-panel relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-teal-500/5 pointer-events-none"></div>

                <div className="p-6 border-b border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10 bg-[#0f172a]/40 backdrop-blur-md">
                    <div className="relative w-full sm:w-80 group">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-500 group-focus-within:text-teal-400 transition-colors" />
                        </div>
                        <input
                            type="text"
                            className="bg-[#1e293b]/80 border border-gray-700 text-white text-sm rounded-xl focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 block w-full pl-11 p-3 transition-all placeholder-gray-500 shadow-inner outline-none font-medium"
                            placeholder="Search logs by keyword, app..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button className="flex items-center gap-2 bg-[#1e293b] hover:bg-gray-800 text-gray-300 hover:text-white px-5 py-3 rounded-xl border border-gray-700 hover:border-gray-600 transition-all font-semibold text-sm w-full sm:w-auto hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                        <Filter size={16} /> Filter Results
                    </button>
                </div>

                <div className="overflow-x-auto relative z-10">
                    <table className="w-full text-sm text-left text-gray-400">
                        <thead className="text-xs text-gray-400 uppercase bg-[#0f172a]/60 border-b border-gray-800 font-bold tracking-wider">
                            <tr>
                                <th scope="col" className="px-8 py-5">Type</th>
                                <th scope="col" className="px-6 py-5">Action Content</th>
                                <th scope="col" className="px-6 py-5">Duration</th>
                                <th scope="col" className="px-6 py-5">Timestamp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredLogs.length > 0 ? (
                                filteredLogs.map((log) => (
                                    <tr key={log._id} className="bg-transparent border-b border-gray-800/50 hover:bg-white/[0.02] transition-colors group">
                                        <td className="px-8 py-5 whitespace-nowrap">
                                            <span className={`flex items-center gap-2 w-max px-3 py-1.5 rounded-lg border text-xs font-bold capitalize tracking-wide transition-all ${getTypeColor(log.activityType)}`}>
                                                {getIcon(log.activityType)}
                                                {log.activityType.replace('_', ' ')}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5 font-medium text-gray-200 group-hover:text-white transition-colors text-base">
                                            {log.content}
                                        </td>
                                        <td className="px-6 py-5">
                                            <span className="bg-gray-900/80 px-3 py-1.5 rounded-lg text-gray-300 border border-gray-700 font-semibold shadow-inner">
                                                {log.duration > 0 ? `${log.duration} mins` : '-'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5 whitespace-nowrap flex items-center gap-2 text-gray-400 group-hover:text-gray-300 font-medium">
                                            <Clock size={16} className="opacity-70" />
                                            {new Date(log.timestamp).toLocaleString(undefined, {
                                                month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                                            })}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="px-6 py-16 text-center text-gray-500 bg-[#0f172a]/20">
                                        <div className="flex flex-col items-center justify-center opacity-60">
                                            <Search className="h-12 w-12 text-gray-600 mb-4" />
                                            <p className="text-lg font-medium text-gray-400 mb-1">No activity records found</p>
                                            <p className="text-sm">Try adjusting your search query or selecting a different device.</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ActivityLogs;
